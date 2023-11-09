import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";
import routes from "./routes/index.js";
import db from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 3000;

// set up middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

// connect to MongoDB
db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
  });
});

app.use("/api", routes);

// // error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });
