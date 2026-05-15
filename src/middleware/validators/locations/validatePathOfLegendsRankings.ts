import type { Request, Response, NextFunction } from "express";
import type { PathOfLegendsOptions } from "../../../types/locationsTypes.js";

export function validatePathOfLegendsRankings(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // limit declarations
    const DEFAULT_LIMIT = 10;
    const MIN_LIMIT = 1;
    const MAX_LIMIT = 1000;

    // destructure paramaters
    const { seasonID } = req.params;
    const { limit, after, before } = req.query;

    // confirm that seasonID is in fact a string so TypeScript compiler doesn't complain
    if (typeof seasonID !== "string") {
        return res.status(400).json({
            message: "Season ID is required",
        });
    }

    // use regex to confirm that seasonID is a valid ID format (YYYY-MM)
    if (!/^\d{4}-\d{2}$/.test(seasonID)) {
        return res.status(400).json({
            message: "Invalid season ID. Expected format: YYYY-MM",
        });
    }

    const options: PathOfLegendsOptions = {
        seasonID,
        limit: DEFAULT_LIMIT,
    };

    if (limit !== undefined) {
        if (typeof limit !== "string") {
            return res.status(400).json({
                message: "Limit must be a single value",
            });
        }

        const parsedLimit = Number(limit);

        if (
            !Number.isInteger(parsedLimit) ||
            parsedLimit < MIN_LIMIT ||
            parsedLimit > MAX_LIMIT
        ) {
            return res.status(400).json({
                message: "Limit must be a whole number between 1 and 1000",
            });
        }

        options.limit = parsedLimit;
    }

    if (after !== undefined) {
        if (typeof after !== "string") {
            return res.status(400).json({
                message: "After cursor must be a single string",
            });
        }

        options.after = after;
    }

    if (before !== undefined) {
        if (typeof before !== "string") {
            return res.status(400).json({
                message: "Before cursor must be a single string",
            });
        }

        options.before = before;
    }

    res.locals.pathOfLegendsOptions = options;

    next();
}