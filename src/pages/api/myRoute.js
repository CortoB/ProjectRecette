import connectDB from "../../../utils/mongoose.mjs";
import MyModel from "../../../models/myModel.mjs";

const handler = async (req, res) => {
  await connectDB();

  const documents = await MyModel.find();

  res.json(documents);
};

export default handler;
