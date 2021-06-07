import mongoose from "mongoose";

const rjesavaSchema = mongoose.Schema({
  korisnik_id: { type: String, required: true },
  provjera_id: { type: String, required: true },
  rjesenja: { type: Array, required: true },
  ocjenjeno: { type: Boolean, required: true, default: false },
  bodovi: { type: String },
  ocjena: { type: String },
});

const rjesavaNova = mongoose.model("rjesava", rjesavaSchema);

export default rjesavaNova;
