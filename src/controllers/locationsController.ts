import type { Request, Response } from "express";
import { fetchSeasonsV2, fetchLocationInfo } from "../services/locationsService.js";

export async function getSeasonsV2(req: Request, res: Response) {
    try {
        const seasonsV2 = await fetchSeasonsV2();

        res.json(seasonsV2);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch cards info",
        });
    }
}

export async function getLocationInfo(req: Request, res: Response) {
    try {
        const locationID = req.params.location;

        if (typeof locationID !== "string") {
            return res.status(400).json({
                message: "Player tag is required",
            });
        }

        const locationInfo = await fetchLocationInfo(locationID);

        res.json(locationInfo);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
        message: "Failed to fetch player data",
        });
    } 
}