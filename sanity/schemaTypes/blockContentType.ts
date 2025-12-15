import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const blockContentType = defineType({
  title: "Nội dung",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Văn bản thường", value: "normal" },
        { title: "Tiêu đề 1", value: "h1" },
        { title: "Tiêu đề 2", value: "h2" },
        { title: "Tiêu đề 3", value: "h3" },
        { title: "Tiêu đề 4", value: "h4" },
        { title: "Trích dẫn", value: "blockquote" },
      ],
      lists: [{ title: "Danh sách chấm", value: "bullet" }],
      marks: {
        decorators: [
          { title: "In đậm", value: "strong" },
          { title: "In nghiêng", value: "em" },
        ],
        annotations: [
          {
            title: "Liên kết",
            name: "link",
            type: "object",
            fields: [
              {
                title: "Đường dẫn",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Văn bản thay thế (ALT)",
          description: "Mô tả hình ảnh để hỗ trợ SEO và accessibility",
        },
      ],
    }),
  ],
});
