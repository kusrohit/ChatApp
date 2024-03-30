import { Server } from "socket.io";
import http from "http";
import express from "express";

// express server
const app = express();

// node server
const server = http.createServer(app);

// socket.io server
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId:socket.id}

// listening to socket server
io.on("connection", (socket) => {
  // socket means a user
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != undefined) userSocketMap[userId] = socket.id;

  // io.emit() is used to send event to all the connected clients
  io.emit("getOnlineUser", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events, can be used on both server and client side
  socket.on("disconnected", () => {
    console.log("user disconnect", socket.id);

    delete userSocketMap[userId];

    io.emit("getOnlineUser", Object.keys(userSocketMap));
  });
});

export { app, io, server };
