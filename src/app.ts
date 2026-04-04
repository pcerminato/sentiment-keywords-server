import express from "express";
import { authenticationToken, errorHandler } from "./middleware";
import sentimentRouter from "./sentiment/routes";
import loginRouter from "./auth/routes";

const app = express();

app.use(express.json());

app.get("/status", (_, res) => {
  res.status(200).json({ message: "OK", date: new Date().toISOString() });
});

app.use("/login", loginRouter);

app.use("/sentiment-list", authenticationToken, sentimentRouter);

app.use(errorHandler);

export default app;
