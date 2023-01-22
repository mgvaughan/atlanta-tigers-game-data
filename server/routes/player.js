import express from "express";
import { createPlayerStat, getPlayerStats } from "../controllers/playerStats.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getPlayerStats);
router.put("/:id", verifyToken, createPlayerStat);

export default router;