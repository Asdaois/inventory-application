import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import Machinery from "../../../models/Machinery";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "PUT":
        break;
      case "GET":
        const doc = await Machinery.findById(req.query.id);
        await doc.populate("machine_type");
        res.json(doc);
        break;
      case "DELETE":
        break;
      default:
        break;
    }
  } catch (err) {
    res.json(err);
  }
};

export default connectDB(handler);
