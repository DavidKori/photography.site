import mongoose, { mongo } from "mongoose";
const awardsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    awards: awardsSchema,
    address: new mongoose.Schema({
      county: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      region: {
        type: String,
        enum: ["CEN", "NOR", "EST", "WES", "STH"],
      },
    }),
  },
  {
    _id: true,
  },
);

export default mongoose.model("Brand", brandSchema);
