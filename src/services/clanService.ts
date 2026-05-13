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