import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ragnhild Tronsmo",
  description: "Arvelinjer – debutalbum ute høsten 2026",

  openGraph: {
    images: ["/ragnhild_header_mobil4.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xwz7uqv.css" />
      </head>

      <body>{children}</body>
    </html>
  );
}
