const express = require("express")
const mongoose = require("mongoose")
const { User } = require("./models/User.model")
const app = express()

app.use(express.json())


mongoose.connect("api")
.then(() => {

   
    console.log("DB COnnected")

    app.listen(8080, () => {
        console.log("Server running")
    })
})



app.patch("/send-money", async(req, res) => {
    const session = await mongoose.startSession()
    try {

        session.startTransaction()

        const{senderId, recId, amount, pin} = req.body





        const sender = await User.findById(senderId)
        if(pin != sender.pin)
        {
            throw new Error("Invalid Pin")
        }
        sender.balance -= amount
        await sender.save({session})




        // throw new Error("Anvi")

        const rec = await User.findById(recId)
        rec.balance += amount
        await rec.save({session})


        await session.commitTransaction()

        res.status(200).json({
            msg : "Payment Successful"
        })

    } catch (error) {
        await session.abortTransaction()

        res.status(400).json({
            err : "Payment Declined",
            info : error.message
        })
    }
    finally{
        session.endSession()
    }
})


// function seedDB()
// {
//     [{}, {}, {}]

//     User.insertMany([])
// }