import { makeExecutableSchema } from 'graphql-tools';

import { createUser, deleteUser, updateUser } from './mutations';
import { resolveUser } from './resolvers';
import { UserInput, UserType } from './types';

const QueryType = `
  type Query {
    # Search for users.
    user(
      id: Int             # Unique identifier assocated with the user
      firstName: String   # First name of user
      lastName: String    # Last name of user
    ): [User]!
  }
`;

const MutationType = `
  type Mutation {
    # Create a new user.
    createUser(
      firstName: String! # User's first name
      lastName:  String! # User's last name
    ): User!

    # Update an existing user.
    updateUser(
      id: Int!,               # Unique identifier associated with target user
      values: UserInput!      # Values to update
    ): Boolean!

    # Delete an existing user.
    deleteUser(
      id: Int!,               # Unique identifier associated with target user
    ): Boolean!
  }
`;

const RootType = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const typeDefs = [UserType, UserInput, QueryType, MutationType, RootType];

const resolvers = {
  Mutation: {
    createUser,
    deleteUser,
    updateUser,
  },
  Query: {
    user: resolveUser,
  },
};

export const Schema = makeExecutableSchema({ typeDefs, resolvers });
