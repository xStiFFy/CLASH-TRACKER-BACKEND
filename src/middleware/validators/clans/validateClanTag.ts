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

  if (!clanTag.startsWith("#")) {
    return res.status(400).json({
      message: "Invalid clan tag: missing '#' at beginning of tag",
    });
  }

  if (/[a-z]/.test(clanTag)) {
    return res.status(400).json({
      message: "Invalid clan tag: lowercase characters are not allowed",
    });
  }

  const validClanTagRegex = /^#[0289PYLQGRJCUV]+$/;

  if (!validClanTagRegex.test(clanTag)) {
    return res.status(400).json({
      message: "Invalid clan tag: format is unacceptable",
    });
  }

  next();
}