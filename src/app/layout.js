//===== Import Fonts =====
import Header from "@/components/header/Header";
import { primary } from "./configs/fonts";
// import { Poppins } from "next/font/google";
// const poppins = Poppins({ subsets: ["latin"], display: 'swap', variable: '--font-secondary' });
//===== Import Components =====
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL('https://www.bitswits.co/'),
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: '/',
    siteName: '',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
  //===== GEO Tags =====
  other: {},
  //===== Google Varification =====
  verification: {
    other: {
      "": [''],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${primary.variable} ${poppins.variable}`}> */}
      <body className={`${primary.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
