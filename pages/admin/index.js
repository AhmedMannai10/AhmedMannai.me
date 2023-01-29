
import AdminDashboard from "../../components/AdminDashboard";
import AuthCheck from "../../components/AuthCheck";
import { useRouter } from "next/router";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { firestore } from "../../lib/firebase";
import { kebabCase } from "lodash";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";



export default function AdminPage() {

    return (
        <main className="min-h-screen flex flex-col gap-2 mt-10 ">
            <AuthCheck>

                <CreateNewPost />
                <AdminDashboard />

            </AuthCheck>
        </main>
    );

}


function CreateNewPost() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [isProject, setIsProject] = useState(false);

    // Ensure slug is Url safe
    const slug = encodeURI(kebabCase(title))

    // Validate length
    const isValid = title.length > 3 && title.length < 100;
    let postType;

    if (isProject) {
        postType = "projects";
    } else {
        postType = "blog-posts"
    }

    const createPost = async (e) => {
        e.preventDefault();
        const ref = doc(
            firestore, postType, slug
        );

        console.log("sending");
        // TIP: give all fields a default value here
        const data = {
            title,
            slug,
            content: "# hello world!",
            published: false,
            description: "# Desc Project",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            img: "https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/mac.jpg?alt=media&token=4510df31-430d-44da-a990-a704075030bf",
        };

        await setDoc(ref, data);
        toast.success("Post Created!");


        router.push(`/admin/${postType}/${slug}`);
    };

    return (
        <div className="flex flex-col ">

            <form onSubmit={createPost} >
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
                <fieldset>
                    <input name="published" type="checkbox" onClick={() => { setIsProject(!isProject) }} />
                    <label>Article about a project</label>
                </fieldset>
                <button
                    type="submit"
                    disabled={!isValid}
                    className="rounded-full bg-blue-700 text-white shadow-md hover:shadow-none px-2 mt-2"
                >
                    Submit
                </button>

            </form>

        </div>
    );
}
