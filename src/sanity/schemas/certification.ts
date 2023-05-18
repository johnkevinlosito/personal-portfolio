import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export default defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "certificate",
      title: "Certificate",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
    }),
    defineField({
      name: "fromDate",
      title: "Valid from date",
      type: "date",
    }),
    defineField({
      name: "toDate",
      title: "Valid to Date",
      type: "date",
    }),
    defineField({
      name: "issuer",
      title: "Issuer",
      type: "reference",
      to: [{ type: "company" }],
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "image",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "certificate",
      company: "issuer.name",
      media: "badge",
    },
    prepare(selection) {
      const { company } = selection;
      return { ...selection, subtitle: company };
    },
  },
});
