import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

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