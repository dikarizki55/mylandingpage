import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./style.css";
import DiscountBar from "./components/DiscountBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const myFont = localFont({
  src: "../../../public/portfolio/fashion/font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "100 900", // rentang weight
  style: "normal",
});

const mymetadata = {
  title: "Fashion by Dika",
  description: "Fashion by Dika",
  url: "https://mylandingpage-git-master-dika-rizkis-projects.vercel.app/fashion",
};

export const metadata: Metadata = {
  title: mymetadata.title,
  description: mymetadata.description,
  openGraph: {
    title: mymetadata.title,
    description: mymetadata.description,
    url: mymetadata.url,
    siteName: mymetadata.title,
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-thumbnail.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Dika Rizki Portfolio Preview",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: mymetadata.title,
    description: mymetadata.description,
    // images: ["https://yourdomain.com/twitter-thumbnail.jpg"],
  },
  metadataBase: new URL(mymetadata.url),
  //   icons: [
  //     {
  //       url: "/portfolio/nikelandingpage/iconLight.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/portfolio/nikelandingpage/iconDark.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //   ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${montserratFont.variable} ${myFont.variable} font-satoshi`}
    >
      <DiscountBar />
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
