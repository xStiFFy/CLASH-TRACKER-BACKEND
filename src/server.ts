import "dotenv/config";

import express from "express";
import playerRoutes from "./routes/playerRoutes.js";
import clanRoutes from "./routes/clanRoutes.js"

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/players", playerRoutes);

app.use("/api/clans", clanRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});