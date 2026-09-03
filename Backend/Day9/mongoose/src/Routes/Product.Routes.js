const express = require("express")
const router = express.Router()
const{ Product } = require("../Model/Product.schema")
const { default: mongoose } = require("mongoose")



router.post("/", async(req, res) => {
    try {
        const{ name, price } = req.body


        // if(!name || name.length < 10)

        const val =  await Product.create({name, price}) // validation ran

        // const val = new Product({ // validation ran
        //     name, price
        // })
        // await val.save()

        // const val = await Product.insertMany([{name, price},{name, price},{name, price},])
        // const val = await Product.insertOne({name, price}) // validation ran


        res.json({
            data : val
        })

    } catch (error) {
        res.json({
            err : error.message
        })
    }
})




router.get("/", async(req, res) => {
    try {
        const{limit, skip, id} = req.query
        // console.log(q)
        // const data = await Product.find({price : q})
        // const data = await Product.find({name : q})


        // const data = await Product.find().limit(limit).skip(skip).select("price name") //[{k-v}]
        // const data = await Product.find({_id : id})

        // if(!mongoose.Types.ObjectId.isValid(id))
        // {
        //     throw new Error("ID galat hai")
        // }


        // const data = await Product.findById(id)


        const data = await Product.find().sort({price : -1})
        // const data = await Product.findOne({price : 1000})

        res.json({
            total : data.length,
            data,
        })
    } catch (error) {
         res.json({
            err : error.message
        })       
    }
})



router.delete("/", async(req, res) => {
    try {
        // const deletedVal = await Product.deleteOne({price  : 1000})
        // const deletedVal = await Product.deleteMany({price  : 1000})
        // const deletedVal = await Product.findOneAndDelete({price : 1000})
        // const deletedVal = await Product.findByIdAndDelete("6a9952e47021e5aac8d3b9fe")



        res.json({
            data : deletedVal
        })
    } catch (error) {
         res.json({
            data : error.message
        })
    }
})



router.patch("/:id", async(req, res) => {
    try {
        
    // User.updateOne()
    // User.updateMany()
    // User.findByIdAndUpdate()
    // User.findOneAndUpdate()


        // const val = await Product.updateMany({price : 1000}, {name : "Demo21"}, {runValidators : true})
        // const val = await Product.updateOne({price : 20}, {price : 300}, {runValidators : true})

        const{ id } = req.params

        // const foundProduct = await Product.findById(id)
        // foundProduct.name = "Shubham"
        // await foundProduct.save()

        // const val = await Product.findByIdAndUpdate(id, {name : "Palak Paneer"}, {runValidators : true, returnDocument : 
        //     "after"
        // })


        // const val = await Product.findOneAndUpdate({name : "avenger ki cd 1234"}, {name : "Doomsday2222"}, {
        //     returnDocument : "after",
        //     runValidators : true
        // })


        res.json({
            data : val
        })


    } catch (error) {
        res.json({
            err : error.message
        })
    }
})



module.exports = {
    ProductRouter : router
}