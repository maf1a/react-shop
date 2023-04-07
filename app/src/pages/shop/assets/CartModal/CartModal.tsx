import ReactModal from "react-modal"
import { PictureText } from "../../../../components/PictureText/PictureText"
import { CartModalTable } from "./CartModalTable"
import { ButtonNormal } from "../../../../components/ButtonNormal/ButtonNormal"

type CartModalProps = {
    shown: boolean,
    close: () => void
}

export const CartModal = (props: CartModalProps) => {
    return (
        <ReactModal 
            isOpen={props.shown}
            contentLabel="onRequestClose Example"
            onRequestClose={() => props.close()}
        >
            <div className="modal modal-cart">
                <div className="modal-cart_header">
                    <PictureText 
                        text="Cart of Peter"
                        image="logo-cart.svg"
                        cursor="default"
                    />
                    <img className="modal-cart_header_close" onClick={props.close} src="logo-close.svg" alt="" />
                </div>
                <div className="modal-cart_main">
                    <CartModalTable />
                </div>
                <div className="modal-cart_footer">
                    <span className="modal-cart_footer_total">Total: CHF 10.-</span>
                    <ButtonNormal label="Order" onClick={() => console.log("clicked order")} />
                </div>
            </div>
        </ReactModal>
    )
}