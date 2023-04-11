import { Schema, model } from "mongoose";

export enum ShopListItemPropsType { 
    fruit = "fruit", 
    vegetable = "vegetable",
    cheese = "cheese"
}

export interface IShoppingItem {
    title: string
    type: ShopListItemPropsType
    availability: number
    description: string
    price: number
    priceUnit: string
}

export const ShoppingItemSchema = new Schema<IShoppingItem>({
    title: { type: String, required: true },
    type: { type: String, required: true },
    availability: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    priceUnit: { type: String, required: true },
});
  
export const ShoppingItemModel = model<IShoppingItem>('ShoppingItem', ShoppingItemSchema);
