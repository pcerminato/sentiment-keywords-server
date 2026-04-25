import { Router } from "express";
import { callAI } from "./controller";

const router = Router();

router.post("/", callAI);

export default router;
