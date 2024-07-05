import express from "express";
import { createBook } from "./bookController";
import multer from "multer";
import path from "node:path";
import authenticate from "../middlewares/authenticate";

// file store local->cloudinary pe upload ->localfile delete
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 10 * 1024 * 1024 }, //10mb
});

const bookRouter = express.Router();
// routes
// api/books/
// middleware :we used this between route and router
// route,middleware,handler
bookRouter.post(
  "/",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

export default bookRouter;
