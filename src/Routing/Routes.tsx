import { Routes, Route } from "react-router";
import LandingPage from "../Pages/LandingPage";

const BaseRoutes = () => {

    return(
        <>
            <Routes>
                <Route path="/" element={<LandingPage/>} />

            </Routes>
        </>
    )
}

export default BaseRoutes;