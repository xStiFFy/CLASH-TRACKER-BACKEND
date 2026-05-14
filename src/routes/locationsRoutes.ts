import express from "express";
import { getSeasonsV2, getLocationInfo, getLocations } from "../controllers/locationsController.js";

const router = express.Router();

router.get("/global/seasonsV2", getSeasonsV2);

router.get("/:location", getLocationInfo);

router.get("/", getLocations);

export default router;