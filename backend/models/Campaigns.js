import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    _id: true,
  },
  {
    client: {
      name: {
        type: String,
        trim: true,
      },
      category: {
        type: String,
        trim: true,
      },
    },
    idNo: {
      type: Number,
      default: auto,
    },
    name: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      default: new Date(),
    },
    category: {
      type: String,
      trim: true,
    },
  },
);

export default mongoose.model("campaign", campaignSchema);
