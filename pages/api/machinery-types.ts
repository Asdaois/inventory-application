import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middleware/mongodb";
import MachineryType from "../../models/MachineryType";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      if (!req.body.name) res.json({ error: "data invalid" });
      const newMachineryType = new MachineryType({ name: req.body.name });
      newMachineryType.save((err, result) => {
        if (err) res.json({ error: "error" });

        res.json(result)
      });

      break;

    case "GET":
      MachineryType.find({}).exec((err, listMachinesTypes) => {
        if (err) return res.json({error: err})

        res.json(listMachinesTypes);
      })
      break
    default:
      break;
  }
};

export default connectDB(handler);
