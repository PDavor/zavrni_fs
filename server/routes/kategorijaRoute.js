import express from "express";
import {
  dodajMaterijal,
  getKategorije,
  getKatMod,
  kreirajKategoriju,
} from "../controllers/kategorijaKontroler.js";
const router = express.Router();

router.get("/", getKategorije);
router.post("/", kreirajKategoriju);
router.get("/mod", getKatMod);
router.patch("/dodaj_materijal", dodajMaterijal);
router.patch("/dodaj_pitanje", dodajPitanje);

export default router;
