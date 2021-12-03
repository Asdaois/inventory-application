import { NextApiRequest, NextApiResponse } from "next";

import { User } from "../../models/index";
import connectDB from "../../middleware/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST": {
        const user = new User({
          ...req.body,
          phone_number: parseInt(req.body.phone_number),
        });
        const docs = await user.save();
        res.redirect("/");
        break;
      }
      case "GET": {
        const docs = await User.find({});
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
