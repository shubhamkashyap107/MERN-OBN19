require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { todoRouter } = require("./routes/todo.routes")
const app = express()



app.use(cors({
    // origin : ["http://localhost:5173", "deployedUrl"]
    origin : process.env.FRONTEND_URL,
    methods : ["GET", "POST", "PUT", "PATCH", "DELETE"]
}))
app.use(express.json())
app.use("/api/todos", todoRouter)

app.listen(8080, () => {
    console.log("Server Running")
})