import mongoose from "mongoose";

export async function initMongo() {
  if (!process.env.MONGODB_URL) throw new Error("MongoDB URL Not Configured");
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("MongoDB Connection Successful");
}
