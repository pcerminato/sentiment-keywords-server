import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import sentimentRouter from "./sentiment/routes";

const app = express();

app.use(express.json());

app.get("/status", (_, res) => {
  res.status(200).json({ message: "OK", date: new Date().toISOString() });
});

app.use("/sentiment-list", sentimentRouter);

app.use(errorHandler);

export default app;
