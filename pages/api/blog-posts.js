import {
    getDocs,
    limit,
    orderBy,
    query,
    collection,
    where,
} from "firebase/firestore"
import { firestore, postToJson } from "../../lib/firebase"

const LIMIT = 6 

export default async (_, res) => {

    /*
     * Middleware included to parse the incoming request `req`.
     * req.cookies
     * req.query
     * req.body
     */

    /*
     * Express-like helper functions for the response `res`.
     * res.status(200);
     * res.json({});
     * res.send('HTTP response');
     */


    const postsQuery = query(
        collection(firestore, "blog-posts"),
        orderBy("createdAt", "desc"),
        where("published", "==", true),
        limit(LIMIT),
    );

    const posts = (await getDocs(postsQuery)).docs.map(postToJson);
    


    res.status(200).json(posts);



};

