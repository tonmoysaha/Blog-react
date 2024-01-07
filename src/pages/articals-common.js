import React from "react";
import {Link} from "react-router-dom";
import {Img, Line, List, Text} from "../components";


const articles = ({articals}) => {
    return (
        <>
            <List children={
                articals.map((value, index) => (
                    <div className="bg-white p-6 shadow-md grid-rows-1" key={index}>
                        <div className="grid grid-flow-col auto-cols-max items-center">
                            <Img
                                className="h-16 w-16 object-cover rounded-full"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                                alt="Current profile photo"
                            />
                            <div className="text-black ml-4">
                                <Text className="text-xl"
                                      size="txtInterBold16"> {value.title}</Text>
                            </div>
                        </div>
                        <Text className="text-gray-600 inline">{value.content[0].substring(0, 300)}....
                            <Link to={`/articale/${value.name}`}>
                                <Text
                                    className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"> Read
                                    more
                                </Text>
                            </Link></Text>
                        <Line className="bg-lime-200 h-0.5 shadow-bs w-full"/>
                    </div>

                ))
            }
                  className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 ml-24 md:ml-[0] mt-10 md:px-5 w-[58%]"
                  orientation="horizontal"
            >
            </List>
        </>
    );
}

export default articles