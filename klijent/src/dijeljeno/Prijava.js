import { React, useState, useContext } from "react";
import { KorisnikContext } from "./KorisnikContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Prijava = () => {
  const [lozinka, setLozinka] = useState("");
  let history = useHistory();

  const handleLozinka = (event) => {
    setLozinka(event.target.value);
  };

  const [kime, setKime] = useState("");
  const handleKime = (event) => {
    setKime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      kime,
      lozinka,
    };
    axios
      .post("http://localhost:5000/auth/find", data)
      .then((res) => {
        //console.log(res.data.kime);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { user, setUser } = useContext(KorisnikContext);
  user !== null && history.push("/");
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
        <p>Lozinka:</p>
        <input
          type="password"
          name="lozinka"
          placeholder="Lozinka"
          id="lozinka"
          value={lozinka}
          onChange={handleLozinka}
        />
      </label>
      <button type="submit">Prijava</button>
    </form>
  );
};

export default Prijava;
