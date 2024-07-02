import createHttpError from "http-errors";
import express from "express";
import globaleErrorHanler from "./middlewares/globalErrorhandler";

const app = express();
// routes
app.get("/", (req, res, next) => {
  const error=createHttpError(400,"Something went wrong")
  throw error;

  res.json({
    message: "Welcome to restApi",
  });
});
// global error handler
app.use(globaleErrorHanler)


export default app;
