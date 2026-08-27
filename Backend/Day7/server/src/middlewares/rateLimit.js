const{ rateLimit } = require("express-rate-limit")



const limiter = rateLimit({
    limit : 3,
    windowMs : 1 * 10 * 1000,
    message: {
        status: 429,
        error: "Too Many Requests",
        message: "Bhai rukja, saans lene de"
  }
})


module.exports = {
    limiter
}