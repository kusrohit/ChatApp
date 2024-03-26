import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

//Routing

// signup route
router.post("/signup", signup);

// signin route
router.post("/login", login);

// signout route
router.post("/logout", logout);

export default router;
