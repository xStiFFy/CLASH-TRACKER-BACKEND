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

export async function fetchUpcomingChests(tag: string) {
  const encodedTag = encodeURIComponent(tag);

  const response = await fetch(
    `${clashRoyaleConfig.baseUrl}/players/${encodedTag}/upcomingchests`,
    {
      headers: {
        Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Clash Royale API error: ${response.status}`
    );
  }

  return await response.json();
}

export async function fetchBattleLog(tag: string) {
  const encodedTag = encodeURIComponent(tag);

  const response = await fetch(
    `${clashRoyaleConfig.baseUrl}/players/${encodedTag}/battlelog`,
    {
      headers: {
        Authorization: `Bearer ${clashRoyaleConfig.apiKey}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Clash Royale API error ${response.status}`
    );
  }

  return await response.json();
}