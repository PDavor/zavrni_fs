import { React, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Provjera.css";
import { KorisnikContext } from "../../dijeljeno/KorisnikContext";
const Provjera = () => {
  const user = useContext(KorisnikContext);
  let { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [rjesenje, setRjesenje] = useState([]);
  const handleRjesenje = (event) => {
    setRjesenje([
      ...rjesenje,
      {
        pitanje_id: event.target.name,
        odgovor: event.target.value,
      },
    ]);
    event.target.parentNode.parentNode.disabled = true;
  };
  useEffect(async () => {
    axios
      .get(`http://localhost:5000/kategorije/provjere/${id}`)
      .then((res) => {
        //let provjera = res.data;
        setData(res.data);
        setIsloading(false);
        //console.log("provjera", data[0].provjere);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = {
      korisnik_id: user.user._id,
      provjera_id: id,
      rjesenja: rjesenje,
    };

    console.log(sendData);
  };
  return (
    <div>
      <div>
        {!isLoading &&
          data[0].provjere
            .filter((p) => p._id.includes(id))
            .map((nez) => <h1>{nez.naziv}</h1>)}
      </div>
      <form onSubmit={handleSubmit}>
        {!isLoading &&
          data[0].pitanja.map((p) => (
            <fieldset id={p._id} className="field" disabled={false}>
              <h4>{p.pitanje}</h4>
              {p.odgovori.map((o) => (
                <div>
                  <input
                    type="radio"
                    value={o}
                    key={o}
                    name={p._id}
                    onClick={handleRjesenje}
                    pitanje={p.pitanje}
                    todgovor={p.tocanOdgovor}
                  />
                  <label for={o}>{o}</label>
                </div>
              ))}
            </fieldset>
          ))}
        <button type="submit" className="posalji">
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default Provjera;
