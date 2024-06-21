// import { ApolloServer } from "@apollo/server";
// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { NextRequest } from "next/server";
// import { gql } from "graphql-tag";

// const users = [
//   { id: '1', name: 'bat', email: 'bat@example.com' },
//   { id: '2', name: 'bold', email: 'bold@example.com' },
//   { id: '3', name: 'od', email: 'od@example.com' },
//   { id: '4', name: 'huslen', email: 'bat@example.com' },
//   { id: '5', name: 'zorig', email: 'bold@example.com' },
//   { id: '6', name: 'bayr', email: 'Od@example.com' },
// ];

// class UserAPI {
//   getUsers() {
//     return users;
//   }


//   getUserByld(id: String) {
//     return users.find(user => user.id === id);
//   }
// }

// const userAPI = new UserAPI();

// const resolvers = {
//   Query: {
//     users: () => userAPI.getUsers(),
//     user: (parent: any, {id} : {id : any}) => userAPI.getUserByld(id),
//   },
// };

// const server = new ApolloServer({
  
//   resolvers,
// });

// const handler = startServerAndCreateNextHandler<NextRequest>(server, {
//   context: async (req) => ({req}),
// });

// export {handler as GET, handler as POST};
