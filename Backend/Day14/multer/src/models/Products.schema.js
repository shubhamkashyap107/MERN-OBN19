const validator=require('validator')

const mongoose=require("mongoose")

const ProductSchema= new mongoose.Schema(
    {

        name:{
            type:String, 
            required:true,
            trim:true, 
            minLength:4, 
            maxLength:25
        

        }, 
        price:{
                type:Number, 
                required:true, 
                min:100, 

        }, 
        image:{
            type:String, 
            validate:{
                validator:(data)=>{
                    return validator.isURL(data)
                    
                }, 
                message:"{VALUE} is not a valid URL "

            },
            required : true



        }
    }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = {
    Product
}