import type { Request, Response, NextFunction } from "express";
import type { SeasonOptions } from "../../types/paginationTypes.js";

export function validateSeasonID(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { seasonID } = req.params;

    if (typeof seasonID !== "string") {
        return res.status(400).json({
            message: "Season ID is required",
        });
    }

    if (!/^\d{4}-\d{2}$/.test(seasonID)) {
        return res.status(400).json({
            message: "Invalid season ID. Expected format: YYYY-MM",
        });
    }

    const options: SeasonOptions = {
        seasonID,
    };

    res.locals.seasonOptions = options;

    next();
}