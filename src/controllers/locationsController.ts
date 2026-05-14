import type { Request, Response } from "express";
import { fetchSeasonsV2, fetchLocationInfo, fetchLocations } from "../services/locationsService.js";

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