import type { Request, Response, NextFunction } from "express";

import { validLocationIDs } from "../../types/paginationTypes.js";

import type { LocationOptions } from "../../types/paginationTypes.js";

export function validateLocationID(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { locationID } = req.params;

    if (typeof locationID !== "string") {
        return res.status(400).json({
            message: "Location ID is required",
        });
    }

    if (!/^\d+$/.test(locationID)) {
        return res.status(400).json({
            message: "Location ID must only contain digits",
        });
    }

    const parsedLocationID = Number(locationID);

    if (!Number.isInteger(parsedLocationID)) {
        return res.status(400).json({
            message: "Location ID must be a whole number",
        });
    }

    if (!validLocationIDs.has(parsedLocationID)) {
        return res.status(400).json({
            message: "Invalid Clash Royale location ID",
        });
    }

    const options: LocationOptions = {
        locationID: parsedLocationID,
    };

    res.locals.locationOptions = options;

    next();
}