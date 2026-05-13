import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";

export async function fetchPlayerByTag(tag: string) {
  const encodedTag = encodeURIComponent(tag);

  const response = await fetch(
    `${clashRoyaleConfig.baseUrl}/players/${encodedTag}`,
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