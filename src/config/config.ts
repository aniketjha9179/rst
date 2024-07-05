import { config as conf } from "dotenv";
import cloudinary from "./cloudinary";

conf()
const _config = {
   port:process.env.PORT,
   databaseUrl:process.env.MONGO_CONNECTION_STRING,
   env:process.env.Node_ENV,
   jwtSecret:process.env.JWT_SECRET,
   cloudinaryCloud:process.env.CLOUDINARY_CLOUD,
   cloudinaryApiKey:process.env.CLOUDINARY_API_KEY,
   cloudinaryApiSecret:process.env.CLOUDINARY_API_SECRET

//  ...  rest of the env variable



};
export  const config=Object.freeze(_config) 