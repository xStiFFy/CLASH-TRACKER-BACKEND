import express from "express";
import { validateTag } from "../middleware/validators/validateTag.js"
import { getTournamentInfo } from "../controllers/tournamentsController.js";

const router = express.Router();

router.get(
    "/:tournamentTag", 
    validateTag("tournamentTag", "tournament"), 
    getTournamentInfo
);

export default router;