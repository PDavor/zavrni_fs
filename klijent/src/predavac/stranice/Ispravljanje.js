import { React, useContext } from "react";
import { KorisnikContext } from "../../dijeljeno/KorisnikContext";

const Ispravljanje = () => {
  const { user } = useContext(KorisnikContext);
  console.log(user._id);
  return <div>Ispravljanje</div>;
};

export default Ispravljanje;
