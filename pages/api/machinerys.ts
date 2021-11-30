import { Models } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middleware/mongodb";
import Machinery from "../../models/Machinery";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST": {
        const doc = new Machinery({ ...req.body });
        const docSaved = await doc.save();
        res.json(docSaved);
        break;
      }
      case "GET": {
        const doc = await Machinery.find({}).populate("machine_type");
        res.json(doc);
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
