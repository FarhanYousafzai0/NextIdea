import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference", // Fixed typo here
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1)
          .max(20)
          .required()
          .error("Please enter the category"), // Fixed semicolon + spelling
    }),
  ],
  preview: {
    select: {
      title: "title", // Should match your field name
    },
  },
});
