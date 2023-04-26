import { defineField, defineType } from "sanity";
import { CodeIcon } from "@sanity/icons";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: CodeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "reference",
      to: { type: "category" },
    }),
  ],
});
