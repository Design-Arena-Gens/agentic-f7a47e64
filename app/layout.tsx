import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Myostatin-Free Gorilla",
  description:
    "Visual exploration of a shaved gorilla engineered with myostatin knockout physiology."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
