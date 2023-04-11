import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type ShoppingItem {
        _id: ID
        title: String!
        type: String!
        availability: Float!
        description: String!
        price: Float!
        priceUnit: String!
    }

    type ShoppingItemsResult {
        total: Int!,
        shoppingItems: [ShoppingItem]
    }

    type Query {
        getShoppingItems(type: String, offset: Int, limit: Int): ShoppingItemsResult!
    }
`;
