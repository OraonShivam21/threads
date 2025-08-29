import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log("MONGODB_URI not found");
  }

  if (isConnected) {
    return console.log("Already connected to MongoDB");
  }

  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("==============================");
    console.log(`Mongoose connected to ${connect.connection.host}`);
    console.log("==============================");
  } catch (error) {
    console.log("Mongoose connection error:", error);
  }
};
