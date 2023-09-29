import mongoose from "mongoose";

const connect = async () => {
  try {
    // Disable strictQuery option
    mongoose.set('strictQuery', false);

    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Connection failed!");
  }
};

export default connect;
