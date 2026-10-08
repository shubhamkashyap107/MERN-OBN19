# Jeera — Interview Cheat Sheet

## 1. Elevator pitch (30 seconds)

> Jeera is a **multi-tenant team and task management app with real-time chat**, built on the MERN stack. A platform **owner** creates organizations and their **admins**. Each admin manages **teams, employees and tasks** inside their own organization, and **employees** track and update the tasks assigned to them. Everyone in an organization can **chat one-to-one in real time** over socket.io. The core design problem was **tenant isolation**: data must never leak between organizations, so every query is scoped server-side by the logged-in user's organization.

## 2. Resume bullets (pick 3–4)

- Built a **multi-tenant MERN task management platform** with 3-tier role-based access control (Owner → Admin → Employee) and strict per-organization data isolation.
- Implemented **cookie-based JWT authentication** (HTTP-only, `SameSite=None; Secure` in production) shared by the REST API and the **socket.io** real-time chat server.
- Designed a **composable Express middleware chain** (authentication → organization-active check → role authorization) and centralized error handling built on Express 5's async error forwarding.
- Built **real-time one-to-one messaging** with per-user socket rooms, server-side sender identity, org-scoped recipients, acknowledgements and persisted history.
- Wrote **MongoDB aggregation pipelines** (`$group`, `$cond`, `$lookup` with a sub-pipeline) for owner analytics dashboards.
- Built a **React 19 + Redux Toolkit + Tailwind** dashboard with role-gated nested routes and a reusable UI component library. Deployed the backend and frontend separately on **Render**.

## 3. Tech stack and why

| Layer    | Tech | Why |
| -------- | ---- | --- |
| Backend  | Node 20, **Express 5** | Express 5 sends rejected async handlers to the error middleware automatically, so handlers need no try/catch |
| DB       | **MongoDB + Mongoose** | Flexible documents, refs + `populate`, schema validation, aggregation |
| Auth     | **JWT** in an **HTTP-only cookie**, **bcrypt** | JavaScript can't read the cookie, so XSS can't steal the token; passwords are stored as bcrypt hashes |
| Realtime | **socket.io** | Rooms, acknowledgements, reconnection, CORS with credentials |
| Validation | **validator.js** + Mongoose schema rules | Email, strong-password and JWT format checks |
| Frontend | **React 19, Vite, React Router 7** | Fast dev server, nested layout routes |
| State    | **Redux Toolkit** (user only) + local state / custom hooks | Global state kept small; page data lives in hooks |
| Styling  | **Tailwind v4**, lucide-react icons, react-hot-toast | |
| HTTP     | **axios** instance with `withCredentials: true` | Every request sends the cookie |
| Deploy   | Render: Web Service (API) + Static Site (SPA) | |

## 4. Architecture

```
React SPA (Vite) ──axios (cookie)──► Express REST API ──► MongoDB
       │                                   │
       └──socket.io-client (cookie)──► socket.io server (same http server)
```

- Express and socket.io share **one `http.createServer`**, so one port and one deployment.
- The frontend and backend are on **different domains** in production, which is why the setup uses CORS with `credentials: true`, a fixed allow-list of origins (`CLIENT_URL`), `SameSite=None; Secure` cookies and `trust proxy`.

### Backend layout
```
src/app.js        env check, CORS, routers, 404, global error handler, DB connect → listen
src/socket.js     socket auth + send-msg handler
Routes/           auth, owner, admin, employee, analytics, chats
Controllers/      business logic
Middlewares/      isLoggedIn, isOrganizationActive, authorize
Models/           User, Organization, Team, Task, Chat
Utils/            AppError, cookieOptions, AddOwner (seed script)
```

## 5. Roles and permissions

| Role | Belongs to | Can do |
| ---- | ---------- | ------ |
| **Owner** | nothing (global) | Create, list, update and deactivate organizations; create and (de)activate admins; view platform analytics |
| **Admin** | one organization | CRUD teams, employees and tasks in their org; move employees between teams; chat |
| **Employee** | org + team | See their own tasks and change their status; chat |

