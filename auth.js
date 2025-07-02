import { clerkClient } from "@clerk/nextjs/server";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";

export async function syncClerkUserToSanity(userId) {
  if (!userId) throw new Error("Missing Clerk user ID");

  // 1. Fetch user from Clerk
  const user = await clerkClient.users.getUser(userId);
  console.log("🔐 Clerk user:", user);

  // 2. Check if user already exists in Sanity
  const existingAuthor = await client
    .withConfig({ useCdn: false })
    .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: user.id });

  if (existingAuthor) {
    console.log("⚠️ Author already exists in Sanity:", existingAuthor);
    return existingAuthor;
  }

  // 3. Create new author in Sanity
  const newAuthor = await writeClient.create({
    _type: "author",
    id: user.id,
    name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
    username: user.username,
    email: user.emailAddresses?.[0]?.emailAddress || "",
    image: user.imageUrl,
    bio: "", // Clerk does not support bio by default
  });

  console.log("✅ New Sanity author created:", newAuthor);
  return newAuthor;
}
