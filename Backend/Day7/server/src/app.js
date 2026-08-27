const express = require("express")
const { limiter } = require("./middlewares/rateLimit")
const cron = require("node-cron")
const app = express()



cron.schedule("*/5 * * * * *", () => {
    console.log("Notifications sent")
})

// app.use(limiter)

app.get("/testing", limiter ,(req, res) => {

    console.log("Request received")

    let result = 0

    for(let i = 0; i < 1_000_000_000; i++) {
        result += i
    }

    res.json({
        msg: "Done",
        result
    })

})

app.get("/demo", (req, res) => {
    res.json({
        msg : "OK"
    })
})





app.listen(8080, () => {
    console.log("Server running")
})