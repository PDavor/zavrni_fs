import express from "express";
import {
  dodajMaterijal,
  getKategorije,
  getKatMod,
  kreirajKategoriju,
  dodajPitanje,
  getMaterijal,
  dodajProvjeru,
  getProvjere,
  getProvjera,
} from "../controllers/kategorijaKontroler.js";
const router = express.Router();

router.get("/", getKategorije);
router.post("/", kreirajKategoriju);
router.get("/mod", getKatMod);
router.patch("/dodaj_materijal", dodajMaterijal);
router.patch("/dodaj_pitanje", dodajPitanje);
router.patch("/dodaj_provjeru", dodajProvjeru);
router.get("/get_provjere", getProvjere);
router.get("/:id", getMaterijal);
router.get("/provjere/:id", getProvjera);

export default router;
