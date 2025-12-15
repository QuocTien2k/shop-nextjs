import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blogCategoryType = defineType({
  name: "blogcategory",
  title: "Danh mục blog",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tên danh mục",
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
  ],
});
