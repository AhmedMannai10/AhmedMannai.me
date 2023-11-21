import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { firestore, postToJson } from "../../lib/firebase";

const LIMIT = 6;

export default async (_, res) => {
    const postsQuery = query(
        collection(firestore, "blog-posts"),
        orderBy("createdAt", "desc"),
        where("published", "==", true),
        limit(LIMIT),
    );

    const posts = (await getDocs(postsQuery)).docs.map(postToJson);

    res.status(200).json(posts);
};
