import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";
import type { TagOptions, TaggedPaginationOptions } from "../types/paginationTypes.js";

export async function fetchClanByTag(options: TagOptions) {
    const encodedClanTag = encodeURIComponent(options.tag);

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
*/

export async function fetchRiverRaceLog(options: TaggedPaginationOptions) {
    const encodedClanTag = encodeURIComponent(options.tag);

    const params = new URLSearchParams();

    params.set("limit", options.limit.toString());

    if (options.after !== undefined) {
        params.set("after", options.after);
    }

    if (options.before !== undefined) {
        params.set("before", options.before);
    }

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/clans/${encodedClanTag}/riverracelog?${params.toString()}`,
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

export async function fetchClanMembers(options: TaggedPaginationOptions) {
    const encodedClanTag = encodeURIComponent(options.tag);

    const params = new URLSearchParams();

    params.set("limit", options.limit.toString());

    if (options.after !== undefined) {
        params.set("after", options.after);
    }

    if (options.before !== undefined) {
        params.set("before", options.before);
    }

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/clans/${encodedClanTag}/members?${params.toString()}`,
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

export async function fetchCurrentRiverRace(options: TagOptions) {
    const encodedClanTag = encodeURIComponent(options.tag);

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