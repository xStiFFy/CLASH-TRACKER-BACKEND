import type { Request, Response, NextFunction } from "express";
import type { TagOptions } from "../../types/paginationTypes.js";

type TagType = "clan" | "player" | "tournament";

const validTagRegex = /^#[0289PYLQGRJCUV]+$/;

export function validateTag(
  paramName: string,
  tagType: TagType
) {
  return function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const param = req.params[paramName];

    if (typeof param !== "string") {
      return res.status(400).json({
        message: `${tagType} tag is required`,
      });
    }

    if (!param.startsWith("#")) {
      return res.status(400).json({
        message: `Invalid ${tagType} tag: missing '#' at beginning of tag`,
      });
    }

    if (/[a-z]/.test(param)) {
      return res.status(400).json({
        message: `Invalid ${tagType} tag: lowercase characters are not allowed`,
      });
    }

    if (!validTagRegex.test(param)) {
      return res.status(400).json({
        message: `Invalid ${tagType} tag: format is unacceptable`,
      });
    }

    const options: TagOptions = {
        tag: param,
    };

    res.locals.tagOptions = options;

    next();
    };
}