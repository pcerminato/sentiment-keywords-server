import express from "express";
import config from "./config";
import { errorHandler } from "./middleware/errorHandler";

const PORT = config.PORT || 8080;
const app = express();

app.use(express.json());

app.get("/status", (_, res) => {
  res.status(200).json({ message: "OK", date: new Date().toISOString() });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log(`Status check at http://localhost:${PORT}/status`);
});
