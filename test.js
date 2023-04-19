import mongoose from "mongoose";
import MyModel from "./models/myModel.mjs";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => {
  console.log("Connexion à la base de données réussie !");

  const document = new MyModel({
    nom: "Hdm",
    age: 20,
  });

  document
    .save()
    .then(() => {
      console.log("Le document a été enregistré !");
      mongoose.connection.close();
    })
    .catch((err) => console.error(err));
});
