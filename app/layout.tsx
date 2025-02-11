import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_HK } from "next/font/google";
import Link from "next/link";
import CartContextProvider from "@/context/CartContext";
import { zhTW } from "@clerk/localizations";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import SignInDetector from "@/components/SignInDetector";

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
    <ClerkProvider localization={zhTW}>
      <html lang="zh">
        <body
          className={`${notoSansHK.className} antialiased bg-slate-50`}
        >
          <CartContextProvider>
            <nav className="py-5 px-7 container bg-slate-100 flex justify-between">
              <Link href="/" className="text-xl font-bold">產品列表</Link>
              <Link href="/checkout" className="text-xl font-bold">💲結帳</Link>
              <SignedOut>
                <Link href={`/sign-in`} className="text-xl font-bold">登入</Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
            <main className="container bg-yellow-50">
              {children}
            </main>
            <SignInDetector />
          </CartContextProvider>
          <footer className="container text-center text-base bg-yellow-50">
            NextJS Cart Demo By <Link target="_blank" href={`https://www.leunghoyin.hk`}>梁浩賢</Link>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
