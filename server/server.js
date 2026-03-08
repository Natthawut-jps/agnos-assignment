
import { createServer } from 'http'
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
   createServer((req, res) => {
      handle(req, res)
   }).listen(port, "0.0.0.0")
   
   console.log(
      `> Server listening at http://localhost:${port} as ${
         dev ? 'development' : process.env.NODE_ENV
      }`
   )
})

import { Server } from "socket.io"

const io = new Server(4000, {
   transports: ["websocket", "polling"],
   cors: { origin: "*" }
})

io.on("connection", (socket) => {

   console.log("client connected")

   socket.on("patient:update", (data) => {

      socket.broadcast.emit("patient:update", data)

   })

   socket.on("patient:get", () => {
      socket.broadcast.emit("patient:get")
   })
   
   socket.on("patient:data", (data) => {
      socket.broadcast.emit("patient:data", data)
   })

})