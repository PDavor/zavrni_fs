import { React, useState, useContext } from "react";
import { KorisnikContext } from "../../dijeljeno/KorisnikContext";
import axios from "axios";

const KreirajProvjeru = () => {
  const { user } = useContext(KorisnikContext);
  const [naziv, setNaziv] = useState("");
  const handleNaziv = (event) => {
    setNaziv(event.target.value);
  };

  const [trajanje, setTrajanje] = useState("");
  const handleTrajanje = (event) => {
    setTrajanje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      moderator: user._id,
      naziv,
      trajanje,
    };

    axios
      .patch("http://localhost:5000/kategorije/dodaj_provjeru", data)
      .then((res) => {
        setNaziv("");
        setTrajanje("");
      })
      .catch((err) => {
        console.log({ data });
        console.log({ message: err.message });
      });
  };
  console.log(user._id);
  return (
    <>
      <h1>Kreiraj provjeru</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Naziv provjere:</p>
          <input
            type="text"
            name="naziv"
            placeholder="Naziv provjere"
            id="naziv"
            value={naziv}
            onChange={handleNaziv}
          />
        </label>

        <label>
          <p>Trajanje provjere:</p>
          <textarea
            type="text"
            name="trajanje"
            placeholder="Trajanje provjere"
            id="trajanje"
            value={trajanje}
            onChange={handleTrajanje}
          />
        </label>
        <button type="submit">Dodaj provjeru</button>
      </form>
    </>
  );
};

export default KreirajProvjeru;
