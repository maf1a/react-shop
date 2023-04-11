import { action, makeAutoObservable, reaction } from "mobx";
import { ShopListItemProps } from "./ItemsStore";

export type ShopListItemSelectedProps = {
    id: number
    type: string
    title: string
    price: number
    priceUnit: string
    amount: number
    availability: number
}

export class CartStore {
    items: ShopListItemSelectedProps[] = [];
    total: number = 0

    constructor() {
        makeAutoObservable(this);
        reaction(() => this.items, items => {
            this.total = +(items.reduce((sum, item) => sum + item.price * item.amount, 0).toFixed(2));
        });
    }

    inCart(id: number) {
        return this.items.some(i => i.id === id);
    }

    emptyCart() {
        this.items = []
    }

    setAmount = action((id: number, amount: number) => {
        this.items = this.items.map(item => {
            if (item.id === id) {
                item.amount = Math.min(Math.max(amount, 0), item.availability)
            }

            return item
        })
    })

    add = action((item: ShopListItemProps) => {
        if (this.inCart(item._id)) {
            return
        }

        this.items = [...this.items, {
            id: item._id || 0, 
            type: item.type,
            title: item.title,
            price: item.price,
            priceUnit: item.priceUnit,
            availability: item.availability,
            amount: 1,
        }]
    })

    remove = action((id: number) => {
        this.items = this.items.filter(i => i.id !== id)
    })
}

export const cartStore = new CartStore();