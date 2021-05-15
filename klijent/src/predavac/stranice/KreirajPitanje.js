import { React, useState, useContext } from "react";
import { KorisnikContext } from "../../dijeljeno/KorisnikContext";
import axios from "axios";

const KreirajPitanje = () => {
  const { user } = useContext(KorisnikContext);
  const [pitanje, setPitanje] = useState("");
  const handlePitanje = (event) => {
    event.preventDefault();
    setPitanje(event.target.value);
  };

  const [tocanOdgovor, setTocanOdgovor] = useState("");
  const handleTocanOdgovor = (event) => {
    event.preventDefault();
    setTocanOdgovor(event.target.value);
  };

  const [odgovor, setOdgovor] = useState("");
  const handleOdgovor = (event) => {
    event.preventDefault();
    setOdgovor(event.target.value);
  };

  const [odgovori, setOdgovori] = useState([]);
  const dodajOdgovor = (event) => {
    event.preventDefault();
    setOdgovori([...odgovori, odgovor]);
    setOdgovor("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      moderator: user._id,
      pitanje,
      odgovori,
      tocanOdgovor,
    };

    axios
      .patch("http://localhost:5000/kategorije/dodaj_pitanje", data)
      .then((res) => {
        setPitanje("");
        setOdgovor("");
        setOdgovori([]);
        setTocanOdgovor("");
      })
      .catch((err) => {
        //console.log({ data });
        console.log({ message: err.message });
      });
  };
  console.log(user._id);
  return (
    <>
      <h1>Kreiraj pitanje</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Pitanje:</p>
          <input
            type="text"
            name="pitanje"
            placeholder="Pitanje"
            id="pitanje"
            value={pitanje}
            onChange={handlePitanje}
          />
        </label>
        <label>
          <p>Odgovor:</p>
          <input
            type="text"
            name="odgovor"
            placeholder="Odgovor"
            id="odgovor"
            value={odgovor}
            onChange={handleOdgovor}
          />
        </label>
        <button onClick={dodajOdgovor}>Dodaj odgovor</button>
        <h3>Dodani odgovori</h3>
        {odgovori.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <br />
        <label>
          <p>Točan odgovor:</p>
          <input
            type="text"
            name="todgovor"
            placeholder="Točan odgovor"
            id="todgovor"
            value={tocanOdgovor}
            onChange={handleTocanOdgovor}
          />
        </label>
        <button type="submit">Pošalji</button>
      </form>
    </>
  );
};

export default KreirajPitanje;
