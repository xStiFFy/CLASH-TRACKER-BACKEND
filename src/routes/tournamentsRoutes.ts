import express from "express";
import { validateTournamentTag } from "../middleware/validators/tournaments/validateTournamentTag.js";
import { getTournamentInfo } from "../controllers/tournamentsController.js";

const router = express.Router();

router.get("/:tournamentTag", validateTournamentTag, getTournamentInfo);

export default router;