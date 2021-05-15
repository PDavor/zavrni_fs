import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Materijal.css";
const Materijal = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get(`http://localhost:5000/kategorije/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Materijali za kategoriju {data.naziv}</h1>
      {data.materijali ? (
        data.materijali.map((item) => (
          <div className="materijal-naziv-tekst" key={item._id}>
            <h2>{item.naziv}</h2>
            <p>{item.tekst}</p>
          </div>
        ))
      ) : (
        <p>Nema materijala</p>
      )}
    </>
  );
};

export default Materijal;
