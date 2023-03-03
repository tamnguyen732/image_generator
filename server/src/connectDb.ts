import mongoose from "mongoose";
import { MONGO_URI } from "./constants/mongoURL";

const connectToDb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("DB already connected ✔️");
    return;
  }

  if (!MONGO_URI) throw new Error("MongoDB URI not found 🔨");

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB 🚀");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
};

export default connectToDb;
