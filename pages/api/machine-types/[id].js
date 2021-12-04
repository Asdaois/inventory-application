import { NextApiRequest, NextApiResponse } from "next";

import MachineryType from "../../../models/MachineryType";
import connectDB from "../../../middleware/mongodb";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res ) => {
  switch (req.method) {
    case "PUT":
      const { name } = req.body;
      MachineryType.findByIdAndUpdate(
        req.query.id,
        { name: name },
        (err, result) => {
          res.json(result);
        }
      );
      break;
    case "GET":
      MachineryType.findById(req.query.id, (err, result) => {
        res.json(result);
      });
    case "DELETE":
      MachineryType.findByIdAndDelete(req.query.id, (err, result) => {
        res.json(result)
      })
    default:
      break;
  }
};

export default connectDB(handler);
