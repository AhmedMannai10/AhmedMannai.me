import { signOut } from "firebase/auth";
import {
    collectionGroup,
    where,
    getDocs,
    limit, 
    orderBy,
    startAfter,
    query,
    collection,
} from "firebase/firestore"
import {firestore, postToJson} from "../../lib/firebase"

const LIMIT = 3

export default async (_, res) => {

    
        const postsQuery = query(
            collection(firestore, "projects"),
        orderBy("createdAt", "desc"),
        limit(LIMIT) 
        );

    const posts = (await getDocs(postsQuery)).docs.map(postToJson);
    console.log(posts)

    res.status(200).json(posts);
    



};
