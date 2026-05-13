import type { Request, Response } from "express";
import { fetchTournamentInfo } from "../services/tournamentsService.js";

export async function getTournamentInfo(req: Request, res: Response) {
    try {
        const tournamentTag = req.params.tournamentTag;

        if (typeof tournamentTag !== "string") {
            return res.status(400).json({
                message: "Player tag is required",
            });
        }

        const tournamentInfo = await fetchTournamentInfo(tournamentTag);

        res.json(tournamentInfo);
    }
    catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch battle log"
    })
  }
}