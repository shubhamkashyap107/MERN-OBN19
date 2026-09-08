const express = require("express")
const { isLoggedIn } = require("../Middlewares/isLoggedIn")
const { isAuthor } = require("../Middlewares/isAuthor")
const { Blog } = require("../Models/Blog.schema")
const { User } = require("../Models/User.schema")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose")


// CRUD

router.post("/", isLoggedIn, async(req, res) => {
    try {
        const{ content, genre } = req.body

        if(!content || !genre)
        {
            throw new Error("Please provide all the fields..")
        }

        const createdBlog = await Blog.create({content, genre, author : req.user._id})


        req.user.blogs.push(createdBlog._id)
        req.user.save()

        console.log(req.user)


        res
        .status(201)
        .json({
            msg : "Blog posted",
            data : createdBlog
        })

    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }

    
})

router.get("/", isLoggedIn, async(req, res) => {

    try {
        
        const allBlogs = await Blog.find()
        
        res.status(200).json({
            data : allBlogs
        })
        
    } catch (error) {
        res
        .status(400)
        .json({
            err : err.message
        })
    }
    
    
})

router.get("/:id", isLoggedIn, async(req, res) => {
    try {
        const{ id } = req.params

        const foundPost = await Blog.findById(id).populate("author").select()

        if(!foundPost)
        {
            throw new Error("Blog not found..")
        }

        res.status(200).json({
            data : foundPost
        })
    } catch (error) {
        res
        .status(400)
        .json({
            err : error.message
        })
        
    }
})

router.delete("/:id", isLoggedIn, isAuthor, async(req, res) => {
    try {
        
        const{ id } = req.params

        const obj = await Blog.findByIdAndDelete(id)

        res.json({
            msg : "Post deleted successfully",
            data : obj
        })
    } catch (error) {
        res
        .status(400)
        .json({
            err : error.message
        })
    }
})

router.patch("/:id", isLoggedIn, isAuthor, async(req, res) => {
    try {
        
        const{content, genre} = req.body
        const{ id } = req.params

        if(!content || !genre)
        {
            throw new Error("Please provide content and genre")
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, {content, genre}, {runValidators : true, returnDocument : "after"})

        res.status(200).json({
            msg : "Blog updated..",
            data : updatedBlog
        })


    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})



module.exports = {
    BlogRouter : router
}