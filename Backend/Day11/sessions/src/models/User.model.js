const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    pin : {
        type : Number,
        min : 1000,
        max : 9999,
        required : true
    },
    username : {
        type : String,
        required : true,
        trim : true,
        minLength : 8,
        maxLength : 12
    },
    balance : {
        type : Number,
        min : 0,
        default : 100
    }
}, {timestamps : true})


const User = mongoose.model("User", UserSchema)

module.exports = {
    User
}
