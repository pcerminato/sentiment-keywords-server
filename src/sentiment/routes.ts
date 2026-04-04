import { Router } from "express";
import { findLists, insertOneList } from "./controller";

const router = Router();

router.post("/", insertOneList);
router.get("/", findLists);

export default router;
