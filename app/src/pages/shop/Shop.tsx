import { observer, useObserver } from "mobx-react"
import { PictureText } from "../../components/PictureText/PictureText"
import { PaginatedItems } from "./assets/Pagination/Pagination"
import { ShopListItem } from "./assets/ShopListItem/ShopListItem"
import { stores } from "../../stores"

export const Shop = observer(() => {
    const storeItems = useObserver(() => stores.itemsStore)

    return (
        <div className="page-shop">
            <div className="page-shop_sidebar">
                <PictureText
                    text="Vegetables"
                    image=""
                    clickCallback={() => storeItems.setType("vegetable")} 
                    fatAndDisabled={storeItems.type === "vegetable"}
                />
                <PictureText
                    text="Fruits"
                    image=""
                    clickCallback={() => storeItems.setType("fruit")} 
                    fatAndDisabled={storeItems.type === "fruit"}
                />
                <PictureText
                    text="Cheese"
                    image=""
                    clickCallback={() => storeItems.setType("cheese")} 
                    fatAndDisabled={storeItems.type === "cheese"}
                />
            </div>
            <div className="page-shop_main">
                <div className="page-shop_main_pagination">
                    <PaginatedItems itemsPerPage={5} />
                </div>
                <div className="page-shop_main_list">
                    {storeItems.shownItems.map(i => <ShopListItem {...i} key={i.id} />)}
                </div>
            </div>
        </div>
    )
})