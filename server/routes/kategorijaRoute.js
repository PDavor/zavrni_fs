import express from "express";
import {
  dodajMaterijal,
  getKategorije,
  getKatMod,
  kreirajKategoriju,
  dodajPitanje,
  getMaterijal,
} from "../controllers/kategorijaKontroler.js";
const router = express.Router();

router.get("/", getKategorije);
router.post("/", kreirajKategoriju);
router.get("/mod", getKatMod);
router.patch("/dodaj_materijal", dodajMaterijal);
router.patch("/dodaj_pitanje", dodajPitanje);
router.get("/:id", getMaterijal);

export default router;
