import { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google";
import "./style.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const mymetadata = {
  title: "Nike Landing Page by Dika Rizki",
  description: "Nike Landing Page by Dika Rizki",
  url: "https://mylandingpage-git-master-dika-rizkis-projects.vercel.app/nikelandingpage",
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
  icons: {
    icon: "/portfolio/nikelandingpage/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${robotoCondensed.variable} ${roboto.variable} font-roboto-condensed`}
    >
      {children}
    </section>
  );
}
