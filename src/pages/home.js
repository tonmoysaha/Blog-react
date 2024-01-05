import React from "react";
import {Link} from "react-router-dom";
import articles from "./content";


const Home = () => {
    return (
        <div className="container mx-auto mt-8">
            {articles.map((value, index) => (
                <div className="bg-white p-6 shadow-md grid-rows-1" key={index}>
                    <div className="grid grid-flow-col auto-cols-max items-center">
                        <img
                            className="h-16 w-16 object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                            alt="Current profile photo"
                        />
                        <div className="text-black ml-4">
                            <p className="font-bold"> {value.title}</p>
                        </div>
                    </div>
                    <p className="text-gray-600 inline">{value.content[0].substring(0, 300)}....
                        <Link to={`/articale/${value.name}`}>
                            <p
                                className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"> Read
                                more
                            </p>
                        </Link></p>

                </div>
            ))}
        </div>
    );
}

export default Home