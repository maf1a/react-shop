import { useState } from "react"
import { PictureText } from "../../components/PictureText/PictureText"
import { CartModal } from "../../pages/shop/assets/CartModal/CartModal"
import { observer, useObserver } from "mobx-react"
import { userStore } from "../../stores/UserStore"
import { cartStore } from "../../stores/CartStore"

export const Header = observer(() => {
    const [cartShown, setCartShown] = useState(false)
    const storeUser = useObserver(() => userStore)
    const storeCart = useObserver(() => cartStore)

    const cartAmount = storeCart.items.length ? ` (${storeCart.items.length})` : ""

    return (
        <div className="app-header">
            <div className="app-header-logo-container">
                <img className="header-logo" src="/logo-inline.svg" alt="" />
            </div>
            <div className="app-header-actions">
                <PictureText
                    text={storeUser.user?.name || ""}
                    image={`https://i.pravatar.cc/15?u=${storeUser.user?.name}`}
                    cursor="default"
                    borderRadius="50%"
                />
                <PictureText
                    text="Log out"
                    image="/logo-logout.svg"
                    clickCallback={() => {
                        storeUser.logOut()
                        storeCart.emptyCart()
                    }} 
                />
                <PictureText
                    text={`Cart${cartAmount}`}
                    image="/logo-cart.svg"
                    clickCallback={() => setCartShown(true)} 
                />
            </div>
            <CartModal 
                shown={cartShown} 
                close={() => setCartShown(false)}
            />
        </div>
    )
})