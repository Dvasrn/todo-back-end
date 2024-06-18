import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todoName: String,
  todoTeam: String,
});

export const TodoModel =
  mongoose.models.todo || mongoose.model("todo", TodoSchema);
