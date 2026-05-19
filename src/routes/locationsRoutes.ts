import express from "express";
import { 
    // getSeasonsV2, 
    getLocationInfo, 
    getLocations, 
    getLocationClanRankings, 
    // getLocationPlayerRankings, 
    // getLocationClanWarsRankings, 
    // getTopPlayerLeagueSeason, 
    getLeagueSeasons, 
    getPathOfLegendsRankings 
} from "../controllers/locationsController.js";
import { validateSeasonID } from "../middleware/validators/validateSeasonID.js";
import { validatePaginationQuery } from "../middleware/validators/validatePaginationQuery.js";
import { validateLocationID } from "../middleware/validators/validateLocation.js";

const router = express.Router();

// NOTE: This CR API endpoint is just useless. /seasons provides all necessart information.
/*
router.get(
    "/global/seasonsV2", 
    getSeasonsV2
);
*/

router.get(
    "/:locationID", 
    validateLocationID,
    getLocationInfo
);

router.get("/", getLocations);

router.get(
    "/:locationID/rankings/clans", 
    validateLocationID,
    validatePaginationQuery({ defaultLimit: 100 }),
    getLocationClanRankings
);

// NOTE: This endpoint is obsolete and has been for years. In order to aquire player rankings these days,
//       the new endpoint that takes seasonID should be used
/*
router.get(
    "/:location/rankings/players", 
    getLocationPlayerRankings
);
*/

router.get(
    "/global/pathoflegend/:seasonID/rankings/players", 
    validateSeasonID, 
    validatePaginationQuery({ defaultLimit: 100 }),
    getPathOfLegendsRankings
);

// NOTE: I am pretty sure that this endpoint provides information about Clan Wars 1. Because of that, this endpoint provides no value to the application.
/*
router.get(
    "/:location/rankings/clanwars", 
    getLocationClanWarsRankings
);
*/

// NOTE: This endpoint literally does nothing so I am removing it.
/*
router.get(
    "/global/seasons/:seasonID", 
    validateSeasonID,
    getTopPlayerLeagueSeason
);
*/

router.get(
    "/global/seasons", 
    getLeagueSeasons
);

export default router;