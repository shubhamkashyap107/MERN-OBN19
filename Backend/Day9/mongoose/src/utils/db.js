const mongoose = require("mongoose")



async function connectDB(url)
{
    try {

        setTimeout(async() => {
            await mongoose.connect(url)
            console.log("DB COnnected")
        }, 1000)

       
    } catch (error) {
        console.log("DB connection failed ", error.message)
    }
}



module.exports = {
    connectDB
}