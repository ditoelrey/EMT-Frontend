import React from 'react';
import AccomodationsPage from "./ui/pages/AccomodationsPage/AccomodationsPage.jsx";
import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import ProductDetails from "./ui/components/accomodations/ProductDetails/ProductDetails.jsx";
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage.jsx";
import HostsPage from "./ui/pages/HostsPage/HostsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="accommodations" element={<AccomodationsPage/>}/>
                    <Route path="countries" element={<CountriesPage/>}/>
                    <Route path="hosts" element={<HostsPage/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;