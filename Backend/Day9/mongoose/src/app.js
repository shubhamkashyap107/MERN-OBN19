require("dotenv").config()
const express = require("express")
const app = express()
const { connectDB } = require("./utils/db")
const{ ProductRouter } = require("./Routes/Product.Routes")
const { default: mongoose } = require("mongoose")
const { Logger } = require("./Middelwares/Logger")


app.use(express.json())

//api/prod/testing
// app.use("/api", Logger)
app.use(Logger)
app.use ("/api/products",ProductRouter)



// app.use("/testing", (req, res) => { // fe -> /testing/123/asdfghj
//     res.send("OK")
// })

// app.get("/testing", (req, res) => { // fe -> /testing
//     res.send("OK")
// })



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





