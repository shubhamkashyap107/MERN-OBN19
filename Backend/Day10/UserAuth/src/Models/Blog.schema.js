const mongoose = require("mongoose")


const BlogSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        minLength : 5,
        maxLength : 1000,
        trim : true
    },
    image : {
        type : String,
        default : ""
    },
    genre : {
        type : String,
        enum : {
            values : ["Entertainment", "Sports", "IT", "Current Affairs"],
            message : "{VALUE} is not a valid genre"
        }
    },
    author : {
        // type : String,
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        immutable : true,
        ref : "User"
    }
    
}, {timestamps : true})



const Blog = mongoose.model("Blog", BlogSchema)

module.exports = {
    Blog
}