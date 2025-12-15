import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Bài viết",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
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
      name: "author",
      title: "Tác giả",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Ảnh đại diện",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "blogcategories",
      title: "Danh mục",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "blogcategory" },
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Ngày đăng",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isLatest",
      title: "Bài viết mới",
      type: "boolean",
      description: "Bật / tắt trạng thái bài viết mới nhất",
      initialValue: true,
    }),
    defineField({
      name: "body",
      title: "Nội dung",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      isLatest: "isLatest",
    },
    prepare(selection) {
      const { author, isLatest } = selection;
      return {
        ...selection,
        subtitle: author
          ? `${isLatest ? "Mới nhất | " : ""}Tác giả: ${author}`
          : "Chưa có tác giả",
      };
    },
  },
});
