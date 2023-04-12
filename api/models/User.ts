import { Timestamp } from "mongodb";
import { Schema, model } from "mongoose";

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
    creationTime: string
    username: string
    items: IShoppingItemOrdered[]
}

export interface IUser {
    username: string
    orders: IOrder[]
}

const IShoppingItemOrderedShema = new Schema<IShoppingItemOrdered>({
    id: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    priceUnit: { type: String, required: true },
    amount: { type: Number, required: true },
    availability: { type: Number, required: true },
})

const IOrderShema = new Schema<IOrder>({
    creationTime: { type: String, required: true },
    items: [IShoppingItemOrderedShema],
})

export const UserSchema = new Schema<IUser>({
    username: { type: String, required: true },
    orders: [IOrderShema]
});
  
export const UserModel = model<IUser>('User', UserSchema);
