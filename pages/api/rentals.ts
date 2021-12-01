import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middleware/mongodb";
import Rental from "../../models/Rental.js";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST": {
        res.json({ message: "POST NOT IMPLEMENTED", body: req.body });
        break;
      }
      case "GET": {
        const docs = await Rental.find({});
        res.json(docs);
        break;
      }
      default:
        break;
    }
  } catch (err) {
    res.json(err);
  }
};

export default connectDB(handler);
