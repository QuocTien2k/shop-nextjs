import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Đơn hàng",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Mã đơn hàng",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // ===== HÓA ĐƠN (STRIPE) =====
    {
      name: "invoice",
      title: "Hóa đơn",
      type: "object",
      fields: [
        { name: "id", title: "Invoice ID", type: "string" },
        { name: "number", title: "Số hóa đơn", type: "string" },
        {
          name: "hosted_invoice_url",
          title: "Link hóa đơn",
          type: "url",
        },
      ],
    },

    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "ID người dùng",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // ===== THÔNG TIN KHÁCH HÀNG =====
    defineField({
      name: "customerName",
      title: "Tên khách hàng",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email khách hàng",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    // ===== THANH TOÁN =====
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // ===== SẢN PHẨM =====
    defineField({
      name: "products",
      title: "Sản phẩm đã mua",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Sản phẩm",
              type: "reference",
              to: [{ type: "product" }],
            }),
            defineField({
              name: "quantity",
              title: "Số lượng",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
            },
            prepare(select) {
              return {
                title: `${select.product} x ${select.quantity}`,
                subtitle: `Tổng: ${select.price * select.quantity}`,
                media: select.image,
              };
            },
          },
        }),
      ],
    }),

    // ===== GIÁ =====
    defineField({
      name: "totalPrice",
      title: "Tổng tiền",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Đơn vị tiền tệ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscount",
      title: "Giảm giá",
      type: "number",
      initialValue: 0,
    }),

    // ===== ĐỊA CHỈ GIAO HÀNG (VIỆT NAM) =====
    defineField({
      name: "address",
      title: "Địa chỉ giao hàng",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Người nhận",
          type: "string",
        }),
        defineField({
          name: "street",
          title: "Địa chỉ chi tiết",
          type: "string",
        }),
        defineField({
          name: "ward",
          title: "Phường / Xã",
          type: "string",
        }),
        defineField({
          name: "province",
          title: "Tỉnh / Thành phố",
          type: "string",
        }),
      ],
    }),

    // ===== TRẠNG THÁI ĐƠN HÀNG =====
    defineField({
      name: "status",
      title: "Trạng thái đơn hàng",
      type: "string",
      options: {
        list: [
          { title: "Chờ xác nhận", value: "pending" },
          { title: "Đang xử lý", value: "processing" },
          { title: "Đã thanh toán", value: "paid" },
          { title: "Đang giao hàng", value: "shipped" },
          { title: "Đang giao tới", value: "out_for_delivery" },
          { title: "Đã giao", value: "delivered" },
          { title: "Đã huỷ", value: "cancelled" },
        ],
      },
      initialValue: "pending",
    }),

    defineField({
      name: "orderDate",
      title: "Ngày đặt hàng",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email",
    },
    prepare(select) {
      const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
      return {
        title: `${select.name} (${orderIdSnippet})`,
        subtitle: `${select.amount} ${select.currency} • ${select.email}`,
        media: BasketIcon,
      };
    },
  },
});
