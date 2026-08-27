const express = require("express")
const { User } = require("../Models/User.Schema")
const { default: mongoose } = require("mongoose")
const router = express.Router()

router.post("/", async(req, res) => {
    try {
        const{ name, age, isPresent} = req.body

        if(!name || !age )
        {
            throw new Error("Please enter name and age..")
        }

        const data = await User.insertOne({name, age, isPresent})

        res.json({
            msg : "Done",
            data
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }
   
})

router.get("/", async(req, res) => {
    try {
        const data = await User.find()

        res.json({
            msg : "done",
            data
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }   
})

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id))
        {
            throw new Error("Invalid id")
        }

        const foundUser = await User.findById(id)

        if(!foundUser)
        {
            throw new Error("User not found")
        }

        res.json({
            msg : "done",
            data : foundUser
        })


    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

router.delete("/:id", async(req, res) => {

    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id))
        {
            throw new Error("Invalid id")
        }

        const deletedUser = await User.findByIdAndDelete(id)

        if(!deletedUser)
        {
            throw new Error("User does not exist")
        }

        res.json({
            msg : "done",
            data : deletedUser
        })

    } catch (error) {
        res.json({
            err : error.message
        })        
    }

})

router.patch("/:id", async(req, res) => {
    try {
        const{ id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id))
        {
            throw new Error("Invalid id")
        }


        const{ name, age, isPresent } = req.body

        const updatedUser = await User.findByIdAndUpdate
        (
            id, 
            {name, age, isPresent}, 
            {returnDocument : "after", runValidators : true}
        ) 

        if(!updatedUser)
        {
            throw new Error("User does not exist...")
        }

        res.json({
            msg : "done",
            data : updatedUser
        })

    } catch (error) {
        res.json({
            err : error.message
        })        
    }
})


module.exports = {
    UserRouter : router
}