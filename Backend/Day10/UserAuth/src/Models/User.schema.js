const mongoose = require("mongoose")
const validator = require("validator")


const UserSchema = new mongoose.Schema({
    firstName : {
        minLength : 2,
        maxLength : 20,
        type : String,
        required : true,
        immutable : true,
        trim : true
    },
    lastName : {
        minLength : 3, 
        maxLength : 20,
        type : String,
        required : true,
        immutable : true,
        trim : true
    },
    email : { 
        required : true,
        type : String,
        validate : 
        [
            (data) => {
                return validator.isEmail(data)
            }, 
            "{VALUE} is not a valid email" // PATH, VALUE
        ],
        maxLength : 60,
        immutable : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    username : {
        unique : true,
        type : String, 
        minLength : 4,
        maxLength : 12,
        trim : true,
        lowercase : true,
        required : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    blogs : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Blog"
        }
    ],
    gender : {
        type : String,
        required : true,
        // enum : ["male", "female", "others"],
        enum : {
            values : ["male", "female", "others"],
            message : "{VALUE} is not a valid gender"
        },
    },
    
})


const User = mongoose.model("User", UserSchema)


module.exports = { User }