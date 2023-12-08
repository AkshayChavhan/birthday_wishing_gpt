import express from "express";
import { RegisterUserController, generateLyricsController } from "../controller/userController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", RegisterUserController);
router.post("/generate-lyrics", verifyToken, generateLyricsController);

export { router };
