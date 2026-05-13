import type { Request, Response } from "express";
import { fetchPlayerByTag } from "../services/playerService.js";

export async function getPlayerByTag(req: Request, res: Response) {
  try {
    const tag = req.params.tag;

    if (typeof tag !== "string") {
      return res.status(400).json({
        message: "Player tag is required",
      });
    }

    const playerData = await fetchPlayerByTag(tag);

    res.json(playerData);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch player data",
    });
  }
}