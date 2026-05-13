import type { Request, Response } from "express";
import { fetchClanByTag, fetchClanWarLog, fetchRiverRaceLog, fetchClanMembers, fetchCurrentRiverRace } from "../services/clanService.js";


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

/*
This controller function is for the /warlog endpoint, which has been disabled on Clash Royale's API.
This was for Clan Wars 1, which has since been replaced with the Clan Wars 2  endpoint /riverracelog.
*/
export async function getClanWarLog(req: Request, res: Response) {
    try {
        const clanTag = req.params.clanTag;

        if (typeof clanTag !== "string") {
            return res.status(400).json({
                message: "Clan tag is required",
            });
        }

        const clanWarLog = await fetchClanWarLog(clanTag);

        res.json(clanWarLog);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch clan data"
        })
    }
}

export async function getClanRiverRaceLog(req: Request, res: Response) {
    try {
        const clanTag = req.params.clanTag;

        if (typeof clanTag !== "string") {
            return res.status(400).json({
                message: "Clan tag is required",
            });
        }

        const riverRaceLog = await fetchRiverRaceLog(clanTag);

        res.json(riverRaceLog);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch clan data"
        })
    }
}

export async function getClanMembers(req: Request, res: Response) {
    try {
        const clanTag = req.params.clanTag;

        if (typeof clanTag !== "string") {
            return res.status(400).json({
                message: "Clan tag is required",
            });
        }

        const members = await fetchClanMembers(clanTag);

        res.json(members);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch clan data"
        })
    }
}

export async function getClanCurrentRiverRace(req: Request, res: Response) {
    try {
        const clanTag = req.params.clanTag;

        if (typeof clanTag !== "string") {
            return res.status(400).json({
                message: "Clan tag is required",
            });
        }

        const currentRiverRace = await fetchCurrentRiverRace(clanTag);

        res.json(currentRiverRace);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch clan data"
        })
    }
}