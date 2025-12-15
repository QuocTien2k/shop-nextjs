import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Sản phẩm",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Tên sản phẩm",
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
      name: "images",
      title: "Hình ảnh sản phẩm",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "description",
      title: "Mô tả ngắn",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Giá bán",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Giảm giá",
      type: "number",
      description: "Số tiền giảm (VNĐ)",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "categories",
      title: "Danh mục",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "stock",
      title: "Tồn kho",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "brand",
      title: "Thương hiệu",
      type: "reference",
      to: { type: "brand" },
    }),
    defineField({
      name: "status",
      title: "Trạng thái sản phẩm",
      type: "string",
      options: {
        list: [
          { title: "Mới", value: "new" },
          { title: "Bán chạy", value: "hot" },
          { title: "Đang giảm giá", value: "sale" },
        ],
      },
    }),
    defineField({
      name: "variant",
      title: "Loại sản phẩm",
      type: "string",
      options: {
        list: [
          { title: "Thiết bị công nghệ", value: "gadget" },
          { title: "Thiết bị gia dụng", value: "appliances" },
          { title: "Tủ lạnh", value: "refrigerators" },
          { title: "Khác", value: "others" },
        ],
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Sản phẩm nổi bật",
      type: "boolean",
      description: "Bật / tắt hiển thị sản phẩm nổi bật",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "images",
      subtitle: "price",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const image = media && media[0];
      return {
        title,
        subtitle: `${subtitle.toLocaleString("vi-VN")} ₫`,
        media: image,
      };
    },
  },
});
