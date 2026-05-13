import type { Request, Response } from "express";
import { fetchClanByTag } from "../services/clanService.js";


export async function getClanByTag(req: Request, res: Response) {
    try {
        const clanTag = req.params.clanTag;

        if (typeof clanTag !== "string") {
            return res.status(400).json({
                message: "Clan tag is required",
            });
        }

        const clanData = await fetchClanByTag(clanTag);

        res.json(clanData);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch clan data"
        })
    }
}