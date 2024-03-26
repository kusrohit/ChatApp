// package imports
import express from "express";
import dotenv from "dotenv";

// file imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// const express = require('express');
// const dotenv = require('dotenv');

// configuration
dotenv.config();

// variables
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json()); // to parse incoming requrests with json payloads (from req.body)
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Routes

// root route
app.get("/", (req, res) => {
  res.send("Hello, World! Maurya");
});

// listen on http
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
