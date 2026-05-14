import express from "express";
import { getLeaderboardIDs, getLeaderboardByID } from "../controllers/leaderboardsController.js";


const router = express.Router();

router.get("/", getLeaderboardIDs);

router.get("/:leaderboardID", getLeaderboardByID);

export default router;