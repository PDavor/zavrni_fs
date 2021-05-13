import mongoose from "mongoose";

const authSchema = mongoose.Schema({
  kime: { type: String, unique: true, required: true },
  ime: { type: String, required: true },
  prezime: { type: String, required: true },
  lozinka: { type: String, required: true },
  uloga: {
    type: String,
    enum: ["registriran", "moderator", "admin"],
    default: "registriran",
  },
});

const authNova = mongoose.model("korisnik", authSchema);

export default authNova;