All roles are stored in **one `User` collection** with a `role` enum. There is no public sign-up: the owner is seeded by a script, the owner creates admins, and admins create employees.

## 6. Data models

| Model | Key fields | Notes |
| ----- | ---------- | ----- |
| **User** | name, email (unique, immutable), password (hash), role, organizationId, `teamdId`, isActive | A `toJSON` transform strips the password from every response |
| **Organization** | name (unique), createdBy, isActive | Registered as `"organization"` |
| **Team** | name, organizationId, adminId, isActive | **Compound unique index `{organizationId, name}`**: team names are unique within an org, not globally |
| **Task** | title, description, status (`todo`/`in-progress`/`completed`), priority (`low`/`medium`/`high`), organizationId, teamId, assignedTo, createdBy, dueDate | `organizationId` and `createdBy` are `immutable` |
| **Chat** | text (≤1000), sender, receiver, timestamps | **Index `{sender, receiver}`** speeds up history lookups |

## 7. Authentication flow

1. `POST /api/auth/login`: find the user by email, `bcrypt.compare`, reject inactive users, then sign a JWT `{ _id }` that expires in **1 day**.
2. The token is set as cookie `token`: `httpOnly`, `secure` and `sameSite: none` over HTTPS, or `lax` over HTTP (browsers reject `None` without `Secure`, so local dev uses `lax`).
3. On every protected request, **`isLoggedIn`** checks the token format, runs `jwt.verify`, **loads the user from the DB** with the organization populated, rejects deactivated users, and sets `req.user`.
4. `GET /api/auth/me` returns the user plus their org and team. The frontend calls it to restore the session on page load.
5. `POST /api/auth/logout` clears the cookie **using the same options it was set with**, otherwise the browser keeps it.

**Why look up the DB on every request instead of trusting the JWT payload?** Deactivating a user or an org takes effect **immediately** and doesn't have to wait for the token to expire. Role and org are never read from the token, so a stale token can't keep old privileges.

## 8. Middleware chain (what to explain on a whiteboard)

```
isLoggedIn → isOrganizationActive → authorize("admin") → controller
```
- `isOrganizationActive`: if the org is deactivated, its admins and employees are locked out (owners skip this check).
- `authorize(...roles)` is a **higher-order function** that returns middleware, and returns 403 if the role is not in the list.
- Errors: controllers `throw new AppError(status, msg)`. The global handler maps:
  - Mongo `11000` duplicate key → **409** "`field` already exists"
  - `JsonWebTokenError` / `TokenExpiredError` → **401**
  - `CastError` → **400** "Invalid ID"
  - anything else → `err.status || 400`, as `{ message }`

## 9. Multi-tenancy (the most likely deep-dive)

- **Shared database, shared collections**, isolated by an `organizationId` field (the "pool" model, as opposed to one database per tenant).
- **Every org-scoped query filters by `req.user.organizationId._id`**, for example `Team.findOne({ _id: id, organizationId })`. Guessing another org's ObjectId therefore returns 404, not their data (this prevents **IDOR**).
- **Fields that could be faked are never taken from the request body:** `organizationId`, `role` and `createdBy` come from `req.user`, and a task's `teamId` comes from its assignee.
- Employees can only read and update tasks where `assignedTo == req.user._id`, and can only change `status`.
- Chat recipients must be **active users in the same organization**.

## 10. Business rules worth mentioning

- **Soft deletes**: `DELETE` on orgs, teams, admins and employees sets `isActive: false`, which keeps history and lets them be reactivated with `PATCH`. Tasks are hard-deleted.
- **Tasks follow their assignee**: on create or update, `teamId` is copied from the employee. Moving an employee to another team runs `Task.updateMany` to move their tasks too, which keeps the data consistent.
- Tasks can only be assigned to employees who are active and on a team in your org (`findAssignableEmployee`).
- Employees can't be added to an inactive team.
- Passwords must be **strong** (`validator.isStrongPassword`: 8+ chars with upper, lower, number and symbol).
- Organization list supports **pagination** (`limit` capped at 100, `skip` = page index).

