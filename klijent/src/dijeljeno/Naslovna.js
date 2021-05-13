import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Naslovna.css";
const Naslovna = () => {
  const [kategorije, setKategorije] = useState([
    { naziv: "asd", id: 1 },
    { naziv: "sadasd", id: 2 },
    { naziv: "asdasdasdsa", id: 3 },
  ]);
  return (
    <ul id="predmeti">
      {kategorije.map((kategorija) => (
        <Link to="">
          <li className="predmet">{kategorija.naziv}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Naslovna;
