import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `Database Connected At ${conn.connection.host == "localhost" || "127.0.0.0" ? "Development" : "Production"}`,
  );
};

export default connectDb;
