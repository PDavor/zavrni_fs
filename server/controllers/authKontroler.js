import authModel from "../models/authModel.js";

export const getAuth = async (req, res) => {
  try {
    const korisnici = await authModel.findOne({
      kime: req.body.kime,
      lozinka: req.body.lozinka,
    });

    res.status(200).json(korisnici);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const kreirajAuth = async (req, res) => {
  try {
    //nova kategorija ce se nalaziti u body od requesta
    let korisnik = req.body;
    //kreiraj novu kategoriju na temelju modela kategorije
    let noviKorisnik = new authModel(korisnik);
    //kreiranje
    await noviKorisnik.save();
    //vraca uspjesno kreiranje 201 i vraca kategoriju isto
    res.status(201).json(noviKorisnik);
  } catch (error) {
    //409 konflikt
    res.status(409).json({ greška: error.message });
  }
};

export const getKorisnici = async (req, res) => {
  try {
    const korisnici = await authModel.find();
    res.status(200).json(korisnici);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const getKorisnikId = async (req, res) => {
  try {
    const korisnici = await authModel.findOne({
      _id: req.body._id,
    });

    res.status(200).json(korisnici);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};
