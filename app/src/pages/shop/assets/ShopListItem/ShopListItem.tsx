import { observer, useObserver } from "mobx-react"
import { PictureText } from "../../../../components/PictureText/PictureText"
import { cartStore } from "../../../../stores/CartStore"

export type ShopListItemProps = {
    id: number
    title: string
    type?: "fruit" | "vegetable" | "cheese"
    availability: number
    description: string
    price: number
    priceUnit: string
}

const Availability = ({ amount }: { amount: number }) => {
    if (amount <= 0) {
        return <span className="shop-list-item_main_availability_no">Out of stock</span>
    }

    return <span className="shop-list-item_main_availability_yes"><b>{amount}</b> available</span>
}

const Action = observer((props: ShopListItemProps) => {
    if (props.availability <= 0) return <></>

    const storeCart = useObserver(() => cartStore)
    if (storeCart.inCart(props.id)) return <></>

    return (
        <div className="shop-list-item_right_action">
            <PictureText 
                text="Add to Cart"
                image="logo-add-to-cart-blue.svg"
                cursor="pointer"
                color="#1968DF"
                clickCallback={() => storeCart.add(props)}
            />
        </div>
    )
})

export const ShopListItem = (props: ShopListItemProps) => {
    return (
        <div className="shop-list-item" style={{backgroundColor: props.availability > 0 ? "#FFFEEF" : "#F8F8F8"}}>
            <div className="shop-list-item_main">
                <div className="shop-list-item_main_title">{props.title}</div>
                <div className="shop-list-item_main_availability">
                    <Availability amount={props.availability} />
                </div>
                <div className="shop-list-item_main_description">{props.description}</div>
            </div>
            <div className="shop-list-item_right">
                <div className="shop-list-item_right_price">CHF {props.price} / {props.priceUnit}</div>
                <Action {...props} />
            </div>
        </div>
    )
}