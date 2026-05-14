import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

export async function fetchGlobalTournaments() {
    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/globaltournaments`,
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