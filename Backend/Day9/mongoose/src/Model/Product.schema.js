const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 10,
        maxLength : 100
    },
    price : {
        type : Number,
        required : true,
        min : 100
    },
    // createdAt : {
    //     type : NUmber,
    //     default : Date.now()
    // }
}, {timestamps : true})

const Product = mongoose.model("Product", productSchema)


module.exports = {
    Product
}