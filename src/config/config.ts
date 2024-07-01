import { config as conf } from "dotenv";

conf()
const _config = {
   port:process.env.PORT,
//  ...  rest of the env variable



};
export  const config=Object.freeze(_config)