export const UserTypes = `
    input ShoppingItemOrdered {
        id: ID!
        title: String!
        type: String!
        price: Float!
        priceUnit: String!
        amount: Float!
        availability: Float!
    }

    input Order {
        username: String!
        items: [ShoppingItemOrdered!]!
    }
`

export const UserMutations = `
    createOrder(order: Order): Boolean
`
