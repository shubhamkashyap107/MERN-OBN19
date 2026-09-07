require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { UserRouter } = require("./Routes/User.route")

app.use(express.json())
app.use("/api/users", UserRouter) // "/api/user/kuchbhi"
// app.get("/api/user", UserRouter) // "/api/user"


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB Connected")

    app.listen(8080, () => {
        console.log("Server Running")
    })
})








