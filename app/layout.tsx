import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الشروق لمواد البناء | Alshorouk Company",
  description:
    "موقع شركة الشروق لمواد البناء لتصنيع وبيع الطوب والمنتجات الأسمنتية.",
  icons: {
    icon: "/images/logo-alshorouk.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
