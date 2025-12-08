import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "• Shop Công Nghệ •",
    template: "%s | Shop Công Nghệ",
  },
  description:
    "Shop Công Nghệ chuyên cung cấp tai nghe, điện thoại, laptop, máy ảnh và phụ kiện chính hãng với giá tốt nhất. Mua sắm dễ dàng, giao hàng nhanh chóng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
