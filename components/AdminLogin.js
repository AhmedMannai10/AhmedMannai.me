import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
// firebase
import { useAuth } from "../lib/adminAuth";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const { login } = useAuth();

    async function submitHundler( ) {
        if (!email || !password) {
            setError("please enter your email and password");
            return ;
        }
        try {
            await login(email, password);
            router.push("admin")
        } catch (err) {
            setError("Incorrect email or password");
        }
        return ;
    }

    return (
        <div className="flex flex-col gap-10 items-center pt-5 min-h-screen">
            <h1 className="font-extrabold text-3xl md:text-4xl dark:text-slate-200 uppercase text-dark_primary">
                Admin Login
            </h1>

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email Address"
                className="outline-none duration-300
          w-full max-w-[30ch] text-gray-900 p-2 border-b-2 border-solid rounded-sm
          focus:border-orange-400 bg-slate-200 "
            ></input>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="outline-none duration-300 
         w-full max-w-[30ch] text-gray-900 p-2 border-b-2 border-solid rounded-sm 
         focus:border-orange-400 bg-slate-200 "
            ></input>

            <button
                onClick={submitHundler }
                className="w-full max-w-[30ch] cursor-pointer py-2
          outline outline-2 outline-orange-500 text-gray-400 hover:text-gray-50 
          uppercase  rounded-sm relative hover:-translate-y-1 duration-300
          hover:bg-orange-500 "
            >
                <h1 className=" font-bold">submit</h1>
            </button>

            {error && <div className="text-red-600 text-sm ">{error}</div>}
            
        </div>
    );
}
