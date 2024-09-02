import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://natharanasreen:8251902@cluster0.oe2ua.mongodb.net/ABC_RESTAURANT').then(() => console.log("DB Connected"));
}