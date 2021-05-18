import kategorijaModel from "../models/kategorijaModel.js";

export const getKategorije = async (req, res) => {
  try {
    const kategorije = await kategorijaModel.find();

    res.status(200).json(kategorije);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const kreirajKategoriju = async (req, res) => {
  try {
    //nova kategorija ce se nalaziti u body od requesta
    let kategorija = req.body;
    //kreiraj novu kategoriju na temelju modela kategorije
    let novaKategorija = new kategorijaModel(kategorija);
    //kreiranje
    await novaKategorija.save();
    //vraca uspjesno kreiranje 201 i vraca kategoriju isto
    res.status(201).json(novaKategorija);
  } catch (error) {
    //409 konflikt
    res.status(409).json({ greška: error.message });
  }
};

export const getKatMod = async (req, res) => {
  try {
    const moderator = await kategorijaModel.findOne({
      moderator: req.body._id,
    });

    res.status(200).json(moderator);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const dodajMaterijal = async (req, res) => {
  try {
    const { moderator, naslov, tekst } = req.body;
    const mod = await kategorijaModel.findOneAndUpdate(
      { moderator },
      {
        $push: {
          materijali: [{ naslov, tekst }],
        },
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const dodajPitanje = async (req, res) => {
  try {
    const { moderator, pitanje, odgovori, tocanOdgovor } = req.body;
    const mod = await kategorijaModel.findOneAndUpdate(
      { moderator },
      {
        $push: {
          pitanja: [{ pitanje, odgovori, tocanOdgovor }],
        },
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const getMaterijal = async (req, res) => {
  const { id } = req.params;

  try {
    const materijal = await kategorijaModel.findById(id);

    res.status(200).json(materijal);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const dodajProvjeru = async (req, res) => {
  try {
    const { moderator, naziv, trajanje } = req.body;
    const provjera = await kategorijaModel.findOneAndUpdate(
      { moderator },
      {
        $push: {
          provjere: [{ naziv, trajanje }],
        },
      }
    );
    res.status(200).json(provjera);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

export const getProvjere = async (req, res) => {
  try {
    const provjere = await kategorijaModel.find({}, { naziv: 1, provjere: 1 });

    res.status(200).json(provjere);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};
