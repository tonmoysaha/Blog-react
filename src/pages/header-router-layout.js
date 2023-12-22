import {Link} from "react-router-dom";
import React from "react";


const Layout = () => {
    return (

        <nav className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">

                <Link path="/" className="text-2xl font-bold">My Blog</Link>

                <ul className="flex space-x-4">
                    <li>

                        <Link path="/home" className="hover:text-gray-300">Home</Link>

                    </li>
                    <li>

                        <Link path="/contact"
                              className="hover:text-gray-300">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};


export default Layout