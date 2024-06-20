import { TodoModel } from "@/graphql/models/Todo-model";
import { AddTodoInput } from "@/graphql/generated/client";

export const addTodoMutation = async (
  _: any,
  { input }: { input: AddTodoInput }
) => {
  const { todoName, todoTeam, status } = input;
  console.log(input);
  try {
    await TodoModel.create({
      todoName: todoName,
      todoTeam: todoTeam,
      status: status,
    });
    const allTodo = await TodoModel.find();
    return allTodo;
  } catch (err) {
    return err;
  }
};
