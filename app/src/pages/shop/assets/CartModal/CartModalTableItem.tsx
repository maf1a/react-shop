import { useObserver } from "mobx-react"
import { ShopListItemSelectedProps, cartStore } from "../../../../stores/CartStore"

export const CartModalTableItem = (props: ShopListItemSelectedProps) => {
    const storeCart = useObserver(() => cartStore)

    return (
        <tr>
            <td>{props.title}</td>
            <td>CHF {props.price} / {props.priceUnit}</td>
            <td className="col-input">
                <input type="number" value={props.amount} onChange={e => storeCart.setAmount(props.id, e.target.valueAsNumber)} /> {props.priceUnit}
            </td>
            <td>CHF {(props.price * props.amount).toFixed(2)}</td>
            <td className="col-close">
                <div className="col-close-content">
                    <img src="logo-close.svg" onClick={() => storeCart.remove(props.id)} alt="" />
                </div>
            </td>
        </tr>
    )
}