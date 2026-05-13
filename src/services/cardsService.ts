import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

export async function fetchCardsInfo() {
    const response = await fetch(
        `${clashRoyaleConfig.baseUrl}/cards`,
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