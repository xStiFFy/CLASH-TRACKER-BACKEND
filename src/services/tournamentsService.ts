import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";
import type { TagOptions } from "../types/paginationTypes.js";

export async function fetchTournamentInfo(options: TagOptions) {
    const encodedTag = encodeURIComponent(options.tag);

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