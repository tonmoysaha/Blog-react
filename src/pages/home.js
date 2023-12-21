import React from "react";

const Home = () => {
    return (
        <div>
            <nav className="bg-blue-500 p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold">My Blog</a>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Post Title 1</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            nec odio. Praesent libero...</p>
                        <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Post Title 2</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            nec odio. Praesent libero...</p>
                        <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Post Title 3</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            nec odio. Praesent libero...</p>
                        <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home