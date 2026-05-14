import "dotenv/config";

import express from "express";
import playerRoutes from "./routes/playerRoutes.js";
import clanRoutes from "./routes/clanRoutes.js"
import cardsRoutes from "./routes/cardsRoutes.js"
import tournamentsRoutes from "./routes/tournamentsRoutes.js"
import eventsRoutes from "./routes/eventsRoutes.js"
import globalTournamentRoutes from "./routes/globalTournamentsRoutes.js"

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/players", playerRoutes);

app.use("/api/clans", clanRoutes);

app.use("/api/cards", cardsRoutes);

app.use("/api/events", eventsRoutes);

app.use("/api/globaltournaments", globalTournamentRoutes);

// I'm pretty sure private tournaments aren't a thing anymore in Clash Royale, so this entire router might be deprecated.
// However, I have included it anyways just in case I am wrong, or Clash Royale adds tournaments back in the future.
app.use("/api/tournaments", tournamentsRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});