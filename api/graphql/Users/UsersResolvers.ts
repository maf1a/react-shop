import { IOrder, UserModel } from "../../models/User"

const getUserByUsername = async (username: string) => {
    const user = await UserModel.findOne({ username })
    if (!user) {
        return await UserModel.create({ username })
    }

    return user
}

export const UserMutations = {
    async createOrder(_, payload) {
        const user = await getUserByUsername(payload.order.username)
        payload.order.creationTime = Date.now()
        user.orders.push(payload.order)
        await user.save()
        return true
    },
} 
