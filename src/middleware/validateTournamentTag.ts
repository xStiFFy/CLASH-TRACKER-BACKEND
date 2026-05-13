import type { Request, Response, NextFunction } from "express";

export function validateTournamentTag(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const tag = req.params.tag;

  if (typeof tag !== "string") {
    return res.status(400).json({
      message: "Player tag is required",
    });
  }

  next();
}