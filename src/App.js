import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./pages/header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import React from "react";

function App() {
    return (
        <div>
            <nav className="bg-blue-500 p-4 text-white">
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/contact" element={<Contact/>}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </nav>
        </div>
    );
}

export default App;
