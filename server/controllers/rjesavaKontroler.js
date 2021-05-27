import rjesavaModel from "./rjesavaKontroler";

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
