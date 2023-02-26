import { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { UserType } from '../../entities/User';

export const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'root mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            description: 'add a user',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
            },
        },
    }),
});
