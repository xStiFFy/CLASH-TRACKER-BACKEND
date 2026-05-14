import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

export async function fetchLeaderboardIDs() {
    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/leaderboards`,
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

export async function fetchLeaderboardInfo(leaderboardID: string) {
    const encodedLeaderboardID = encodeURIComponent(leaderboardID);

    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/leaderboard/${encodedLeaderboardID}`,
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