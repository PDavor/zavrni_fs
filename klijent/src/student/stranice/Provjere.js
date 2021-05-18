import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Provjere.css";
const Provjere = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get(`http://localhost:5000/kategorije/get_provjere`)
      .then((res) => {
        setData(res.data);
        console.log("provjere", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>Provjere iz kategorije: {item.naziv}</h1>
          <p>
            {item.provjere.length < 1 ? (
              <p>Nema dostupnih provjera</p>
            ) : (
              item.provjere.map((provjera) => (
                <ul className="kartica-provjere">
                  <li className="provjera-item">
                    <h2>Naziv provjere: {provjera.naziv}</h2>
                  </li>
                  <li className="provjera-item">
                    <h2>Trajanje: {provjera.trajanje}</h2>
                  </li>
                </ul>
              ))
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Provjere;
