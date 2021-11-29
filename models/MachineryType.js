import mongoose, { Schema } from "mongoose";

const MachineryTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
mongoose.models = {}
const MachineryType =  mongoose.model('MachineryType', MachineryTypeSchema)

export default MachineryType;