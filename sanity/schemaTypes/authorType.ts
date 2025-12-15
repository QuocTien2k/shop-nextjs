import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Tác giả",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Tên tác giả",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Ảnh đại diện",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Giới thiệu",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Văn bản thường", value: "normal" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
