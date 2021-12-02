import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middleware/mongodb";
import { Machine } from "@models";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST": {
        const doc = new Machine({ ...req.body });
        const docSaved = await doc.save();
        res.json(docSaved);
        break;
      }
      case "GET": {
        const docs = await Machine.find({}).populate("machine_type");
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
