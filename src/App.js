import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./pages/header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import React from "react";
import AboutPage from "./pages/AboutPage";
import Articale from "./pages/Articale";

function App() {
    return (
        <div>
            <nav className="p-4 text-white">
                <Router>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home/*" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/articale/:name" element={<Articale/>}/>
                    </Routes>
                </Router>
            </nav>
        </div>
    );
}

export default App;
