import gql from "graphql-tag"
import { ItemsStore, ShopListItemPropsType } from "./ItemsStore"
import { queryAPI } from "../repository/appolo";

type FetchPageArgs = { 
    type: ShopListItemPropsType | null
    limit: number
    offset: number
    includeCount: boolean 
}

export const getShoppingItems = async (store: ItemsStore, args: FetchPageArgs) => {
    const query = gql`
        query { 
            getShoppingItems(type: "${args.type}", limit: ${args.limit}, offset: ${args.offset}) {
                ${args.includeCount ? "total" : ""}
                shoppingItems {
                    _id 
                    title 
                    type 
                    availability 
                    description 
                    price 
                    priceUnit
                }
            }
        }
    `;
    
    store.setLoadingState(true)
    const { data, error } = await queryAPI(query)
    store.setLoadingState(false)
    if (error) {
        store.setErrorState(true)
        return false
    }

    return data
}