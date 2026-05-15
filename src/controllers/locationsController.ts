import type { Request, Response } from "express";
import { fetchSeasonsV2, fetchLocationInfo, fetchLocations, fetchLocationClanRanking, fetchLocationPlayerRanking, fetchLocationClanWarsRanking, fetchTopPlayerLeagueSeason, fetchLeagueSeasons } from "../services/locationsService.js";

export async function getSeasonsV2(req: Request, res: Response) {
    try {
        const seasonsV2 = await fetchSeasonsV2();

        res.json(seasonsV2);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch seasons",
        });
    }
}

export async function getLocationInfo(req: Request, res: Response) {
    try {
        const locationID = req.params.location;

        if (typeof locationID !== "string") {
            return res.status(400).json({
                message: "Location info is required",
            });
        }

        const locationInfo = await fetchLocationInfo(locationID);

        res.json(locationInfo);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch location info",
        });
    } 
}

export async function getLocations(req: Request, res: Response) {
    try {
        const listLocations = await fetchLocations();

        res.json(listLocations);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch locations",
        });
    }
}

export async function getLocationClanRankings(req: Request, res: Response) {
    try {
        const locationID = req.params.location;

        if (typeof locationID !== "string") {
            return res.status(400).json({
                message: "Location info is required",
            });
        }

        const locationClanRanking = await fetchLocationClanRanking(locationID);

        res.json(locationClanRanking);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch location clan ranking",
        });
    }
}

export async function getLocationPlayerRankings(req: Request, res: Response) {
    try {
        const locationID = req.params.location;

        if (typeof locationID !== "string") {
            return res.status(400).json({
                message: "Location info is required",
            });
        }

        const locationPlayerRanking = await fetchLocationPlayerRanking(locationID);

        res.json(locationPlayerRanking);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch location player ranking",
        });
    }
}

export async function getLocationClanWarsRankings(req: Request, res: Response) {
    try {
        const locationID = req.params.location;

        if (typeof locationID !== "string") {
            return res.status(400).json({
                message: "Location info is required",
            });
        }

        const locationClanWarsRanking = await fetchLocationClanWarsRanking(locationID);

        res.json(locationClanWarsRanking);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch location clan war ranking",
        });
    }
}

export async function getTopPlayerLeagueSeason(req: Request, res: Response) {
    try {
        const seasonID = req.params.season;

        if (typeof seasonID !== "string") {
            return res.status(400).json({
                message: "Season id is required",
            });
        }

        const topPlayerLeagueSeason = await fetchTopPlayerLeagueSeason(seasonID);

        res.json(topPlayerLeagueSeason);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch top player league season",
        });
    }
}

export async function getLeagueSeasons(req: Request, res: Response) {
    try {
        const leagueSeasons = await fetchLeagueSeasons();

        res.json(leagueSeasons);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch league seasons",
        });
    }
}