## 11. Real-time chat (socket.io)

- **Handshake auth:** `io.engine.use(cookieParser())` lets the socket read the same `token` cookie. The `io.use` middleware repeats the HTTP checks: the user exists and is active, the role is admin or employee, and the org is active.
- **Rooms:** each socket joins a room named after its **user id**, so a message reaches every open tab of that user.
- **`send-msg` `{ text, receiver }`**: validate the text (1–1000 chars) and the receiver (a valid ObjectId, not yourself, active, same org), **save to MongoDB**, then `io.to(receiver).to(sender).emit("rec-msg", chat)` and call the **ack** callback with the saved message or an error.
- **The sender always comes from the authenticated socket**, never from the payload, so one user can't impersonate another.
- **History:** `GET /api/chats/:id` runs `$or` over both directions, sorted by `_id` (ObjectIds increase over time).
- **Client:** loads history over REST, then listens live. Because a message can arrive through both the ack and the echo, the client **dedupes by `_id`**. It also filters incoming messages to the open conversation and disconnects on unmount.

## 12. Analytics (aggregation)

- `GET /api/analytics`: `$group` with `$sum: 1` for the total and `$sum: { $cond: [isActive, 1, 0] }` for active orgs, plus `countDocuments` for admins.
- `GET /api/analytics/get-all-orgs-data`: `$lookup` with a **`let` + sub-pipeline** that counts admins per org, then `$addFields` (`$ifNull` → 0), `$project`, `$sort` by createdAt desc and `$limit 4` (recent organizations).

## 13. Frontend

