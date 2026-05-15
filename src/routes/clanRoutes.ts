import express from "express";
import { validateClanTag } from "../middleware/validators/clans/validateClanTag.js";
import { getClanByTag, getClanWarLog, getClanRiverRaceLog, getClanMembers, getClanCurrentRiverRace } from "../controllers/clanController.js";


const router = express.Router();

router.get("/:clanTag", validateClanTag, getClanByTag);

// This route is deprecated and will always reult in a 404 error from Clash Royale's API
router.get("/:clanTag/warlog", validateClanTag, getClanWarLog);

router.get("/:clanTag/riverracelog", validateClanTag, getClanRiverRaceLog);

router.get("/:clanTag/members", validateClanTag, getClanMembers);

router.get("/:clanTag/currentriverrace", validateClanTag, getClanCurrentRiverRace);

//I will add the last route later, even though it's deprecated.

export default router;