require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const { UserRouter } = require("./Routes/User.Routes")
const app = express()


app.use(express.json())
app.use("/api/user", UserRouter)

mongoose.connect(process.env.DB_URL)
.then((d) => {
    console.log("DB Connected successfully")
})
.catch((err) => {
    console.log(err.message)
})


app.listen(8080, () => {
    console.log("Server running")
})
