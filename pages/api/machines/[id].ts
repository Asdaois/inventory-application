import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import Machinery from "../../../models/Machinery";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "PUT": {
        const doc = await Machinery.findByIdAndUpdate(req.query.id, {
          ...req.body,
        });
        res.json({message: 'UPDATE'});
        break;
      }
      case "GET": {
        const doc = await Machinery.findById(req.query.id);
        await doc.populate("machine_type");
        res.json(doc);
        break;
      }
      case "DELETE": {
        const doc = await Machinery.findByIdAndDelete(req.query.id);
        res.json({message: "deleted", doc})
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
