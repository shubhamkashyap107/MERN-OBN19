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



productSchema.pre("save", function() {
    console.log("1. PRE SAVE");

    // intentionally don't call next()
});


productSchema.post("findOneAndDelete", function(obj) {
    console.log(obj.name, "Deleted")
})

const Product = mongoose.model("Product", productSchema)


module.exports = {
    Product
}