import mongoose from "mongoose";

export const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB CONNECTED SUCCESFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    // exit with failure
    process.exit(1);
  }
};
