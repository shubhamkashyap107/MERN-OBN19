const express = require("express")
const app = express()
const multer = require("multer")


// const upload = multer({
//     dest : "testingfolder/"
// })

const upload = multer()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use(upload.single("profilePicture"))

app.post("/testing", upload.single("profilePicture") ,(req,res) => {

    console.log(req.body)
    console.log(req.file)

    res.json({
        msg : "Done"
    })
})






app.listen(8080, () => {
    console.log("Server running")
})