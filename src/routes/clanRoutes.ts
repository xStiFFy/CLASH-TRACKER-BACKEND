import express from "express";
import { validateClanTag } from "../middleware/validateClanTag.js";
import { getClanByTag } from "../controllers/clanController.js";


const router = express.Router();

router.get("/:clanTag", validateClanTag, getClanByTag);



export default router;