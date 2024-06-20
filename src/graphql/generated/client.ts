export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodoMutation?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationAddTodoMutationArgs = {
  input?: InputMaybe<AddTodoInput>;
};

export type Query = {
  __typename?: 'Query';
  getAllTodo?: Maybe<Array<Maybe<Todo>>>;
};

export type Todo = {
  __typename?: 'Todo';
  status?: Maybe<Scalars['Boolean']['output']>;
  todoName?: Maybe<Scalars['String']['output']>;
  todoTeam?: Maybe<Scalars['String']['output']>;
};

export type AddTodoInput = {
  status?: InputMaybe<Scalars['Boolean']['input']>;
  todoName?: InputMaybe<Scalars['String']['input']>;
  todoTeam?: InputMaybe<Scalars['String']['input']>;
};


