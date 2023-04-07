import { PictureText } from "../../components/PictureText/PictureText"
import { PaginatedItems } from "./assets/Pagination/Pagination"
import { ShopListItem } from "./assets/ShopListItem/ShopListItem"

export const Shop = () => {
    const { offset, Pagination } = PaginatedItems({ itemsPerPage: 5 })

    return (
        <div className="page-shop">
            <div className="page-shop_sidebar">
                <PictureText
                    text="Vegetables"
                    image=""
                    clickCallback={() => console.log("Vegetables clicked")} 
                />
                <PictureText
                    text="Fruits"
                    image=""
                    clickCallback={() => console.log("Fruits clicked")} 
                />
                <PictureText
                    text="Cheese"
                    image=""
                    clickCallback={() => console.log("Cheese clicked")} 
                />
            </div>
            <div className="page-shop_main">
                <div className="page-shop_main_list">
                    <ShopListItem 
                        title="Ananas Golden Large"
                        availability={5}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        price={5}
                        priceUnit="kg"
                    />
                    <ShopListItem 
                        title="Ananas Golden Large"
                        availability={0}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        price={5}
                        priceUnit="kg"
                    />
                    <ShopListItem 
                        title="Ananas Golden Large"
                        availability={5}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        price={5}
                        priceUnit="kg"
                    />
                    <ShopListItem 
                        title="Ananas Golden Large"
                        availability={5}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        price={5}
                        priceUnit="kg"
                    />
                    <ShopListItem 
                        title="Ananas Golden Large"
                        availability={5}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                        price={5}
                        priceUnit="kg"
                    />
                </div>
                <div className="page-shop_main_pagination">
                    {Pagination}
                </div>
            </div>
        </div>
    )
}