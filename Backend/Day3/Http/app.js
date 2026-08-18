const http = require("http")


const Server = http.createServer((req, res) => {
    console.log(req.url)
    // res.end("Hello world")

    if(req.url == "/users" && req.method == "GET")
    {
        res.end("users api")
    }
    else if(req.url == "/users" && req.method == "DELETE")
    {
        res.end("users api 2")
    }
    else if(req.url == "/products")
    {
        res.end("Products api")
    }
    else if(req.url == "/about")
    {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(`<h1>Hello World</h1>`)
    }
    else
    {
        res.end("404 -> Nout found")
    }

})


Server.listen(8080, () => {
    console.log("Server running")
})

// console.log("Server running on port 8080")
