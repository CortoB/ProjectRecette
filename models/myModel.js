import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  nom: String,
  age: Number,
});

const MyModel = mongoose.model("myCollection", mySchema);

export default MyModel;
