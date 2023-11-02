import db from "../db/connection.js";
import Driver from "../models/Driver.js";
import drivers from "./drivers.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Driver.create(drivers);

  console.log(chalk.magenta("Driver's created!"));

  // Close DB Connection
  await db.close();
};

insertData();