import { Router } from "express";
import { insertOneList } from "./controller";

const router = Router();

router.post("/", insertOneList);

export default router;
