import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";
import type { PathOfLegendsOptions } from "../types/locationsTypes.js";

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

export async function fetchLocationInfo(locationID: string) {
    const encodedLocationID = encodeURIComponent(locationID);

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

export async function fetchLocationClanRanking(locationID: string) {
    const encodedLocationID = encodeURIComponent(locationID);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/locations/${encodedLocationID}/rankings/clans`,
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

export async function fetchPathOfLegendsRankings(options: PathOfLegendsOptions) {
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
