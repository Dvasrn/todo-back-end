import { gql } from "graphql-tag";

export const todoTypes = gql`
  type Todo {
    todoName: String
    todoTeam: String
    status: Boolean
  }
  type Query {
    getAllTodo: [Todo]
  }
  input addTodoInput {
    todoName: String
    todoTeam: String
    status: Boolean
  }
  type Mutation {
    addTodoMutation(input: addTodoInput): [Todo]
  }
`;
