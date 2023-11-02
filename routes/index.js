import { Router } from "express";
import driversRoutes from "./driver.js";
import Driver from "../models/Driver.js"

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) {
    next(err);
  }
});

router.use("/drivers", driversRoutes);

export default router;