
import AdminDashboard from "../../components/AdminDashboard";
import AuthCheck from "../../components/AuthCheck";
import { useRouter } from "next/router";
import { useState } from "react";
import { collection } from "firebase/firestore";
import { firestore } from "../../lib/firebase";
import { kebabCase } from "lodash";
export default function AdminPage(){

    return (
        <main className="min-h-screen flex flex-col gap-10">
            <AuthCheck>

                <CreateNewPost/>  
                <AdminDashboard/>
            </AuthCheck>
        </main>
    );

}


function CreateNewPost() {
    const router = useRouter();
    const [title, setTitle] = useState("");

    // Ensure slug is Url safe
    const slug = encodeURI(kebabCase(title))

    // Validate length
    const isValid = title.length > 3 && title.length < 100;

    const createPost = async (e) => {
        e.preventDefault();
        const ref = doc(
            collection(firestore, "projects"),
            slug
        );

        console.log("sending");
        // TIP: give all fields a default value here
        const data = {
            title,
            slug,
            content: "# hello world!",
            createdAt: serverTimestamp(),
            updateAt: serverTimestamp(),
            
        };

        await setDoc(ref, data);
        toast.success("Post Created!");

        router.push(`/admin/${slug}`);
    };

    return (
        <form onSubmit={createPost}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My Awesome Article!"
                className="border-2 rounded-md "
            />
            <p>
                <strong>Slug:</strong>
                {slug}
            </p>
            <button
                type="submit"
                disabled={!isValid}
                className=" rounded-full bg-blue-700 text-white shadow-md hover:shadow-none px-2 mt-2"
            >
                Submit
            </button>
        </form>
    );
}
