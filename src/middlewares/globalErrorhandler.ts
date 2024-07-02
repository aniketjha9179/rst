import { HttpError } from "http-errors";
import app from "../app";
import { config } from "../config/config";
import express, { Response, Request, NextFunction } from "express";

// global error handler(middlewere) routes ke last me hona chahiye

const globaleErrorHanler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === "development" ? err.stack : "",
  });
};
export default globaleErrorHanler
