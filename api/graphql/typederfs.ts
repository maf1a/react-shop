import { gql } from 'apollo-server-express';
import { ShoppingItemsTypes, ShoppingItemsTypesQueries } from './ShoppingItems/ShoppingItemsTypes';

export const typeDefs = gql`
    ${ShoppingItemsTypes}
    
    type Query {
        ${ShoppingItemsTypesQueries}
    }
`;
