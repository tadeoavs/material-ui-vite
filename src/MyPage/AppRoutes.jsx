import { Route, Routes } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import HomePage from "../Pages/HomePage";
import NotFound from "./NotFound";

import DashPage from "./dash/DashPage";
import DashDetails from "./dash/DashDetails"
import TradingPage from "./dash/TradingPage";
import RecetaDetalles from "../Pages/RecetaDetalles";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recetas" element={<HomePage/>}/>
            <Route path="/recetas/:id" element={<RecetaDetalles />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="/dash">
                <Route index element={<DashPage/>}/>

                <Route path=":id" element={<DashDetails/>}/>

                <Route path="trading" element={<TradingPage/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}