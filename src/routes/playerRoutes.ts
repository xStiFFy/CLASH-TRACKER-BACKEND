import express from "express";
import { getPlayerByTag, getUpcomingChests, getBattleLog } from "../controllers/playerController.js";
import { validateTag } from "../middleware/validators/validateTag.js";


const router = express.Router();

router.get(
    "/:tag", 
    validateTag("tag", "player"), 
    getPlayerByTag
);

router.get(
    "/:tag/upcomingchests", 
    validateTag("tag", "player"), 
    getUpcomingChests
);

router.get(
    "/:tag/battlelog", 
    validateTag("tag", "player"), 
    getBattleLog
);

export default router;