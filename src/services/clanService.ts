import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

export async function fetchClanByTag(clanTag: string) {
    const encodedClanTag = encodeURIComponent(clanTag);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/clans/${encodedClanTag}`,
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

/*
This fetch function will always return 404 because the /warlog enpoint on Clash Royale's API has been disabled.
It was for the old Clan Wars 1, but has since been replaced with the Clan Wars 2 endpoint /riverracelog.
*/
export async function fetchClanWarLog(clanTag: string) {
    const encodedClanTag = encodeURIComponent(clanTag);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/clans/${encodedClanTag}/warlog`,
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

export async function fetchRiverRaceLog(clanTag: string) {
    const encodedClanTag = encodeURIComponent(clanTag);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/clans/${encodedClanTag}/riverracelog`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    )

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}

export async function fetchClanMembers(clanTag: string) {
    const encodedClanTag = encodeURIComponent(clanTag);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/clans/${encodedClanTag}/members`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    )

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}

export async function fetchCurrentRiverRace(clanTag: string) {
    const encodedClanTag = encodeURIComponent(clanTag);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/clans/${encodedClanTag}/currentriverrace`,
        {
            headers: {
                Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
            },
        }
    )

    if (!response.ok) {
        throw new Error(`Clash Royale API error: ${response.status}`);
    }

    return await response.json();
}