import { React, useState, useEffect } from "react";
import axios from "axios";

const DodajKategoriju = () => {
  const [moderator, setModerator] = useState("");
  const handleModerator = (event) => {
    setModerator(event.target.value);
  };

  const [kategorija, setKategorija] = useState("");
  const handleKategorija = (event) => {
    setKategorija(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      moderator: moderator,
      naziv: kategorija,
    };

    axios
      .post("http://localhost:5000/kategorije/", data)
      .then((res) => {
        setModerator("");
        setKategorija("");
        console.log({ data });
      })
      .catch((err) => {
        console.log({ data });
        console.log({ message: err.message });
      });
  };

  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("http://localhost:5000/auth/")
      .then((res) => {
        console.log("korisnici", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Moderator:</p>
        <select
          name="moderator"
          id="moderator"
          value={moderator}
          onChange={handleModerator}
        >
          {data.map((item) => (
            <option value={item._id}>{item.kime}</option>
          ))}
        </select>
      </label>

      <label>
        <p>Naziv kategorije:</p>
        <input
          type="text"
          name="kategorija"
          placeholder="Naziv kategorije"
          id="kategorija"
          value={kategorija}
          onChange={handleKategorija}
        />
      </label>
      <button type="submit">Dodaj kategoriju</button>
    </form>
  );
};

export default DodajKategoriju;
