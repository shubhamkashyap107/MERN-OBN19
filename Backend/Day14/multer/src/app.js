const express = require("express")
const mongoose = require("mongoose")
const multer = require("multer")
const axios = require("axios")
const FormData = require("form-data")
const {Product} = require("./models/Products.schema")
const app = express()

const upload = multer()


mongoose.connect("api")
.then(() => {
    console.log("DB Connected")

    app.listen(8080, () => {
        console.log("Server Running")
    })
})



app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use(upload.single("image"))



app.post("/add-product", upload.single("image") ,async(req, res) => {
    try {
        const{name, price} = req.body
        // console.log(req.body)
        // console.log(req.file) //in case of single file
        // console.log(req.files) // [{}, {}]

        const form = new FormData()

        form.append("file", req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype
        });
        form.append("upload_preset", "shubhampreset")

        const response = await axios.post("https://api.cloudinary.com/v1_1/obn19/upload", form)

        // console.log(response.data)


        const createdProduct = await Product.create({image : response.data.secure_url, name, price})

        


        res.json({
            msg : "DONE",
            data : createdProduct
        })
    } catch (error) {
        console.log(error)
        res.json({
            err : error.message
        })
    }
})