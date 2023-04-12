import gql from "graphql-tag"
import { mutateAPI } from "../repository/appolo";
import { CartStore, ShopListItemSelectedProps } from "./CartStore";

type CreateOrderArgs = { 
    username: string
    items: ShopListItemSelectedProps[]
}

export const createOrderRequest = async (store: CartStore, order: CreateOrderArgs) => {
    const query = gql`
        mutation CreateOrder($order: Order) {
            createOrder(order: $order)
        }
    `;

    store.setLoadingState(true)
    const { data, error } = await mutateAPI(query, { order })
    store.setLoadingState(false)
    if (error) {
        store.setErrorState(true)
        return false
    }

    return data
}