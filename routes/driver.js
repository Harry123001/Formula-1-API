import { Router } from "express";
import * as controllers from "../controllers/drivers.js";


const router = Router();

router.get("/", controllers.getDrivers);
router.get("/driver/id/:driverId", controllers.getDriverById);
router.post("/", controllers.createDriver);
router.put("/:id", controllers.updateDriver);
router.delete("/:driverId", controllers.deleteDriverById);
router.get("/driver/firstname/:firstName", controllers.getDriverByFirstName);

export default router;