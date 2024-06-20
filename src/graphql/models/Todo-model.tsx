import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todoName: String,
  todoTeam: String,
  status: Boolean,
});

export const TodoModel =
  mongoose.models.todo || mongoose.model("todo", TodoSchema);
