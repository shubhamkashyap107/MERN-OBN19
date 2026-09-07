const express = require("express")
const { User } = require("../Models/User.schema")
const router = express.Router()
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")


router.post("/signup", async(req, res) => {
    try {
        const{firstName, lastName, username, email, password, gender} = req.body

        if(!firstName || !lastName || !username || !email || !password || !gender)
        {
            throw new Error("Please enter all the fields..")
        }

        if(!validator.isStrongPassword(password))
        {
            throw new Error("Please enter a strong password..")
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const CreatedUser = await User.create({firstName, lastName, username, email, password : hashedPassword, gender})


        res.status(201).json({
            msg : "User created Successfully",
            data : CreatedUser
        })
        

    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})


router.post("/login", async(req, res) => {
    try {
        const{ username, email , password} = req.body

        if(!username && !email)
        {
            throw new Error("Username or email is required")
        }

        // console.log(username.length)
        const foundUser = await User.findOne({ // User.findOne({username}) / User.findOne({email})
            $or : [
                {username},
                {email}
            ]
        })


        if(!foundUser)
        {
            throw new Error("User does not exists..")
        }

        const isPasswordCorrect = await bcrypt.compare(password, foundUser.password)

        if(!isPasswordCorrect)
        {
            throw new Error("Invalid Credentials")
        }



        const token = jwt.sign({id : foundUser._id}, process.env.JWT_SECRET, {expiresIn : "1d"}) // {id : aesrdtygfewqfghfd}

        // res.status()
        // res.cookie("example", "hehe")

        res
        .status(200)
        .cookie("token", token, {
            maxAge : 24 * 60 * 60 * 1000
        })
        .json({
            msg : "User logged in",
            data : foundUser
        })
        




    } catch (error) {
        res.status(404).json({
            err : error.message
        })
    }
})

router.post("/logout", (req, res) => {
    res
    // .cookie("token", null)
    .clearCookie("token")
    .json({
        msg : "User logged out"
    })
})


module.exports = {
    UserRouter : router
}