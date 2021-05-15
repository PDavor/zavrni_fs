import { React, useState, useEffect } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";
import Kartica from "./Kartica";
import "./Naslovna.css";
import Materijal from "./Materijal";
const Naslovna = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("http://localhost:5000/kategorije/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul id="predmeti">
      {data.map((item) => (
        <Link to={`/materijal/${item._id}`} key={item._id}>
          <Kartica naziv={item.naziv} key={item._id} id={item._id} />
        </Link>
      ))}
    </ul>
  );
};

export default Naslovna;
