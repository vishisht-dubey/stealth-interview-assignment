import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stealth Assignment",
  description: "Stealth Interview Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F0F0F5]">{children}</body>
    </html>
  );
}
