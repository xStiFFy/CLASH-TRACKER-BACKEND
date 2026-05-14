import type { Request, Response } from "express";
import { fetchLeaderboardIDs, fetchLeaderboardInfo } from "../services/leaderboardsService.js";

export async function getLeaderboardIDs(req: Request, res: Response) {
    try {
        const leaderboards = await fetchLeaderboardIDs();

        res.json(leaderboards);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch player data",
        });
     }
}

export async function getLeaderboardByID(req: Request, res: Response) {
    try {
        const leaderboardID = req.params.leaderboardID;

        if (typeof leaderboardID !== "string") {
            return res.status(400).json({
                message: "Player tag is required",
            });
        }

        const leaderboardInfo = await fetchLeaderboardInfo(leaderboardID);

        res.json(leaderboardInfo);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch cards info",
        });
    }
}