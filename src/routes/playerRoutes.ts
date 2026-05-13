import express from "express";
import { getPlayerByTag } from "../controllers/playerController.js";

const router = express.Router();

router.get("/:tag", getPlayerByTag);

export default router;