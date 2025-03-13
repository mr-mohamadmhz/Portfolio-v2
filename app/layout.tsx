import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

const vazirFont = localFont({ src: "../public/font/Vazirmatn-Regular.woff2" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vazirFont.className}>{children}</body>
    </html>
  );
}
