import express from "express";
import { signup } from "../controllers/userController.js";
const router = express.Router();
// 회원가입 라우트
router.post("/signup", signup);
export default router;
