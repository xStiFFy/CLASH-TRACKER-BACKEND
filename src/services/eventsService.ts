import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

export async function fetchEventsInfo() {
    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/events`,
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