import type { Request, Response } from "express";
import { fetchPlayerByTag, fetchUpcomingChests, fetchBattleLog } from "../services/playerService.js";
import type { TagOptions } from "../types/paginationTypes.js";

export async function getPlayerByTag(req: Request, res: Response) {
  try {
    const options = res.locals.tagOptions as TagOptions;

    const playerData = await fetchPlayerByTag(options);

    res.json(playerData);
  } 
  catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch player data",
    });
  }
}

export async function getUpcomingChests(req: Request, res: Response) {
  try {
    const options = res.locals.tagOptions as TagOptions;

    const chestData = await fetchUpcomingChests(options);

    res.json(chestData);
  } 
  catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch upcoming chests",
    });
  }
}

export async function getBattleLog(req: Request, res: Response) {
  try {
    const options = res.locals.tagOptions as TagOptions;

    const battleData = await fetchBattleLog(options);

    res.json(battleData);
  }
  catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch battle log"
    })
  }
}
