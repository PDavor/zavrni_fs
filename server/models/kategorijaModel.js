import mongoose from "mongoose";
const materijalSchema = mongoose.Schema({
  naslov: { type: String, unique: true },
  tekst: { type: String },
});

const pitanjaSchema = mongoose.Schema({
  pitanje: { type: String },
  odgovori: { type: Array },
  tocanOdgovor: { type: String },
});

const provjereSchema = mongoose.Schema({
  naziv: String,
  pocetak: Date,
  trajanje: Number,
  ispit: Boolean,
});

const kategorijaSchema = mongoose.Schema({
  moderator: { type: String, required: true, unique: true },
  naziv: { type: String, unique: true, required: true },
  opis: { type: String },
  materijali: [materijalSchema],
  pitanja: [pitanjaSchema],
  provjere: [provjereSchema],
});

const kategorijeNova = mongoose.model("kategorijeNova", kategorijaSchema);

export default kategorijeNova;
