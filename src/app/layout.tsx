import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Property platform l8d",
  description: "Website for property platform l8d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative">
      <body className="antialiased bg-white md:ml-8 md:mr-8 scroll-smooth">
        {children}
      </body>
    </html>
  );
}
