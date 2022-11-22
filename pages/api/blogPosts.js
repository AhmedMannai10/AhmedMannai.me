import { db, postToJson } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async (_, res) => {
    //     const snapshot = await db.collection("blogPosts").get();

    const postsCollectionRef = collection(db, "blogPosts");
    const posts = await getDocs(postsCollectionRef);
    const blogPosts = posts.docs.map((doc) => ({ ...postToJson(doc), id: doc.id }));
    
    res.status(200).json(blogPosts);
};
