import { makeExecutableSchema } from 'graphql-tools';
import { UserType } from './types';
import { createUser } from './mutations';

const QueryType = `
  type Query {
    user: String!
  }
`;

const MutationType = `
  type Mutation {
    createUser: User!
  }
`;

const RootType = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const typeDefs = [UserType, QueryType, MutationType, RootType];

const resolvers = {
  Mutation: {
    createUser,
  },
  Query: {
    user: () => 'hello',
  },
};

export const Schema = makeExecutableSchema({ typeDefs, resolvers });
