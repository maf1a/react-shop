import { observer, useObserver } from "mobx-react"
import { PictureText } from "../../components/PictureText/PictureText"
import { PaginatedItems } from "./assets/Pagination/Pagination"
import { ShopListItem, ShopListItemPropsType } from "./assets/ShopListItem/ShopListItem"
import { stores } from "../../stores"
import { useParams } from "react-router-dom"

export const Shop = observer(() => {
    let { pageType } = useParams();
    const storeItems = useObserver(() => stores.itemsStore)
    
    if (typeof pageType === "string") {
        storeItems.setType(pageType as unknown as ShopListItemPropsType)
    }

    return (
        <div className="page-shop">
            <div className="page-shop_sidebar">
                <PictureText
                    text="Vegetables"
                    image=""
                    clickCallback={() => storeItems.setType(ShopListItemPropsType.vegetable)} 
                    fatAndDisabled={storeItems.type === ShopListItemPropsType.vegetable}
                />
                <PictureText
                    text="Fruits"
                    image=""
                    clickCallback={() => storeItems.setType(ShopListItemPropsType.fruit)} 
                    fatAndDisabled={storeItems.type === ShopListItemPropsType.fruit}
                />
                <PictureText
                    text="Cheese"
                    image=""
                    clickCallback={() => storeItems.setType(ShopListItemPropsType.cheese)} 
                    fatAndDisabled={storeItems.type === ShopListItemPropsType.cheese}
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