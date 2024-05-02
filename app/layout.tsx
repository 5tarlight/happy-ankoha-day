import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Ankoha Day!",
  description: "2024 Ankoha 생일카페",
  icons: {
    icon: "/img/logo.png",
  },
  openGraph: {
    images: {
      url: "https://cdn.jsdelivr.net/gh/5tarlight/vlog-image@main/happy-ankoha/cover.png",
      alt: "Happy AnKoha Day!",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no"
          name="viewport"
        />
        <link rel="icon" href={"/img/logo.png"} />
      </head>
      <body className={inter.className}>
        {/* <Background /> */}
        <Header />
        <main className="min-h-[100vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
