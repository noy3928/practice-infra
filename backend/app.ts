import express from "express";
import mongoose from "mongoose";
import userRoutes from "./router/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://root:example@mongo:27017/mydatabase");

app.use(express.json()); // JSON 요청 본문 파싱
app.use(userRoutes); // 라우트 사용

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
