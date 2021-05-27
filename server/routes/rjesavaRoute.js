import express from "express";
import { kreirajRjesava } from "../controllers/rjesavaKontroler";

const router = express.Router();

router.post("/kreiraj_rjesava", kreirajRjesava);

export default router;
