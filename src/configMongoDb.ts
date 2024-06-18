import mongoose from "mongoose"

export default async function connectTodoDB() {
  await mongoose.connect(
    "mongodb+srv://Dva:20080331@dva.sk2v9oe.mongodb.net/todo?retryWrites=true&w=majority&appName=Dvasrn"
  );
  console.log("To do database connected");
}
