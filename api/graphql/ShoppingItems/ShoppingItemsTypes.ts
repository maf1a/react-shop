export const ShoppingItemsTypes = `
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
`;

export const ShoppingItemsTypesQueries = `
    getShoppingItems(type: String, offset: Int, limit: Int): ShoppingItemsResult!
`
