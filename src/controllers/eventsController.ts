import type { Request, Response } from "express";
import { fetchEventsInfo } from "../services/eventsService.js";

export async function getEvents(req: Request, res: Response) {
    try {
        const events = await fetchEventsInfo();

        res.json(events);
    }
    catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch cards info",
    });
  }
}