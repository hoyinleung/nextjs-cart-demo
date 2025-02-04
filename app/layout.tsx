import type { Metadata } from "next";
import { Noto_Sans_HK } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartContextProvider from "@/context/CartContext";

const notoSansHK = Noto_Sans_HK({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-hk',
});

export const metadata: Metadata = {
  title: "NextJS Cart Demo",
  description: "Taught by Ho Yin Leung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansHK.className} antialiased bg-slate-50`}
      >
        <CartContextProvider>
          <nav className="py-5 px-4 container bg-slate-100">
            <Link href="/" className="text-xl font-bold">Pruduct List</Link>&nbsp; | &nbsp;
            <Link href="/checkout" className="text-xl font-bold">Checkout</Link>
          </nav>
          <main className="container bg-yellow-50">
            {children}
          </main>
        </CartContextProvider>
        <footer className="container text-center text-base bg-yellow-50">
        NextJS Cart Demo By <Link target="_blank" href={`https://www.leunghoyin.hk`}>梁浩賢</Link>
        </footer>
      </body>
    </html>
  );
}
