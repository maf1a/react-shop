import { PictureText } from "../../../../components/PictureText/PictureText"

export type ShopListItemProps = {
    title: string
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

const Action = ({ amount }: { amount: number }) => {
    if (amount > 0) {
        return (
            <div className="shop-list-item_right_action">
                <PictureText 
                    text="Add to Cart"
                    image="logo-add-to-cart-blue.svg"
                    cursor="pointer"
                    color="#1968DF"
                    clickCallback={() => console.log("added to cart")}
                />
            </div>
        )
    }

    return <></>
}

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
                <div className="shop-list-item_right_price">CHF {props.price}.- / {props.priceUnit}</div>
                <Action amount={props.availability} />
            </div>
        </div>
    )
}