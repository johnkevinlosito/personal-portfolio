import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your project.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "overview",
      description:
        "Used both for the <meta> description tag for SEO, and project subheader.",
      title: "Overview",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      description:
        "This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skill" }],
        },
      ],
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "company" }],
    }),
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "post" }],
    }),
    defineField({
      name: "site",
      title: "Site",
      type: "url",
    }),
    defineField({
      name: "repo",
      title: "Repo",
      type: "url",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "blockContent",
    }),
  ],
});
