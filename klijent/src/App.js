import { React, useState, useMemo } from "react";
import "./App.css";
import Navigacija from "./dijeljeno/Navigacija";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Naslovna from "./dijeljeno/Naslovna";
import Prijava from "./dijeljeno/Prijava";
import Registracija from "./dijeljeno/Registracija";
import Profil from "./dijeljeno/Profil";
import Provjere from "./student/stranice/Provjere";
import KreirajMaterijal from "./predavac/stranice/KreirajMaterijal";
import KreirajPitanje from "./predavac/stranice/KreirajPitanje";
import KreirajProvjeru from "./predavac/stranice/KreirajProvjeru";
import Ispravljanje from "./predavac/stranice/Ispravljanje";
import DodajKategoriju from "./admin/stranice/DodajKategoriju";
import Kategorije from "./admin/stranice/Kategorije";
import Podnozje from "./dijeljeno/Podnozje";
import { KorisnikContext } from "./dijeljeno/KorisnikContext";
import Materijal from "./dijeljeno/Materijal";
import Provjera from "./student/stranice/Provjera";
const App = () => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <KorisnikContext.Provider value={value}>
      <Router>
        <Navigacija />
        <div id="sadrzaj">
          <Switch>
            <Route path="/" exact>
              <Naslovna />
            </Route>
            <Route path="/prijava">
              <Prijava />
            </Route>
            <Route path="/registracija">
              <Registracija />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route path="/provjere">
              <Provjere />
            </Route>
            <Route path="/kreiraj_materijal">
              <KreirajMaterijal />
            </Route>
            <Route path="/kreiraj_pitanje">
              <KreirajPitanje />
            </Route>
            <Route path="/kreiraj_provjeru">
              <KreirajProvjeru />
            </Route>
            <Route path="/ispravljanje">
              <Ispravljanje />
            </Route>
            <Route path="/dodaj_kategoriju">
              <DodajKategoriju />
            </Route>
            <Route path="/kategorije">
              <Kategorije />
            </Route>
            <Route path="/materijal/:id">
              <Materijal />
            </Route>
            <Route path="/provjera/:id">
              <Provjera />
            </Route>
          </Switch>
        </div>
        <Podnozje />
      </Router>
    </KorisnikContext.Provider>
  );
};

export default App;
