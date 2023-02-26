import { GraphQLSchema } from 'graphql';
import { RootQueryType } from '../query_gql/rootQuery.gql';

export const schemagQL = new GraphQLSchema({
    query:RootQueryType
})