import { io } from "socket.io-client"

export const socket = io("https://agnos-assignment-production.up.railway.app",{
   transports: ["websocket", "polling"]
})