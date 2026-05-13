import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

export async function fetchTournamentInfo(tournamentTag: string) {
    const encodedTag = encodeURIComponent(tournamentTag);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/tournaments/${encodedTag}`,
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