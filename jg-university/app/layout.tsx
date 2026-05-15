import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JG University — Shaping Future Leaders",
  description:
    "JG University is a new-age, tech-driven university in Ahmedabad offering MBA, BBA, MCA, BCA, B.Tech, B.Com and more UGC-approved programmes.",
  keywords: "JG University, MBA Ahmedabad, BCA Gujarat, best university Gujarat",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
