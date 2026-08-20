const express = require("express")
const { todoRouter } = require("./routes/todo.routes")
const app = express()

app.use(express.json())
app.use("/api/todos", todoRouter)

app.listen(8080, () => {
    console.log("Server Running")
})