
import { createServer } from 'http'
import next from 'next'
import { Server } from "socket.io"

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()


app.prepare().then(() => {
   const httpServer = createServer((req, res) => {
      handle(req, res)
   })

   const io = new Server(httpServer, {
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

   httpServer.listen(port, "0.0.0.0", () => {

      console.log(
         `> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`)
   })
})
