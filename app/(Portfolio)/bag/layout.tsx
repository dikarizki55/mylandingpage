import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.css";
import NavBar from "./components/Navbar";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mymetadata = {
  title: "Bag by Dika",
  description: "Bag by Dika",
  url: "https://mylandingpage-git-master-dika-rizkis-projects.vercel.app/bag",
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
    <section className={`${interFont.variable} p-5 lg:p-8`}>
      <NavBar />
      {children}
    </section>
  );
}
