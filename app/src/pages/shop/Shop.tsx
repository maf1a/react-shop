import { observer, useObserver } from "mobx-react"
import { PictureText } from "../../components/PictureText/PictureText"
import { PaginatedItems } from "./assets/Pagination/Pagination"
import { ShopListItem, ShopListItemPropsType } from "./assets/ShopListItem/ShopListItem"
import { stores } from "../../stores"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"

export const Shop = observer(() => {
    const storeItems = useObserver(() => stores.itemsStore)
    let { pageType, pageNumber } = useParams();
    
    useEffect(() => {
        storeItems.setType(pageType as unknown as ShopListItemPropsType)
    }, [])

    useEffect(() => {
        storeItems.setType(pageType as unknown as ShopListItemPropsType)
        storeItems.fetchPage((parseInt(pageNumber as string) - 1) * 5)
    }, [pageType])
    
    return (
        <div className="page-shop">
            <div className="page-shop_sidebar">
                <Link to="/shop/vegetable">
                    <PictureText
                        text="Vegetables"
                        image="/logo-shopping-item.svg"
                        fatAndDisabled={storeItems.type === ShopListItemPropsType.vegetable}
                    />
                </Link>
                <Link to="/shop/fruit">
                    <PictureText
                        text="Fruits"
                        image="/logo-shopping-item.svg"
                        fatAndDisabled={storeItems.type === ShopListItemPropsType.fruit}
                    />
                </Link>
                <Link to="/shop/cheese">
                    <PictureText
                        text="Cheese"
                        image="/logo-shopping-item.svg"
                        fatAndDisabled={storeItems.type === ShopListItemPropsType.cheese}
                    />
                </Link>
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