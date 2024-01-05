import React from "react";
import ArticlesCommon from "./articals-common";
import articlesList from "./content";

const Home = () => {
    return (
        <div className="container mx-auto mt-8">
            <ArticlesCommon articals={articlesList}></ArticlesCommon>
        </div>
    );
}

export default Home