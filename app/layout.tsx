import type { Metadata } from "next";
import { Noto_Sans_HK } from "next/font/google";
import "./globals.css";

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
        className={`${notoSansHK.className} antialiased`}
      >
        <main className="container bg-slate-50">
          {children}
        </main>
      </body>
    </html>
  );
}
