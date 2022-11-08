import React, {useState} from "react";
import styles from "./ProductCard.module.css";

import { productsType } from "./../../Pages/ProductsPage/ProductsPage";

type ProductCardPropsType = {
    data: productsType
}

const ProductCard = (props:ProductCardPropsType) => {

    const [wishList, setWishlist] = useState<boolean>(false)

    return(
        <div className={` my-3 mx-2`}>
            <div> 
                <div className={`${styles.image}`}>
                    <span className={`${styles.icon}`} onClick={()=>{setWishlist(!wishList)}}>
                        <i className="bi bi-heart" style={{color: wishList ? "red":"white"}}></i>
                    </span>
                    <img  src={props.data.product_image} alt={props.data.product_name}/>
                    <div className={`${styles.viewProductText} ms-sm-3`}>
                        View Product
                    </div>
                </div>
            </div>
            <div>
                <div className="text-start ms-sm-3">
                    {props.data.product_name}
                    <div><s>Rs.599</s> <b style={{color:"blue"}}>Rs.299</b></div>
                    <div>
                        <i className="bi bi-star" style={{color:"yellow"}}></i>
                        <i className="bi bi-star" style={{color:"yellow"}}></i>
                        <i className="bi bi-star" style={{color:"yellow"}}></i>
                        <i className="bi bi-star" style={{color:"yellow"}}></i>
                        (210)
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;