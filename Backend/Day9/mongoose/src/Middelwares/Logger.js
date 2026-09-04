// const Logger = (a(req)) => {
// const Logger = (a(req), b(res)) => {
// const Logger = (a(req), b(res), c(next)) => {
// const Logger = (a(error),b(req),c(res),d(next)) => {



const Logger = (req, res, next) => {
    // res.json({data : "OK"})


    

    console.log(req.url)


    // req.gabbar = "kitne aadmi the"



    next()

}


module.exports = {
    Logger
}