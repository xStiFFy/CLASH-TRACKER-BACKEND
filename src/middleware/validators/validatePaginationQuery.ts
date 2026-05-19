import type { Request, Response, NextFunction } from "express";

import type { PaginationOptions, PaginationValidatorOptions } from "../../types/paginationTypes.js";

export function validatePaginationQuery(
    validatorOptions: PaginationValidatorOptions = {}
) {
    return function (
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const DEFAULT_LIMIT = validatorOptions.defaultLimit ?? 10;

        const MIN_LIMIT = validatorOptions.minLimit ?? 1;

        const MAX_LIMIT = validatorOptions.maxLimit ?? 1000;

        const { limit, after, before } = req.query;

        const options: PaginationOptions = {
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
                    message:
                        `Limit must be a whole number between ` +
                        `${MIN_LIMIT} and ${MAX_LIMIT}`,
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

        res.locals.paginationOptions = options;

        next();
    };
}