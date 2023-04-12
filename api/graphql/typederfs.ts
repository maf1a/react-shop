import { gql } from 'apollo-server-express';
import { ShoppingItemsTypes, ShoppingItemsTypesQueries } from './ShoppingItems/ShoppingItemsTypes';
import { UserMutations, UserTypes } from './Users/UsersTypes';

export const typeDefs = gql`
    ${ShoppingItemsTypes}
    ${UserTypes}
    
    type Query {
        ${ShoppingItemsTypesQueries}
    }

    type Mutation {
        ${UserMutations}
    }
`;
