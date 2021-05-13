import { React, useEffect, useState } from "react";
import axios from "axios";
import Kartica from "../../dijeljeno/Kartica";
const Kategorije = () => {
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
        <Kartica naziv={item.naziv} key={item._id} />
      ))}
    </ul>
  );
};

export default Kategorije;
