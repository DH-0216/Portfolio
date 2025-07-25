import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO and previews
export const metadata = {
  title: "Dulaj Hashmika | Portfolio",
  description:
    "Portfolio of Dulaj Hashmika - Full Stack Developer skilled in React, NEXT.js, Node.js, Java, and more.",
  keywords:
    "Dulaj Hashmika, full stack developer, web developer, React, Node.js, portfolio",
  authors: [{ name: "Dulaj Hashmika" }],
  metadataBase: new URL("https://dulajhashmika.vercel.app"),
  openGraph: {
    title: "Dulaj Hashmika | Full Stack Developer",
    description: "Portfolio and work of Dulaj Hashmika.",
    url: "https://dulajhashmika.vercel.app",
    type: "website",
    images: [
      {
        url: "https://dulajhashmika.vercel.app/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Dulaj Hashmika - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulaj Hashmika",
    description: "Portfolio of Dulaj Hashmika.",
    images: ["https://dulajhashmika.vercel.app/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="TtbO5yzgzIF9SChF8gDLUcO_llcDclrrTRo5p9sKCrc"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dulaj Hashmika",
              url: "https://dulajhashmika.vercel.app",
              image: "https://dulajhashmika.vercel.app/preview.png",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://www.linkedin.com/in/dulaj-hashmika/",
                "https://github.com/DH-0216",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
