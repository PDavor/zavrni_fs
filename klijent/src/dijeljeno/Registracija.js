import { React, useState } from "react";
import "./Registracija.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Registracija = () => {
  const [kime, setKime] = useState("");
  let history = useHistory();

  const handleKime = (event) => {
    setKime(event.target.value);
  };

  const [ime, setIme] = useState("");
  const handleIme = (event) => {
    setIme(event.target.value);
  };

  const [prezime, setPrezime] = useState("");
  const handlePrezime = (event) => {
    setPrezime(event.target.value);
  };

  const [lozinka, setLozinka] = useState("");
  const handleLozinka = (event) => {
    setLozinka(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      kime: kime,
      ime: ime,
      prezime: prezime,
      lozinka: lozinka,
    };

    axios
      .post("http://localhost:5000/auth/", data)
      .then((res) => {
        console.log({ data });
        history.push("/prijava");
      })
      .catch((err) => {
        console.log({ data });
        console.log({ message: err.message });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Korisničko ime:</p>
        <input
          type="text"
          name="kime"
          placeholder="Korisničko ime"
          id="kime"
          value={kime}
          onChange={handleKime}
        />
      </label>
      <label>
        <p>Ime:</p>
        <input
          type="text"
          name="ime"
          placeholder="Ime"
          id="ime"
          value={ime}
          onChange={handleIme}
        />
      </label>
      <label>
        <p>Prezime:</p>
        <input
          type="text"
          name="prezime"
          placeholder="Prezime"
          id="prezime"
          value={prezime}
          onChange={handlePrezime}
        />
      </label>
      <label>
        <p>Lozinka:</p>
        <input
          type="text"
          name="lozinka"
          placeholder="Lozinka"
          id="lozinka"
          value={lozinka}
          onChange={handleLozinka}
        />
      </label>
      <button type="submit">Registracija</button>
    </form>
  );
};

export default Registracija;
