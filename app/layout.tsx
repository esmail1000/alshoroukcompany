import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "الشروق لمواد البناء | Alshorouk Company",
    template: "%s | الشروق لمواد البناء"
  },
  description:
    "شركة الشروق لمواد البناء متخصصة في تصنيع وتوريد الطوب الأحمر، الطوب الأسمنتي، البلوك، الإنترلوك، والبردورات للمشروعات داخل مصر.",
  applicationName: "Alshorouk Company",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: siteConfig.englishName }],
  creator: siteConfig.englishName,
  publisher: siteConfig.englishName,
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo
  },
  openGraph: {
    title: "الشروق لمواد البناء | Alshorouk Company",
    description:
      "تصنيع وتوريد الطوب الأحمر، الطوب الأسمنتي، البلوك، الإنترلوك، والبردورات للمشروعات داخل مصر.",
    url: getSiteUrl(),
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "الشروق لمواد البناء | Alshorouk Company",
    description:
      "تصنيع وتوريد الطوب الأحمر، الطوب الأسمنتي، البلوك، الإنترلوك، والبردورات للمشروعات داخل مصر.",
    images: [absoluteUrl(siteConfig.ogImage)]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
