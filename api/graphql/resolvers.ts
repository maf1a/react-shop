import { ShoppingItemsOther, ShoppingItemsQueries } from "./ShoppingItems/ShoppingItemsResolvers";

export const resolvers = {
    Query: {
        ...ShoppingItemsQueries
    },
    ...ShoppingItemsOther
}