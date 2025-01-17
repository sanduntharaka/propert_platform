import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import '@/styles/fonts/gellix/stylesheet.css';
import "./globals.css";
import { NavBar } from "@/components/navbar/NavBar";
import clsx from 'clsx';
import { Footer } from "@/components/footer/Footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Property platform l8d",
  description: "Website for property platform l8d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">

      <body className={clsx(roboto.className, "antialiased bg-white md:ml-8 md:mr-8 scroll-smooth")}>
        <NavBar />
        <div className="mt-20">
          {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
