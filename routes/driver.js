import { Router } from "express";
import * as controllers from "../controllers/drivers.js";


const router = Router();

router.get("/", controllers.getDrivers);
router.get("/id/:driverId", controllers.getDriverById);
router.post("/", controllers.createDriver);
router.put("/:id", controllers.updateDriver);
router.delete("/:driverId", controllers.deleteDriverById);
router.get("/name/:name", controllers.getDriverbyName);

export default router;