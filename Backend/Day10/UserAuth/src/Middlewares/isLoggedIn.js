const jwt = require("jsonwebtoken")
const { User } = require("../Models/User.schema")


const isLoggedIn = async(req, res, next) => {
    try {

        const{ token } = req.cookies
        const decodedObj = jwt.verify(token, process.env.JWT_SECRET) // {id} 

        const foundUser = await User.findById(decodedObj.id)

        if(!foundUser)
        {
            throw new Error("User does not exists..")
        }

        req.user = foundUser

        next()
       
    } catch (error) {
       res
       .status(401)
       .json({
            err : "Please log in / " +  error.message
       }) 
    }
}


module.exports = { isLoggedIn }