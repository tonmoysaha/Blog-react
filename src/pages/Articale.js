import React from 'react';
import {useParams} from "react-router-dom";
import articles from "./content";

const Article = () => {
    const {name} = useParams();
    const article = articles.find(value => value.name === name);
    if (!article) {
         return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-4xl text-red-950 font-bold mb-4">Content Not Found</h1>
                    <p className="text-gray-600">Sorry, the content you are looking for could not be found.</p>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
                <img src= {article.thumbnail} alt="Article Thumbnail" className="mb-4 rounded-lg w-full"/>

                    <p className="text-sm text-gray-500 mb-2">{name}</p>

                    <h1 className="text-3xl text-black font-bold mb-4">{article.title}</h1>

                    <div className="prose text-black">
                        <p>{article.content}</p>
                    </div>
            </div>
        </div>
);
}

export default Article