import { React, useContext } from "react";
import "./Navigacija.css";
import { Link } from "react-router-dom";
import { KorisnikContext } from "./KorisnikContext";

const Navigacija = () => {
  const user = useContext(KorisnikContext);

  return (
    <nav>
      {user.user === null && (
        <ul>
          <li>
            <Link to="/">Naslovna</Link>
          </li>
          <li>
            <Link to="/prijava">Prijava</Link>
          </li>
          <li>
            <Link to="/registracija">Registracija</Link>
          </li>
        </ul>
      )}
      {user.user !== null && user.user.uloga === "registriran" && (
        <ul>
          <li>
            <Link to="/">Naslovna</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/provjere">Provjere</Link>
          </li>
        </ul>
      )}
      {user.user !== null && user.user.uloga === "moderator" && (
        <ul>
          <li>
            <Link to="/">Naslovna</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/provjere">Provjere</Link>
          </li>
          <li>
            <Link to="/kreiraj_materijal">Kreiraj materijal</Link>
          </li>
          <li>
            <Link to="/kreiraj_pitanje">Kreiraj pitanje</Link>
          </li>
          <li>
            <Link to="/kreiraj_provjeru">Kreiraj provjeru</Link>
          </li>
          <li>
            <Link to="/ispravljanje">Ispravljanje provjera</Link>
          </li>
        </ul>
      )}
      {user.user !== null && user.user.uloga === "admin" && (
        <ul>
          <li>
            <Link to="/">Naslovna</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/dodaj_kategoriju">Dodaj kategoriju</Link>
          </li>
          <li>
            <Link to="/kategorije">Kategorije</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigacija;
