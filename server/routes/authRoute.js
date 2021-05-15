import express from "express";
import {
  getAuth,
  kreirajAuth,
  getKorisnici,
  getKorisnikId,
  dodajModeratora,
} from "../controllers/authKontroler.js";
const router = express.Router();

router.post("/find", getAuth);
router.post("/", kreirajAuth);
router.get("/", getKorisnici);
router.get("/id", getKorisnikId);
router.patch("/dodaj_moderatora", dodajModeratora);
export default router;
