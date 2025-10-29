import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KSHITIJ 2026 - IIT Kharagpur",
  description: "IIT Kharagpur's Techno-Management Symposium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}