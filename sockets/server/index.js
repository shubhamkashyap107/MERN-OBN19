const express = require("express")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")

const app = express()














const server = http.createServer(app) // your http server should have access to your app
const io = new Server(server, {
  cors : {
    origin : ["http://localhost:5173", "http://192.168.110.94:5173/ "]
  }
})

io.on("connection", (socket) => {
  // console.log("Socket connected")

  socket.on("send-msg", (data) => {
    console.log("Event chala", data.msg)


    socket.broadcast.emit("rec-msg", data)

  })


  socket.on("disconnect", () => {
    console.log("GAYA")
  })



})

// addEventListener("click", () => {})





















app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running')
})

server.listen(8080, () => {
  console.log(`Server listening on http://localhost:${8080}`)
})
