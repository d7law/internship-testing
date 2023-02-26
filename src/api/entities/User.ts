import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    age!: number;
    @Column()
    address!: string;
}

//Schema GraphQl
export const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'gql for user entity',
    fields: () => {
        return {
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
            address: { type: GraphQLString },
        };
    },
});
