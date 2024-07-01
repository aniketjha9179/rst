import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    // rememebers these events first try to connect then try to check error then connect then check error
    
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in conneciting to db", err);
    });

    await mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    console.log("Unable to connect with database", err);
    process.exit(1);
  }
};

export default connectDB;
