import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "course",
      title: "Course",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date Graduated",
      type: "date",
    }),
    defineField({
      name: "school",
      title: "School",
      type: "reference",
      to: [{ type: "company" }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "course",
      company: "school.name",
      media: "school.logo",
    },
    prepare(selection) {
      const { company } = selection;
      return { ...selection, subtitle: company };
    },
  },
});
