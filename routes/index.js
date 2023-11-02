import { Router } from "express";
import driversRoutes from "./driver.js";
import Driver from "../models/Driver.js"

const router = Router();

router.get("/", async (req, res) => res.send('This is the API root'))

router.use("/drivers", driversRoutes);

export default router;