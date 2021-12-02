import { MachineType } from "@models";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middleware/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST":
        if (!req.body.name) res.json({ error: "data invalid" });
        const newMachineryType = new MachineType({ name: req.body.name });
        newMachineryType.save((err, result) => {
          if (err) res.json({ error: "error" });

          res.json(result);
        });

        break;

      case "GET": {
        const docs = await MachineType.find({});
        res.json(docs);
        break;
      }
      default:
        break;
    }
  } catch (err) {}
};

export default connectDB(handler);
