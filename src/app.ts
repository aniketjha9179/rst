import createHttpError from "http-errors";
import express from "express";
import globaleErrorHanler from "./middlewares/globalErrorhandler";
import userRouter from "./user/userRouter";

const app = express();
app.use(express.json())
// routes
app.get("/", (req, res, next) => {
  const error=createHttpError(400,"Something went wrong")
  throw error;

  res.json({
    message: "Welcome to restApi",
  });
});
app.use('/api/users',userRouter)


// global error handler
app.use(globaleErrorHanler)


export default app;
