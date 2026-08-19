require("dotenv").config()
const express = require("express")
const app = express()
const{ UserRouter } = require("./routes/User.route")
const{ ProductRouter } = require("./routes/Product.route")
const { isLoggedIn } = require("./middlewares/isLoggedIn")
const naam = requir

// domain/api/users


// app.use(isLoggedIn)

app.use("/api/products", ProductRouter)
app.use("/api/users", UserRouter)


app.use((req,res) => {
    res.json({
        err : "Not found"
    })
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


