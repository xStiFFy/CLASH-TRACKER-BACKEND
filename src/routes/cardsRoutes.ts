import express from "express";
import { getCards } from "../controllers/cardsController.js";

const router = express.Router();

router.get("/", getCards);

export default router