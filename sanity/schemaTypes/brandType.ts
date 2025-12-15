import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const brandType = defineType({
  name: "brand",
  title: "Thương hiệu",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tên thương hiệu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Mô tả",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Hình ảnh thương hiệu",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
