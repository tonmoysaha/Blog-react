import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Layout from "./header-router-layout";

const Header = () => {
    return (
        <div>
            {/*<nav className="bg-blue-500 p-4 text-white">*/}
            {/*    <BrowserRouter>*/}
            {/*        <Layout></Layout>*/}
            {/*        <div className="container mx-auto flex justify-between items-center">*/}
            {/*            <Routes>*/}
            {/*                <Route path="/" element={<Home/>} className="text-2xl font-bold"></Route>*/}
            {/*            </Routes>*/}
            {/*            <ul className="flex space-x-4">*/}
            {/*                <li>*/}
            {/*                    <Routes>*/}
            {/*                        <Route path="/home" element={<Home/>} className="hover:text-gray-300"></Route>*/}
            {/*                    </Routes>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Routes>*/}
            {/*                        <Route path="/contact" element={<Contact></Contact>}*/}
            {/*                               className="hover:text-gray-300"></Route>*/}
            {/*                    </Routes>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </BrowserRouter>*/}
            {/*</nav>*/}
        </div>
    );
}

export default Header