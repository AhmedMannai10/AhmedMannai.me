import React, { useState } from "react";
import PostTitle from "./PostTitle";
import Link from "next/link";

import useSWR from "swr";
import fetcher from "../utils/fetcher";

import { useAuth } from "../lib/adminAuth";
import slugify from "../utils/slugify";
import { convertTimestamp, postToJson } from "../lib/firebase";



const AdminDashboard = (props) => {
    const { logout, currentUser } = useAuth();
    const [isBlog, setIsBlog] = useState(true);

    const changeEditSection = () => {
        isBlog ? setIsBlog(false) : setIsBlog(true);
    };

    const { data, error } = useSWR(
        isBlog ? "api/blog-posts" : "api/projects",
        fetcher
    );


    return (
        currentUser && (
            <>
 <button
                    className=" fixed right-0  m-4 mt-0 bg-blue-700 p-1 px-2 rounded-md text-xl text-white "
                    onClick={() => logout()}
                >
                    Logout
                </button>

                <div className="fixed right-24 m-4 mt-0 text-white">

                    {isBlog ? (
                        <>
                            <button
                                onClick={() => {
                                    setIsBlog(false);
                                }}
                                className=" bg-green-700 p-1 px-2 rounded-md text-xl duration-300 "
                            >
                                Go to Projects
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    setIsBlog(true);
                                }}
                                className="bg-green-700 p-1 px-2 rounded-md text-xl duration-300 "
                            >
                                Go To Blog
                            </button>
                        </>
                    )}
                </div>

    <div className="flex flex-col min-h-full pt-4 gap-10 md:px-20 px-5 ">
               
                <h1 className="font-bold text-2xl md:text-3xl mt-10">
                    {isBlog ? "My Blog Posts" : "My Projects"}
                </h1>
                <div className="bg-secondary dark:bg-dark_secondary">
                    <table className="table-auto w-full text-center  border-collapse border border-slate-500  ">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">
                                    Title
                                </th>
                                <th className="border border-slate-600">
                                    Description
                                </th>
                                <th className="border border-slate-600">
                                    Date Published
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.map((element) => {
                                    return (
                                        <tr key={element.id}>
                                            <td className="border border-slate-600">
                                                {element.title}
                                            </td>

                                            <td className="border border-slate-600">
                                                {element.description}
                                            </td>
                                            <td className="border border-slate-600">
                                                {
                                                    (new Date(element.createdAt)).toISOString()
                                                }
                                            </td>
                                            <td>
                                                <Link
                                                    href={
                                                        "admin" +
                                                        (isBlog
                                                            ? "/blog-posts/" + element.slug 
                                                            : "/projects/" + element.slug) 
                                                    }
                                                  >
                                                    <a>
                                                        <span className=" bg-green-500">
                                                            Edit
                                                        </span>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>

            </>
        )
    );
};

export default AdminDashboard;
