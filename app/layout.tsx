import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dika Rizki - FrontEnd (Fullstack) Web Developer & 3D Visual Designer",
  description:
    "Dika Rizki is a FrontEnd (Fullstack) Web Developer with a creative edge in 3D visual design. Skilled in building modern web apps using Next.js, Tailwind CSS, Supabase, and Three.js, with strong experience in Blender-based 3D graphics.",
  openGraph: {
    title:
      "Dika Rizki - FrontEnd (Fullstack) Web Developer & 3D Visual Designer",
    description:
      "Explore a unique blend of FrontEnd (Fullstack) development and 3D creativity. From database-driven web apps to real-time 3D interfaces — all built with clean code and design precision.",
    url: "https://mylandingpage-git-master-dika-rizkis-projects.vercel.app/",
    siteName: "Dika Rizki Portfolio",
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
    title:
      "Dika Rizki - FrontEnd (Fullstack) Web Developer & 3D Visual Designer",
    description:
      "Discover web applications, UI/UX systems, and 3D-powered interactions — crafted with Next.js, Supabase, and Blender.",
    // images: ["https://yourdomain.com/twitter-thumbnail.jpg"],
  },
  metadataBase: new URL(
    "https://mylandingpage-git-master-dika-rizkis-projects.vercel.app/"
  ),
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
