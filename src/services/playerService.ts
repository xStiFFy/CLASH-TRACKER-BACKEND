import { clashRoyaleConfig } from "../config/clashRoyaleConfig.js";
import type { TagOptions } from "../types/paginationTypes.js";

export async function fetchPlayerByTag(options: TagOptions) {
  const encodedTag = encodeURIComponent(options.tag);

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

export async function fetchUpcomingChests(options: TagOptions) {
  const encodedTag = encodeURIComponent(options.tag);

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

export async function fetchBattleLog(options: TagOptions) {
  const encodedTag = encodeURIComponent(options.tag);

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