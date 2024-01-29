import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore, postToJson } from "../../../lib/firebase";

const LIMIT = 3;

export async function GET(request) {
  try {
    const postsQuery = query(
      collection(firestore, "projects"),
      orderBy("createdAt", "desc"),
      where("published", "==", true),
      limit(LIMIT)
    );
    const postsSnapshot = await getDocs(postsQuery);

    if (postsSnapshot.empty) {
      return new Response(JSON.stringify([]), {
        headers: { "Content-Type": "application/json" },
      });
    }
    const projects = postsSnapshot.docs.map(postToJson);
    return new Response(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}
