const mongoose = require("mongoose")

// const{ Schema } = mongoose



const userSchema = new mongoose.Schema({

    name : {
        type : String,
        minLength : 3,
        maxLength : 10,
        required : true, 
        trim : true,
        immutable : true, 
        // unique : true
    },
    age : {
        type : Number,
        min : 18,
        max : 120,
        required : true,   
    },
    isPresent : {
        type : Boolean,
        required : true,
        default : false
    }


})



const User = mongoose.model("User", userSchema) 

module.exports = { User }
