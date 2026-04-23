import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import config from "../config";

export function authenticationToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Missing authorization header" });
  }

  // checks the "Bearer" and gets the token
  const [bearer, accessToken] = authHeader.split(" ");

  if (!bearer || bearer !== "Bearer" || !accessToken) {
    // if authentication type is different from bearer, it is rejected.
    return res.status(401).json({
      message: "Wrong authorization type or wrong format",
    });
  }

  try {
    const decodedUser = jwt.verify(accessToken, config.JWT_SECRET as string);
    // @ts-ignore
    req.user = decodedUser;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: invalid or expired token",
    });
  }
}
