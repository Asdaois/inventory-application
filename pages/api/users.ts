import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middleware/mongodb";
import User from "@/models/User.js";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST": {
        const user = new User({ ...req.body })
        const docs = await user.save()
        res.json(docs);
        break;
      }
      case "GET": {
        const docs = await User.find({});
        res.json(docs)
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
