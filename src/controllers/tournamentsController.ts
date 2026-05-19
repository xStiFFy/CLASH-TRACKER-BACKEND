import type { Request, Response } from "express";
import { fetchTournamentInfo } from "../services/tournamentsService.js";
import type { TagOptions } from "../types/paginationTypes.js";

export async function getTournamentInfo(req: Request, res: Response) {
    try {
        const options = res.locals.tagOptions as TagOptions;

        const tournamentInfo = await fetchTournamentInfo(options);

        res.json(tournamentInfo);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch tournament info"
        })
    }
}