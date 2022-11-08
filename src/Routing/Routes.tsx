import { Routes, Route } from "react-router";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";

const BaseRoutes = () => {

    return(
        <>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/products" element={<ProductsPage/>} />
            </Routes>
        </>
    )
}

export default BaseRoutes;