import { NextFunction, Request, Response } from "express";
import { insertOne } from "../db/crud";

export const insertOneList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sentiment = req.body;

    if (!sentiment) {
      return res.status(500).json({ message: "Request body is not defined" });
    }

    const result = await insertOne(sentiment);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Could not insert the record" });
    next(error);
  }
};
