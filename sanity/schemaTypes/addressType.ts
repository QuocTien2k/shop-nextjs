import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const addressType = defineType({
  name: "address",
  title: "Địa chỉ giao hàng",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Tên địa chỉ",
      type: "string",
      description: "Tên gợi nhớ (ví dụ: Nhà riêng, Công ty)",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "email",
      title: "Email người nhận",
      type: "email",
    }),
    defineField({
      name: "street",
      title: "Địa chỉ chi tiết",
      type: "string",
      description: "Số nhà, tên đường, tòa nhà, căn hộ...",
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: "ward",
      title: "Phường / Xã",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "province",
      title: "Tỉnh / Thành phố",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "postalCode",
      title: "Mã bưu chính",
      type: "string",
      description: "Mã bưu chính gồm 6 chữ số (ví dụ: 700000)",
      validation: (Rule) =>
        Rule.regex(/^\d{6}$/, {
          name: "postalCode",
          invert: false,
        }).error("Mã bưu chính phải gồm 6 chữ số"),
    }),
    defineField({
      name: "default",
      title: "Địa chỉ mặc định",
      type: "boolean",
      description: "Đặt làm địa chỉ giao hàng mặc định",
      initialValue: false,
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
      title: "name",
      street: "street",
      ward: "ward",
      province: "province",
      isDefault: "default",
    },
    prepare({ title, street, ward, province, isDefault }) {
      return {
        title: `${title} ${isDefault ? "(Mặc định)" : ""}`,
        subtitle: `${street}, ${ward}, ${province}`,
      };
    },
  },
});
