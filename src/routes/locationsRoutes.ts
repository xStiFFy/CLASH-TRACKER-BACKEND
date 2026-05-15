import express from "express";
import { getSeasonsV2, getLocationInfo, getLocations, getLocationClanRankings, getLocationPlayerRankings, getPathOfLegendsRankings } from "../controllers/locationsController.js";
import { validatePathOfLegendsRankings } from "../middleware/validatePathOfLegendsRankings.js";

const router = express.Router();

router.get("/global/seasonsV2", getSeasonsV2);

router.get("/:location", getLocationInfo);

router.get("/", getLocations);

router.get("/:location/rankings/clans", getLocationClanRankings);

router.get("/:location/rankings/players", getLocationPlayerRankings);

router.get("/global/pathoflegend/:seasonID/rankings/players", validatePathOfLegendsRankings ,getPathOfLegendsRankings);

export default router;