import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore, postToJson } from "../../../lib/firebase";

const LIMIT = 10;
export async function GET(request) {
  try {
    const postsQuery = query(
      collection(firestore, "blog-posts"),
      orderBy("createdAt", "desc"),
      where("published", "==", true),
      limit(LIMIT)
    );

    const postsSnapshot = await getDocs(postsQuery);

    if (postsSnapshot.empty) {
      // No blog posts found
      return new Response(JSON.stringify([]), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const posts = postsSnapshot.docs.map(postToJson);
    return new Response(JSON.stringify(posts), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}
