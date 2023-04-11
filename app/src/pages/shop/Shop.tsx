import { observer, useObserver } from "mobx-react"
import { PictureText } from "../../components/PictureText/PictureText"
import { PaginatedItems } from "./assets/Pagination/Pagination"
import { ShopListItem } from "./assets/ShopListItem/ShopListItem"
import { stores } from "../../stores"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import { ShopListItemPropsType } from "../../stores/ItemsStore"

export const Shop = observer(() => {
    const storeItems = useObserver(() => stores.itemsStore)
    let { pageType, pageNumber } = useParams();

    useEffect(() => {
        storeItems.setType(pageType as unknown as ShopListItemPropsType, Number(pageNumber) - 1 || 0)
    }, [pageType])
    
    if (storeItems.hasError) {
        return <>Error during an api connection. Please check that your backend server is running and env variables are set correctly. As soon as it's working, please refresh the page</>
    }
    
    if (storeItems.isLoading && storeItems.shownItems.length === 0) {
        return <>Loading...</>
    }

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
                <div className={`page-shop_main_list ${storeItems.isLoading && "loading"}`}>
                    {storeItems.shownItems.map(item => <ShopListItem {...item} key={item._id} />)}
                </div>
            </div>
        </div>
    )
})