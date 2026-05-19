import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";
import type { LocationOptions, LocationPaginationOptions, SeasonPaginationOptions } from "../types/paginationTypes.js";

// NOTE: This service corresponds to a controller that will no longer be used. Additionally, this CR API endpoint is just totally useless.
/*
export async function fetchSeasonsV2() {
    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/global/seasonsV2`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}
*/

export async function fetchLocationInfo(options: LocationOptions) {
    const encodedLocationID = encodeURIComponent(options.locationID);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/${encodedLocationID}`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}

export async function fetchLocations() {
    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}

export async function fetchLocationClanRanking(options: LocationPaginationOptions) {
    const encodedLocationID = encodeURIComponent(options.locationID);

    const params = new URLSearchParams();

    params.set("limit", String(options.limit));
    
    if (options.after) {
        params.set("after", options.after);
    }

    if (options.before) {
        params.set("before", options.before);
    }

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/${encodedLocationID}/rankings/clans?${params}`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}

// NOTE: This service contacts an endpoint that is deactivated and will no longer function.
/*
export async function fetchLocationPlayerRanking(locationID: string) {
    const encodedLocationID = encodeURIComponent(locationID);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/${encodedLocationID}/rankings/players`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}
*/

export async function fetchPathOfLegendsRankings(options: SeasonPaginationOptions) {
    const encodedSeasonID = encodeURIComponent(options.seasonID);

    const params = new URLSearchParams();

    params.set("limit", String(options.limit));
    
    if (options.after) {
        params.set("after", options.after);
    }

    if (options.before) {
        params.set("before", options.before);
    }

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/global/pathoflegend/${encodedSeasonID}/rankings/players?${params}`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}

// NOTE: This service corresponds to a controller that will no longer be called. Regardless, the code will remain here for the time being.
/*
export async function fetchLocationClanWarsRanking(locationID: string) {
    const encodedLocationID = encodeURIComponent(locationID);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/${encodedLocationID}/rankings/clanwars`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}
*/

// NOTE: This service contacted a totally useless endpoint so it is now removed.
/*
export async function fetchTopPlayerLeagueSeason(seasonID: string) {
    const encodedSeasonID = encodeURIComponent(seasonID);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/global/seasons/${encodedSeasonID}`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}
*/

export async function fetchLeagueSeasons() {
    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/global/seasons`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}
