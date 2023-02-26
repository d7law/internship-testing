import { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLList } from 'graphql';
import { UserType } from '../../entities/User';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'root query type',
    fields: () => {
        return {
            /* user: {
                type: UserType,
                description: 'alone user',
                args: {
                    id: { type: GraphQLNonNull(GraphQLInt) },
                },
                resolve: async () => {
                    const userRepository = getRepository(User);
                    const users = await userRepository.find();
                    return users;
                },
            }, */
            users: {
                type: GraphQLList(UserType),
                description: 'list all users',
                resolve: async () => {
                    const userRepo = getRepository(User);
                    return await userRepo.find();
                },
            },
        };
    },
});
