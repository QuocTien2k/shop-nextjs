import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const categoryType = defineType({
  name: "category",
  title: "Danh mục sản phẩm",
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
        maxLength: 98,
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
      name: "range",
      title: "Giá bắt đầu từ",
      type: "number",
      description: "Giá khởi điểm của sản phẩm trong danh mục (VNĐ)",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "featured",
      title: "Danh mục nổi bật",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Hình ảnh danh mục",
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
