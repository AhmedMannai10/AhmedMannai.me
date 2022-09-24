import React, { useState } from "react";
import PostTitle from "./PostTitle";
import Link from "next/link";

import { useAuth } from "../lib/adminAuth";

const AdminDashboard = () => {
    const { logout, currentUser } = useAuth();
    const [isBlog, setIsBlog] = useState(true);
    const [ isProjects, setIsProjects] = useState(!isBlog);

    const changeEditSection = () => {
        isBlog ? setIsBlog(false) : setIsBlog (true);
    }

    return (
        currentUser && (
            <div className="flex flex-col min-h-screen pt-4">
                <button
                    className=" fixed right-0 m-4 mt-0 bg-blue-700 p-1 px-2 rounded-md text-xl"
                    onClick={() => logout()}
                >
                    Logout
                </button>
                <div className="flex justify-center items-center text-xl  gap-5">
                    {isBlog ? (
                        <>
                            <button className="duration-300 border-b-blue-700 border-b-2">
                                Blog
                            </button>

                            <button className="duration-300 ">Projects</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => changeEditSection()} className="duration-300 ">Blog</button>
                            <button  className="duration-300 border-b-blue-700 border-b-2">
                                Projects
                            </button>
                        </>
                    )}
                </div>
            </div>
        )
    );
};

export default AdminDashboard;
