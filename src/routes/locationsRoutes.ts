import express from "express";
import { getSeasonsV2, getLocationInfo } from "../controllers/locationsController.js";

const router = express.Router();

router.get("/global/seasonsV2", getSeasonsV2);

router.get("/:location", getLocationInfo);

export default router;