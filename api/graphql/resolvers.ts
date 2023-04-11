import { ShoppingItemModel } from "../models/ShoppingItem";

export const resolvers = {
    Query: {
        async getShoppingItems(_, { type, limit, offset }) {
            return {
                type,
                shoppingItems: await ShoppingItemModel.find({ type }).limit(limit).skip(offset)
            }
        },
    },
    ShoppingItemsResult: {
        async total({ type }) {
            return await ShoppingItemModel.countDocuments({ type })
        },
    },
}