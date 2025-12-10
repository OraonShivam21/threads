import mongoose from "mongoose";

let isConnected = false; // tracking the connection

export const connectToDB = async () => {
  // set strict query mode for Mongoose to prevent uknown field queries
  mongoose.set("strictQuery", true);

  // checking mongodb uri
  if (!process.env.MONGODB_URI) return console.log("Missing MONGODB_URI");

  // is already connected, prevent new connection
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true; // setting the connection status to true
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
