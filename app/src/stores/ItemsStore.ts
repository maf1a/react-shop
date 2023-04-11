import { action, makeAutoObservable } from "mobx";
import { queryAPI } from "../repository/appolo";

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
    type: ShopListItemProps["type"] | null = null
    initialType: ShopListItemProps["type"] | null = null
    
    // observables
    shownTotalAmount: number = 0
    shownItems: ShopListItemProps[] = []
    offset: number = 0
    hasError = false
    isLoading = false

    constructor() {
        makeAutoObservable(this);
    }

    setType = action(async (type: ShopListItemPropsType = ShopListItemPropsType.vegetable) => {
        if (!Object.values(ShopListItemPropsType).includes(type as ShopListItemPropsType)) {
            type = ShopListItemPropsType.vegetable
        }

        if (this.type === type) return
        this.type = type
        this.shownTotalAmount = this.items.filter(i => i.type === this.type).length

        const query = `
            query { 
                getShoppingItemsPageWithTotal(type: "${this.type}", limit: 5) {
                    total,
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

        this.isLoading = true
        const { data, error } = await queryAPI(query);
        this.isLoading = false
        if (error) {
            this.hasError = true
            console.error(error)
            return
        }

        this.shownTotalAmount = data.getShoppingItemsPageWithTotal.total
        this.shownItems = data.getShoppingItemsPageWithTotal.shoppingItems
    })

    fetchPage = action(async (offset: number) => {
        if (this.type === null) {
            this.type = this.initialType
        }

        this.offset = offset
        const query = `
            query { 
                getShoppingItemsPage(type: "${this.type}", limit: 5, offset:${offset || 0}) {
                    _id 
                    title 
                    type 
                    availability 
                    description 
                    price 
                    priceUnit
                }
            }
        `;

        this.isLoading = true
        const { data, error } = await queryAPI(query);
        this.isLoading = false

        if (error) {
            this.hasError = true
            console.error(error)
            return
        }

        this.shownItems = data.getShoppingItemsPage
    })
}

export const itemsStore = new ItemsStore();