import React from 'react';

import styles from "./SuggestionBox.module.css";
import { useNavigate, Link } from 'react-router-dom';

type suggestionBoxProps = {
    latestTrendingProducts:{
        product_id: string,
        product_name: string,
        product_image: string
    }[],
    onMouseLeave: () => void
}

const SuggestionBox = (props:suggestionBoxProps) => {

    

    //route navigate
    const Navigator = useNavigate();

    let  popularSuggestion:{id:number, name:string}[] = [
        {id:1, name:"Striped Shirt dress"},
        {id:2, name:"Satin Shirts"},
        {id:3, name:"Denim Jumpsuites"},
        {id:4, name:"Leather Dresses"},
        {id:5, name:"solid tshirts"},
    ]

    const navigate = () => {
        Navigator("/products");
    }


    return(
        <div onMouseLeave={props.onMouseLeave} className={styles.S_B_Container} >
            <div className="p-2">
            <h5 className="text-start ms-4 mt-2">Latest Trends</h5>
                <div className="d-md-flex justify-content-around">
                    {props.latestTrendingProducts.map((item)=>{
                        return <span key={item.product_id} className="mx-1">
                            <img className="img-fluid" src={item.product_image} alt={item.product_name}/>
                            <div><button onClick={navigate} className={`${styles.navBtn}`}>{item.product_name}</button></div>
                        </span>
                    })}
                </div>
              <div className="text-start d-block">
              <h5 className="text-start ms-4 mt-2 pt-2">Popular Trends</h5>
                <ul className={`${styles.list}`}>
                    {popularSuggestion.map((item:{id:number, name:string}) => {
                        return <li key={item.id}><Link to="/products">{item.name}</Link></li>
                    })}
                </ul>
              </div>
            </div>
        </div>
    )
};

export default SuggestionBox;