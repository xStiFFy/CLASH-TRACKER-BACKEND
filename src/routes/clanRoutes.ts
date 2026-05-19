import express from "express";
import { 
    getClanByTag, 
    getClanRiverRaceLog, 
    getClanMembers, 
    getClanCurrentRiverRace 
} from "../controllers/clanController.js";
import { validateTag } from "../middleware/validators/validateTag.js";
import { validatePaginationQuery } from "../middleware/validators/validatePaginationQuery.js";


const router = express.Router();

router.get(
    "/:clanTag", 
    validateTag("clanTag", "clan"), 
    getClanByTag
);

// This route is deprecated and will always reult in a 404 error from Clash Royale's API
// router.get("/:clanTag/warlog", validateTag("clanTag", "clan"), getClanWarLog);

router.get(
    "/:clanTag/riverracelog", 
    validateTag("clanTag", "clan"), 
    validatePaginationQuery({ maxLimit: 10 , defaultLimit: 5}), 
    getClanRiverRaceLog
);

router.get(
    "/:clanTag/members", 
    validateTag("clanTag", "clan"), 
    validatePaginationQuery({ maxLimit: 50 , defaultLimit: 50}), 
    getClanMembers
);

router.get("/:clanTag/currentriverrace", 
    validateTag("clanTag", "clan"), 
    getClanCurrentRiverRace
);

export default router;