import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import kategorijaRoutes from "./routes/kategorijaRoute.js";
import authRoutes from "./routes/authRoute.js";

const app = express(); //app, pokretanje express-a
app.use(cors());
app.use(express.json());
app.use("/kategorije", kategorijaRoutes); //svaki route iz kategorija.js pocinje s /kategorija
app.use("/auth", authRoutes);
//app.use(bodyParser.json({ limit: "30mb", extended: true })); //za slike najveca velicina
//app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL =
  "mongodb+srv://pdavor:pdavor123@cluster0.2nd8w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server pokrenut na portu: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
