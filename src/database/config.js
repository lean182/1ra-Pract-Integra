import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gozalvezleandro:LeanPunk182@integrador1.e9xoiar.mongodb.net/ecommerce"
    );
    console.log("Base de datos Online");
  } catch (error) {
    console.log(`Error al levantar la base de datos ${error}`);
    process.exit(1);
  }
};
