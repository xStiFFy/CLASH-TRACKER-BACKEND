import express from "express";
import { getPlayerByTag, getUpcomingChests, getBattleLog } from "../controllers/playerController.js";
import { validatePlayerTag } from "../middleware/validators/players/validatePlayerTag.js";


const router = express.Router();

router.get("/:tag", validatePlayerTag, getPlayerByTag);

router.get("/:tag/upcomingchests", validatePlayerTag, getUpcomingChests);

router.get("/:tag/battlelog", validatePlayerTag, getBattleLog);

export default router;