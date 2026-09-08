const { default: mongoose } = require("mongoose")
const { Blog } = require("../Models/Blog.schema")

const isAuthor = async(req, res, next) => {

    try {
        const{ id } = req.params


        if(!mongoose.Types.ObjectId.isValid(id))
        {
            throw new Error("Invalid id..")
        }

        const foundPost = await Blog.findById(id)

        if(!foundPost)
        {
            throw new Error("No post found..")
        }

        // console.log(foundPost.author.toString(), req.user._id.toString())
        if(foundPost.author.toString() != req.user._id.toString())
        {
            throw new Error("Unauthorised operation")
        }

        next()
    } catch (error) {
        res
        .status(401)
        .json({
            err : error.message
        })
    }

}


module.exports = {
    isAuthor
}