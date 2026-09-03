require("dotenv").config()
const express = require("express")
const app = express()
const { connectDB } = require("./utils/db")
const{ ProductRouter } = require("./Routes/Product.Routes")
const { default: mongoose } = require("mongoose")

app.use(express.json())
app.use("/api/products", ProductRouter)




mongoose.connect(process.env.MONGO_URL)
.then(() => {

    console.log("DB COnnected")

    app.listen(8080, () => {
        console.log("Server running")
    })

})
.catch((err) => {
    console.log("DB connection failed")
})





