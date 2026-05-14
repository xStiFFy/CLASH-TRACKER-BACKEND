import express from "express";
import { getGlobalTournaments } from "../controllers/globalTournamentsController.js";

const router = express.Router();

router.get("/", getGlobalTournaments);

export default router;