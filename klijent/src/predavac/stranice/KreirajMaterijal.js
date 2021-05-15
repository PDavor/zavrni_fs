import { React, useState, useContext } from "react";
import { KorisnikContext } from "../../dijeljeno/KorisnikContext";
import axios from "axios";

const KreirajMaterijal = () => {
  const { user } = useContext(KorisnikContext);
  const [naslov, setNaslov] = useState("");
  const handleNaslov = (event) => {
    setNaslov(event.target.value);
  };

  const [tekst, setTekst] = useState("");
  const handleTekst = (event) => {
    setTekst(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      moderator: user._id,
      naslov,
      tekst,
    };

    axios
      .patch("http://localhost:5000/kategorije/dodaj_materijal", data)
      .then((res) => {
        setTekst("");
        setNaslov("");
      })
      .catch((err) => {
        console.log({ data });
        console.log({ message: err.message });
      });
  };
  console.log(user._id);
  return (
    <>
      <h1>Kreiraj materijal</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Naslov:</p>
          <input
            type="text"
            name="naslov"
            placeholder="Naslov"
            id="naslov"
            value={naslov}
            onChange={handleNaslov}
          />
        </label>

        <label>
          <p>Tekst:</p>
          <textarea
            type="text"
            name="tekst"
            placeholder="Tekst"
            id="tekst"
            value={tekst}
            onChange={handleTekst}
          />
        </label>
        <button type="submit">Dodaj materijal</button>
      </form>
    </>
  );
};

export default KreirajMaterijal;
