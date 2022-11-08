import React, {useState} from "react";
import styles from "./ProductsPage.module.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router";

import { faker } from '@faker-js/faker';

type Toggletypes = {
    brand: boolean,
    price: boolean,
    rating: boolean,
}

export type productsType = {
    product_id: string,
    product_name: string,
    product_image: string
}

type productsListType = productsType[];

export const products:productsListType = [];

export function createRandomProducts(): productsType {
    return {
        product_id: faker.datatype.uuid(),
        product_name: faker.commerce.product(),
        product_image: faker.image.people(180, 250),
    };
  }

  Array.from({ length: 10 }).forEach(() => {
    products.push(createRandomProducts());
  });

  



const ProductsPage = () => {

    const navigator = useNavigate();

    const [searchData, setSearchData] = useState<string>("");

    const [showAccordion, setShowccordion] = useState<Toggletypes>({brand:false, price: false, rating:false})

    const brandToggleHandler = () => setShowccordion((pre) => {return {...pre, brand:!showAccordion.brand}});

    const priceToggleHandler = () => setShowccordion((pre) => {return {...pre, price:!showAccordion.price}});

    const ratingToggleHandler = () => setShowccordion((pre) => {return {...pre, rating:!showAccordion.rating}});

    const searchFieldChangeHandler = (event:any) => {
        setSearchData(event.target.value);
    }

    const navigateBack = () => {
        navigator("/");
    }

    return(
        <div className={`${styles.productsContainer}`}>
            <div className={`${styles.productsHeader}`}>
                <input  className={`${styles.searchInput}`} onChange={searchFieldChangeHandler} placeholder="Search" type="text" />
                <span className={`${styles.iconSearch}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </span>
                <button onClick={()=>{navigateBack()}} className="float-start ms-4 mt-1 btn btn-primary">Back</button>
            </div>
            <div className={`${styles.sidePanel}`}>
                <h3>Search Results</h3>
                <div className={`mt-4`}>
                <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button  onClick={brandToggleHandler} className={`accordion-button  ${showAccordion.brand ? null : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Brand</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className={`accordion-collapse collapse  ${showAccordion.brand ? "show" : null}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Mango
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    H&M
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button onClick={priceToggleHandler} className={`accordion-button  ${showAccordion.price ? null : "collapsed"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Price Range</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className={`accordion-collapse collapse  ${showAccordion.price ? "show" : null}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Under 500
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    1000 To 5000
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button onClick={ratingToggleHandler} className={`accordion-button  ${showAccordion.rating ? null : "collapsed"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Rating</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className={`accordion-collapse collapse  ${showAccordion.rating ? "show" : null}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </label>
                          </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* products page content */}
            <div className={`${styles.pageBody}`}>
                <div className={`d-flex ${styles.prodBox}`}>
                    {products.filter((val:productsType) => {
                        if(searchData === "") {
                            return val
                        } else if (val.product_name.toLowerCase().includes(searchData.toLowerCase())) {
                            return val
                        } 
                    }).map((item, index) => {
                    return <ProductCard key={item.product_id} data={item} />})}
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;