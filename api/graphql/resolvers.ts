import { ShoppingItemsOther, ShoppingItemsQueries } from "./ShoppingItems/ShoppingItemsResolvers";
import { UserMutations } from "./Users/UsersResolvers";

export const resolvers = {
    Query: {
        ...ShoppingItemsQueries
    },
    Mutation: {
        ...UserMutations
    },
    ...ShoppingItemsOther
}