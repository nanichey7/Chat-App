import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage, upload } from "../controllers/message.controller.js";

const router = express.Router();

// Routes
router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

// Apply Multer middleware for file uploads in sendMessage
router.post("/send/:id", protectRoute, upload.single("image"), sendMessage);

export default router;
