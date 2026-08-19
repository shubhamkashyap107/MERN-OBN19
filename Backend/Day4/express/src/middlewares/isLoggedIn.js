function isLoggedIn(req, res, next)
{
    const isLoggedIn = true
    if(isLoggedIn == true)
    {
        next()
    }
    else{
        res.json({
            error : "Please log in"
        })
    }
}


module.exports = {
    isLoggedIn
}