import mongoose from "mongoose";
import chalk from "chalk";

let MONGODB_URI = process.env.MONGO_URL || "mongodb://localhost:27017/formula1";


mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/formula1").catch((err) => {
  console.log(`Error connection go MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;