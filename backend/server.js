// package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// file imports
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

// const express = require('express');
// const dotenv = require('dotenv');

// configuration
dotenv.config();

// variables
const PORT = process.env.PORT;

// middleware
app.use(express.json()); // to parse incoming requrests with json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Routes

// root route
// app.get("/", (req, res) => {
//   res.send("Hello, World! Maurya");
// });

// listen on http
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
