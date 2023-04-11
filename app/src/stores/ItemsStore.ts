import { action, makeAutoObservable } from "mobx";
import { queryAPI } from "../repository/appolo";
import { getShoppingItems } from "./ItemsStoreRequests";

export enum ShopListItemPropsType { 
    fruit = "fruit", 
    vegetable = "vegetable",
    cheese = "cheese"
}

export type ShopListItemProps = {
    _id: number
    title: string
    type: ShopListItemPropsType
    availability: number
    description: string
    price: number
    priceUnit: string
}

export class ItemsStore {
    items: ShopListItemProps[] = [];
    type: ShopListItemPropsType | null = null
    initialType: ShopListItemPropsType | null = null
    
    // observables
    shownTotalAmount = 0
    shownItems: ShopListItemProps[] = []
    offset: number = 0
    hasError = false
    isLoading = false

    constructor() {
        makeAutoObservable(this);
    }

    setLoadingState = action((state: boolean) => this.isLoading = state)
    setErrorState = action((state: boolean) => this.hasError = state)

    setType = action(async (type: ShopListItemPropsType = ShopListItemPropsType.vegetable, pageNumber = 0) => {
        if (this.type === type) return
        if (!Object.values(ShopListItemPropsType).includes(type as ShopListItemPropsType)) {
            type = ShopListItemPropsType.vegetable
        }

        this.type = type
        const result = await getShoppingItems(this, { limit: 5, offset: pageNumber * 5, type, includeCount: true });
        if (result) {
            const { getShoppingItems: { total, shoppingItems } } = result
            this.shownTotalAmount = total
            this.shownItems = shoppingItems
        }
    })

    fetchPage = action(async (offset: number) => {
        if (this.type === null) {
            this.type = this.initialType
        }

        this.offset = offset
        const result = await getShoppingItems(this, { limit: 5, offset, type: this.type, includeCount: false });
        if (result) {
            const { getShoppingItems: { shoppingItems } } = result
            this.shownItems = shoppingItems
        }
    })
}

export const itemsStore = new ItemsStore();
