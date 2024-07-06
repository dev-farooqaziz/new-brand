//===== Import Fonts =====
import { primary } from "./configs/fonts";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-secondary'
});
//===== Import Components =====
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL('https://www.bitswits.co/'),
  //===== Meta Tags =====
  title: "Top Mobile App Developmen Company - Brand",
  description: "Top Mobile App Developmen Company",
  //===== OG Tags =====
  openGraph: {
    title: "Top Mobile App Developmen Company - Brand",
    description: "Top Mobile App Developmen Company",
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
      <body className={`${primary.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
