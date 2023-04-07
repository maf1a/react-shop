import { useState } from "react"
import { PictureText } from "../PictureText/PictureText"
import { CartModal } from "../../pages/shop/assets/CartModal/CartModal"

export const Header = () => {
    const [cartShown, setCartShown] = useState(false)

    return (
        <div className="app-header">
            <div className="app-header-logo-container">
                <img className="header-logo" src="logo-inline.svg" alt="" />
            </div>
            <div className="app-header-actions">
                <PictureText
                    text="Peter"
                    image=""
                    cursor="default"
                />
                <PictureText
                    text="Cart"
                    image="logo-cart.svg"
                    clickCallback={() => setCartShown(true)} 
                />
            </div>
            <CartModal 
                shown={cartShown} 
                close={() => setCartShown(false)}
            />
        </div>
    )
}