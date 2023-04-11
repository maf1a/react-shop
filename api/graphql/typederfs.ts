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

    type ShoppingItemWithTotal {
        total: Int!,
        shoppingItems: [ShoppingItem]
    }

    type Query {
        getShoppingItemsPage(type: String, offset: Int, limit: Int): [ShoppingItem]!
        getShoppingItemsPageWithTotal(type: String, limit: Int, offset: Int): ShoppingItemWithTotal!
    }
`;
