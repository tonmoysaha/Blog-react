import {Link} from "react-router-dom";
import React from "react";


const Header = () => {
    return (
        <div>
            <nav className="bg-blue-500 p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">

                    <Link to="/" className="text-2xl font-bold">Tech Bloggers</Link>

                    <ul className="flex space-x-4">
                        <li>

                            <Link to="/home" className="hover:text-gray-300">Home</Link>

                        </li>
                        <li>
                            <Link to="/contact"
                                  className="hover:text-gray-300">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about"
                                  className="hover:text-gray-300">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};


export default Header