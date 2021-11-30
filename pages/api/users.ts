import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middleware/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST": {
        break;
      }
      case "GET": {
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
