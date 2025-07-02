import { syncClerkUserToSanity } from "@/auth";


export async function POST(req) {
  try {
    const body = await req.json();
    const { userId } = body;

    console.log("👉 Received userId:", userId);
    if (!userId) {
      return new Response("Missing user ID", { status: 400 });
    }

    const author = await syncClerkUserToSanity(userId);
    console.log("✅ Synced user:", author);

    return new Response(JSON.stringify(author), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Sync error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
