import React from "react";
import "./Profil.css";

const Profil = () => {
  return (
    <>
      <h1>Davor Pernjek</h1>
      <div className="row">
        <div className="column">
          <h3>Rezultati provjera</h3>
          <ul>
            <li>Naziv provjere: 17 bodova</li>
            <li>Naziv provjere 2: 87 bodova</li>
            <li>Naziv provjere 3: 54 bodova</li>
            <li>Naziv provjere 4: 12 bodova</li>
          </ul>
        </div>
        <div className="column">
          <h3>Certifikati</h3>
          <ul>
            <li>Naziv provjere 1</li>
            <li>Naziv provjere 2</li>
            <li>Naziv provjere 3</li>
            <li>Naziv provjere 4</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profil;
