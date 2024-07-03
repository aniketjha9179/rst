import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModal from "./userModal";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  // validation

  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are requied");
    return next(error);
  }
  // database call
  const user = await userModal.findOne({ email });
  if (user) {
    const error = createHttpError(400, "User already exists with this email");
    return next(error);
  }
  

  // process

  // response
  res.json({ message: "User creted" });
};

export { createUser };
