import ReactModal from "react-modal"
import { PictureText } from "../../../../components/PictureText/PictureText"
import { ButtonNormal } from "../../../../components/ButtonNormal/ButtonNormal"
import { observer, useObserver } from "mobx-react"
import { userStore } from "../../../../stores/UserStore"
import { cartStore } from "../../../../stores/CartStore"
import { CartModalTableItem } from "./CartModalTableItem"

type CartModalProps = {
    shown: boolean,
    close: () => void
}

export const CartModal = observer((props: CartModalProps) => {
    const storeUser = useObserver(() => userStore)
    const storeCart = useObserver(() => cartStore)

    return (
        <ReactModal 
            isOpen={props.shown}
            contentLabel="onRequestClose Example"
            onRequestClose={() => props.close()}
        >
            <div className="modal modal-cart">
                <div className="modal-cart_header">
                    <PictureText 
                        text={`Cart of ${storeUser.user?.name || ""}`}
                        image="/logo-cart.svg"
                        cursor="default"
                    />
                    <img className="modal-cart_header_close" onClick={props.close} src="/logo-close.svg" alt="" />
                </div>
                <div className="modal-cart_main">
                <table className="cart-modal-table">
                    <thead>
                        <tr>
                            <th className="col-1">{storeCart.items.length} items to checkout</th>
                            <th className="col-2">Price</th>
                            <th className="col-3">Quantity</th>
                            <th className="col-4">Total</th>
                            <th className="col-5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeCart.items.map((i, key) => <CartModalTableItem key={key} {...i} />)}
                    </tbody>
                </table>
                </div>
                <div className="modal-cart_footer">
                    <span className="modal-cart_footer_total">Total: CHF {storeCart.total.toFixed(2)}</span>
                    <ButtonNormal label="Order" onClick={() => console.log("clicked order")} />
                </div>
            </div>
        </ReactModal>
    )
})