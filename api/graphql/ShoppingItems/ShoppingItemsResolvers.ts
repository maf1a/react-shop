import { ShoppingItemModel } from "../../models/ShoppingItem"

export const ShoppingItemsQueries = {
    async getShoppingItems(_, { type, limit, offset }) {
        return {
            type,
            shoppingItems: await ShoppingItemModel.find({ type }).limit(limit).skip(offset)
        }
    },
}

export const ShoppingItemsOther = {
    ShoppingItemsResult: {
        async total({ type }) {
            return await ShoppingItemModel.countDocuments({ type })
        },
    },
}