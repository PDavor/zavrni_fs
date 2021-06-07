import rjesavaModel from "../models/rjesavaModel.js";

export const kreirajRjesava = async (req, res) => {
  try {
    //nova kategorija ce se nalaziti u body od requesta
    let rjesava = req.body;
    //kreiraj novu kategoriju na temelju modela kategorije
    let novoRjesava = new rjesavaModel(rjesava);
    //kreiranje
    await novoRjesava.save();
    //vraca uspjesno kreiranje 201 i vraca kategoriju isto
    res.status(201).json(novoRjesava);
  } catch (error) {
    //409 konflikt
    res.status(409).json({ greška: error.message });
  }
};

export const getProvjere = async (req, res) => {
  try {
    const kategorije = await kategorijaModel.find();

    res.status(200).json(kategorije);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};
