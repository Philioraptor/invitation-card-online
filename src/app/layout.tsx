import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "आर्यमान एवं विनीता | शाही विवाह निमंत्रण",
  description:
    "आर्यमान एवं विनीता के शुभ विवाह का पावन अवसर। इस शाही डिजिटल विवाह निमंत्रण पर सपरिवार पधारकर अनुगृहित करें। रविवार, 19 अप्रैल 2026",
  keywords: ["विवाह", "निमंत्रण", "शादी", "आर्यमान", "विनीता", "wedding", "invitation"],
  openGraph: {
    title: "आर्यमान ❤ विनीता | शाही विवाह निमंत्रण",
    description: "आर्यमान एवं विनीता के शुभ विवाह का पावन अवसर। 19 अप्रैल 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
