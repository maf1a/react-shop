import { ShoppingItemModel } from "../models/ShoppingItem";

export const resolvers = {
    Query: {
        async getShoppingItemsPage(_, { type, offset, limit }) {
            return await ShoppingItemModel.find({ type }).limit(limit).skip(offset)
        },

        async getShoppingItemsPageWithTotal(_, { type, limit }) {
            const shoppingItems = await ShoppingItemModel.find({ type }).limit(limit)
            const total = await ShoppingItemModel.count({ type })

            return {
                total,
                shoppingItems
            }
        },
    },
}