import { NextApiRequest, NextApiResponse } from "next";

import User from "models/User";
import connectDB from "../../../middleware/mongodb";

/** 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
const handler = async (req, res ) => {
  try {
    switch (req.method) {
      case "PUT": {
        break;
      }
      case "GET": {
        break;
      }
      case "DELETE": {
        await User.findByIdAndDelete(req.query.id);
        res.redirect("/users/")
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
