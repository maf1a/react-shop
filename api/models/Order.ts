import { Schema, model } from "mongoose";

export enum ShopListItemPropsType { 
    fruit = "fruit", 
    vegetable = "vegetable",
    cheese = "cheese"
}

export interface IShoppingItemOrdered {
    id: string
    title: string
    type: string
    price: number
    priceUnit: string
    amount: number
    availability: number
}

export interface IOrder {
    username: string
    shoppingItems: IShoppingItemOrdered[]
}

export const ShoppingItemSchema = new Schema<IShoppingItemOrdered>({
    id: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    priceUnit: { type: String, required: true },
    amount: { type: Number, required: true },
    availability: { type: Number, required: true },
});
  
export const ShoppingItemModel = model<IShoppingItemOrdered>('ShoppingItemOrdered', ShoppingItemSchema);
