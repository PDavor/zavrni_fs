import express from "express";
import { kreirajRjesava } from "../controllers/rjesavaKontroler.js";
const router = express.Router();

router.post("/kreiraj", kreirajRjesava);

export default router;
