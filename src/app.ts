import createHttpError from "http-errors";
import express from "express";
import globaleErrorHanler from "./middlewares/globalErrorhandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import cors from 'cors'
import { config } from "./config/config";


const app = express();
app.use(express.json())
app.use(cors({
  origin:config.domainFrontend
}))
// routes
app.get("/", (req, res, next) => {
  const error=createHttpError(400,"Something went wrong")
  throw error;

  res.json({
    message: "Welcome to restApi",
  });
});
app.use('/api/users',userRouter)
app.use('/api/books',bookRouter)


// global error handler
app.use(globaleErrorHanler)


export default app;
