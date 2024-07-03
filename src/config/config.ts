import { config as conf } from "dotenv";

conf()
const _config = {
   port:process.env.PORT,
   databaseUrl:process.env.MONGO_CONNECTION_STRING,
   env:process.env.Node_ENV,
   jwtSecret:process.env.JWT_SECRET

//  ...  rest of the env variable



};
export  const config=Object.freeze(_config) 