import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen mt-10">
            {/* Header */}
            <header className="bg-blue-700 text-white p-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold">CodeCraft</h1>
                    <p className="text-lg">Crafting Code, Building Dreams</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto my-8 p-8 bg-white text-black rounded shadow-lg">
                <h2 className="text-3xl font-bold mb-4">About CodeCraft</h2>
                <p className="mb-4">
                    CodeCraft is a software development blog dedicated to empowering developers with knowledge and insights
                    to enhance their coding skills. Whether you're a seasoned developer or just starting your coding journey,
                    we have content tailored to meet your needs.
                </p>
                <p className="mb-4">
                    At CodeCraft, we believe in the art of crafting clean, efficient, and elegant code. Our team of experienced
                    developers and tech enthusiasts share their expertise through tutorials, tips, and in-depth articles.
                </p>
                <p className="mb-4">
                    Explore our articles on a wide range of topics, including web development, mobile app development, algorithms,
                    and best coding practices. Stay updated with the latest trends and technologies in the ever-evolving world of software.
                </p>
                <p>
                    Join us on this coding journey, and let's build something amazing together!
                </p>
            </div>

            {/* Footer */}
            <footer className="bg-blue-700 text-white p-4 mt-8">
                <div className="container mx-auto">
                    <p>&copy; 2023 CodeCraft. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
