import express from "express"
import "dotenv/config"
import cors from "cors"
import http from "http"
import { connectDB } from "./lib/db.js"
import messageRouter from "./routes/message.routes.js"
import { Server } from "socket.io"
import userRouter from "./routes/user.routes.js"

// Create Express app and HTTP server

const app=express()
const server=http.createServer(app)

// Initialize socket.io server
export const io=new Server(server,{
    cors:{origin:"*"}
})

// store online users
export const userSocketMap={}; //{userId:socket}


// Socket.io connection handler
io.on("connection",(socket)=>{
    const userId=socket.handshake.query.userId;
    console.log("User connected",userId)
    if(userId) userSocketMap[userId]=socket.id;

    // Emit online users to all connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnected",()=>{
        console.log("User disconneted",userId);
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

// middleware setup
app.use(express.json({limit:"4mb"}))
app.use(cors())

// Route setup
app.use("/api/status",(req,res)=>res.send("server is live"))
app.use("/api/auth",userRouter)
app.use("/api/messages",messageRouter);

// Global error Handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Logs full error stack for debugging
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});


// MongoDB connect
await connectDB();

const PORT=process.env.PORT||5000;

server.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`))