import type { Request, Response } from "express";
import { fetchGlobalTournaments } from "../services/globalTournamentsService.js";

export async function getGlobalTournaments(req: Request, res: Response) {
    try {
        const globalTournaments = await fetchGlobalTournaments();

        res.json(globalTournaments);
    }
    catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch cards info",
    });
  }
}