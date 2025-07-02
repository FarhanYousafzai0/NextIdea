"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SyncUser() {
  const { user } = useUser();

  useEffect(() => {
    if (user?.id) {
      fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id }),
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text();
            console.error("Failed to sync user to Sanity:", res.status, text);
          } else {
            // Optionally log success
            // const data = await res.json();
            // console.log("User synced to Sanity:", data);
          }
        })
        .catch((err) => {
          console.error("Network error syncing user to Sanity:", err);
        });
    }
  }, [user]);

  return null;
}
