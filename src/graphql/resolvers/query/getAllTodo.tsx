import { TodoModel } from "@/graphql/models/Todo-model";

export const getAllTodo = async () => {
  try {
    const allTodo = await TodoModel.find();
    return allTodo;
  } catch (err) {
    return err;
  }
};
