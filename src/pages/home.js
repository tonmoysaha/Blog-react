import React from "react";
import ArticlesCommon from "./articals-common";
import articlesList from "./content";

const Home = () => {
    return (
        <div className="container flex items-center justify-center mt-8">
            <ArticlesCommon articals={articlesList}></ArticlesCommon>
        </div>
    );
}

export default Home
