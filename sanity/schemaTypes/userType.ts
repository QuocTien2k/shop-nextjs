import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const userType = defineType({
  name: "user",
  title: "Người dùng",
  type: "document",
  icon: UserIcon,

  fields: [
    defineField({
      name: "username",
      title: "Tên người dùng",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(30),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: "password",
      title: "Mật khẩu (đã mã hoá)",
      type: "string",
      hidden: true, // ❗ không hiển thị trong Studio
    }),

    defineField({
      name: "role",
      title: "Vai trò",
      type: "string",
      options: {
        list: [
          { title: "Người dùng", value: "user" },
          { title: "Quản trị viên", value: "admin" },
        ],
      },
      initialValue: "user",
    }),

    defineField({
      name: "createdAt",
      title: "Ngày tạo",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "username",
      subtitle: "email",
    },
  },
});
