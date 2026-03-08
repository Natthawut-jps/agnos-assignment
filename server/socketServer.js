const { Server } = require("socket.io")

const io = new Server(4000, {
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