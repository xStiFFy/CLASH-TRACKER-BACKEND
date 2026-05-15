import express from "express";
import { getSeasonsV2, getLocationInfo, getLocations, getLocationClanRankings, getLocationPlayerRankings } from "../controllers/locationsController.js";

const router = express.Router();

router.get("/global/seasonsV2", getSeasonsV2);

router.get("/:location", getLocationInfo);

router.get("/", getLocations);

router.get("/:location/rankings/clans", getLocationClanRankings);

router.get("/:location/rankings/players", getLocationPlayerRankings);

export default router;