export type ShopListItemSelectedProps = {
    title: string
    price: number
    priceUnit: string
    amount: number
}

export const CartModalTable = () => {
    const items: ShopListItemSelectedProps[] = []
    for (let i = 0; i < 10; i++) {
        items.push({
            title: "Ananas Tropical Tasty",
            price: 5,
            priceUnit: "kg",
            amount: 2
        })
    }

    return (
        <table className="cart-modal-table">
            <thead>
                <tr>
                    <th className="col-1">3 items to checkout</th>
                    <th className="col-2">Price</th>
                    <th className="col-3">Quantity</th>
                    <th className="col-4">Total</th>
                    <th className="col-5"></th>
                </tr>
            </thead>
            <tbody>
                {items.map((i, key) => (
                    <tr key={key}>
                        <td>{i.title}</td>
                        <td>CHF {i.price}.- / {i.priceUnit}</td>
                        <td className="col-input"><input type="number" value={i.amount} onInput={() => {}} /> {i.priceUnit}</td>
                        <td>CHF {i.price * i.amount}.-</td>
                        <td className="col-close">
                            <div className="col-close-content">
                                <img src="logo-close.svg" alt="" />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}