"use server";

import { writeClient } from "@/sanity/lib/write-client";
import { auth } from "@clerk/nextjs/server";

import slugify from "slugify";
import { parseServerActionResponse } from "./utils";

export const createStartup = async (prevState, formData, pitch) => {
  const { userId } = await auth();

  if (!userId) {
    return {
      status: "ERROR",
      error: "You must be logged in to create a startup",
    };
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(formData).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title, {
    lower: true,
    strict: true,
    locale: "en",
    trim: true,
  });

  try {
    const startup = {
      _type: "startup",
      title,
      description,
      category,
      image: link,
      slug: {
        _type: "slug", 
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: userId,
      },
      pitch,
    };

    const result = await writeClient.create(startup);

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Create startup error:", error);
    return parseServerActionResponse({
      status: "ERROR",
      error: "Something went wrong while creating the startup.",
    });
  }
};
