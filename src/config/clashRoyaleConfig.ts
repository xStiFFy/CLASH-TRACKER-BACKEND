const clashRoyaleApiKey = process.env.CLASH_ROYALE_API_KEY;

if (!clashRoyaleApiKey) {
  throw new Error(
    "Missing required environment variable: CLASH_ROYALE_API_KEY"
  );
}

export const clashRoyaleConfig = {
  baseUrl: "https://api.clashroyale.com/v1",
  apiKey: clashRoyaleApiKey,
};