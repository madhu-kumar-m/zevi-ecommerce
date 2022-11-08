import React, {useState } from "react";

import Search from "../../Components/Search/Search";
import SuggestionBox from "../../Components/SuggestionBox/SuggestionBox";

import { faker } from '@faker-js/faker';

import styles from "./LandingPage.module.css";

type latestTrendProductsType = {
    product_id: string,
    product_name: string,
    product_image: string
}
type latestTrendProductsListType = latestTrendProductsType[]


export const latestTrendProducts: latestTrendProductsListType = [];

export function createRandomProducts(): latestTrendProductsType {
    return {
        product_id: faker.datatype.uuid(),
        product_name: faker.commerce.product(),
        product_image: faker.image.people(180, 250),
    };
  }

  Array.from({ length: 4 }).forEach(() => {
    latestTrendProducts.push(createRandomProducts());
  });



const LandingPage = () => {

    const [showSuggestionBox, setShowSuggestionBox] = useState<boolean>(false)

    const onBlur = () => {
        setShowSuggestionBox(false);
    }

    const onFocus = () => {
        setShowSuggestionBox(true);
    }

    return(
        <div className={styles.bgImage}>
            <div className={`mx-auto ${styles.searchContainer}`}>
                <Search  onBlur={onBlur}  onFocus={onFocus} />
                {showSuggestionBox && <SuggestionBox latestTrendingProducts={latestTrendProducts}/>}
            </div>
           
        </div>
    )
}

export default LandingPage;
