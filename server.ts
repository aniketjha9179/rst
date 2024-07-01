import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";



const startServer=async()=>{
    // connect database
    await connectDB()
const port=config.port ||4000

    app.listen(port,()=>{
        console.log(`listening on ${port}`);
        
    })
}

startServer()



export default app
