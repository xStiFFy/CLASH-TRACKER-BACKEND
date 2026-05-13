import type { Request, Response, NextFunction } from "express";

export function validateClanTag(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const clanTag = req.params.clanTag;

  if (typeof clanTag !== "string") {
    return res.status(400).json({
      message: "Clan tag is required",
    });
  }

  next();
}