- **Routing:** `ProtectedRoutes` (calls `/me`, stores the user in Redux, redirects to `/login` on failure) → `DashboardLayout` (Navbar + Sidebar + `<Outlet/>`) → `RoleRoute roles={[...]}` (redirects to `/dashboard` if the role isn't allowed). `/dashboard` renders a different dashboard per role.
- Route guards on the frontend are only for **UX**. **Security is enforced by the backend.**
- **Redux** holds only the logged-in user. Page data lives in custom hooks:
  - `useAdminWorkspace` loads teams and tasks in parallel (`Promise.all`), then the employees of every team, and exposes `upsert / remove / reload` so the UI updates in place after a mutation without refetching.
  - `useMyTasks` serves employee pages.
- **One axios instance** (`baseURL`, `withCredentials`), with error toasts through `getErrorMessage`.
- Reusable UI kit: Modal, ConfirmDialog, Table, StatCard, Badges, Field, EmptyState… Form modals get a changing `key` so their state resets each time they open.
- **SPA on Render:** a rewrite of `/*` to `/index.html` makes deep links work on refresh. `VITE_BACKEND_URL` is baked in at build time.

## 14. API quick reference

| Method & path | Role |
| ------------- | ---- |
| `POST /api/auth/login`, `POST /logout`, `GET /me` | any |
| `POST/GET /api/owner/`, `GET/PATCH/DELETE /api/owner/:id` | owner (orgs) |
| `POST/GET /api/owner/organization/:id/admin`, `GET/PATCH/DELETE /api/owner/admin/:id` | owner (admins) |
| `POST/GET /api/admin/teams`, `GET/PATCH/DELETE /api/admin/teams/:id` | admin |
| `POST/GET /api/admin/teams/:teamId/employees`, `PATCH/DELETE /api/admin/employees/:employeeId` | admin |
| `POST /api/admin/tasks/employee/:employeeId`, `GET /api/admin/tasks`, `GET/PATCH/DELETE /api/admin/tasks/:taskId` | admin |
| `GET /api/employee/tasks`, `GET/PATCH /api/employee/tasks/:taskId` | employee |
| `GET /api/analytics`, `GET /api/analytics/get-all-orgs-data` | owner |
| `GET /api/chats`, `GET /api/chats/:id` | admin, employee |
| `GET /health` | Render health check |

## 15. Likely interview questions and answers

**Why cookies instead of localStorage for the JWT?**
JavaScript can't read an HTTP-only cookie, so an XSS bug can't steal the token. The tradeoff is CSRF exposure. That is reduced by a strict CORS allow-list with credentials and JSON-only endpoints, and could be closed fully with CSRF tokens.

**How does cross-domain auth work in production?**
The frontend and API are on different Render domains, so the cookie must be `SameSite=None; Secure`, CORS must allow that exact origin with `credentials: true`, and axios and socket.io must send `withCredentials`. Render terminates TLS at its proxy, so `app.set("trust proxy", 1)` is needed for `req.secure` to be true.

**How do you stop one organization reading another's data?**
Every query includes `organizationId` from the authenticated user. Nothing tenant-related is trusted from the client. An ID from another org simply matches nothing and returns 404.

**How does RBAC work?**
The role is a field on `User`. `authorize(...roles)` is a middleware factory used per route, and the frontend mirrors it with `RoleRoute` for UX only.

**What happens when an admin is deactivated mid-session?**
The next request fails in `isLoggedIn`, because the user is re-read from the DB on every request. A deactivated org locks out all its users through `isOrganizationActive`.

**How are errors handled without try/catch?**
Express 5 forwards rejected promises from async handlers to the error middleware. `AppError` carries the status, and the global handler normalizes Mongo, JWT and cast errors.

**How does chat authentication work?**
Cookie-parser runs on the socket.io engine, the token is verified in `io.use`, and the user is attached to `socket.user`. The sender is taken from the socket and never from the payload.

**How would you scale chat to several servers?**
Use the **socket.io Redis adapter** so room emits reach sockets on other instances, plus sticky sessions or WebSocket-only transport. Add pagination to history.

**Why soft delete?**
It keeps references and history intact (tasks, chats, createdBy), allows reactivation, and lets an org be "turned off" without data loss.

**Why does a task store `teamId` if the employee already has one?**
It's denormalized so team-level task queries don't need a join. The cost is keeping it in sync, which is why moving an employee runs `updateMany` on their tasks.

**What indexes exist and why?**
- Unique `email` and unique org `name`.
- Compound unique `{organizationId, name}` on Team, for per-tenant unique names.
- `{sender, receiver}` on Chat, for history queries.

**What happens on a duplicate email?**
Mongo throws error 11000, and the global handler turns it into 409 "email already exists".

**How is the password never leaked?**
It's hashed with bcrypt (cost 10), and a schema-level `toJSON` transform deletes `password` from every serialized user.

## 16. Honest limitations and what I'd improve

Interviewers like it when you name the weaknesses yourself:

- **No automated tests.** Next steps would be Jest + Supertest for the API and React Testing Library for the UI.
- **No rate limiting on login.** Add `express-rate-limit` and account lockout.
- **Login returns 404 "User does not exists" vs 400 "Invalid Credentials"**, which lets someone check whether an email is registered. Return one generic message instead.
- **No refresh tokens.** A session lasts 1 day and then the user must log in again.
- **No CSRF token.** It relies on SameSite and CORS.
- **N+1 requests on the admin frontend**: employees are fetched once per team. An org-wide `/employees` endpoint would fix it.
- **Chat**: single server (no Redis adapter), no pagination, no read receipts, typing indicators or group chats, and the socket connects per open conversation instead of once per app.
- **The task/team relation is kept consistent in code without transactions.** If the second write fails, they can drift. A Mongo transaction would fix it.
- **Naming quirk**: the User field is `teamdId` (a typo). Renaming it needs a data migration.
- No file attachments, notifications, audit log or search.

## 17. Numbers to remember

- 3 roles, 5 models, 6 routers, 34 endpoints (+ `/health`)
- JWT expiry **1 day**, bcrypt cost **10**, chat message max **1000** chars
- Org pagination: default limit **10**, max **100**
- Analytics shows the **4** most recent organizations
