require("dotenv").config()
const mongoose = require("mongoose")
const cp = require("cookie-parser")
const express = require("express")
const app = express()
const { UserRouter } = require("./Routes/User.route")
const { BlogRouter } = require("./Routes/Blog.route")






app.use(express.json())
app.use(cp())
app.use("/api/blogs", BlogRouter)
app.use("/api/users", UserRouter) // "/api/user/kuchbhi"
// app.get("/api/user", UserRouter) // "/api/user"







mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB Connected")

    app.listen(8080, () => {
        console.log("Server Running")
    })
})








