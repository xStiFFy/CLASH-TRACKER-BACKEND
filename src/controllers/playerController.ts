import type { Request, Response } from "express";
import { fetchPlayerByTag, fetchUpcomingChests, fetchBattleLog } from "../services/playerService.js";

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

export async function getUpcomingChests(req: Request, res: Response) {
  try {
    const tag = req.params.tag;

    if (typeof tag !== "string") {
      return res.status(400).json({
        message: "Player tag is required",
      });
    }

    const chestData = await fetchUpcomingChests(tag);

    res.json(chestData);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch upcoming chests",
    });
  }
}

export async function getBattleLog(req: Request, res: Response) {
  try {
    const tag = req.params.tag;

    if (typeof tag !== "string") {
      return res.status(400).json({
        message: "Player tag is required",
      });
    }

    const battleData = await fetchBattleLog(tag);

    res.json(battleData);
  }
  catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch battle log"
    })
  }
}
