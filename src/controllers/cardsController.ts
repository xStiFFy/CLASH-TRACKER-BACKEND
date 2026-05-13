import type { Request, Response } from "express";
import { fetchCardsInfo } from "../services/cardsService.js";

export async function getCards(req: Request, res: Response) {
  try {
    const cards = await fetchCardsInfo();

    res.json(cards);
  } 
  catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch cards info",
    });
  }
}