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

// Built-in metadata (partial only, rest go in <Head>)
export const metadata = {
  title: "Dulaj Hashmika | Portfolio",
  description:
    "Portfolio of Dulaj Hashmika - Full Stack Developer skilled in React, Node.js, Java, and more.",
  keywords:
    "Dulaj Hashmika, full stack developer, web developer, React, Node.js, portfolio",
  authors: [{ name: "Dulaj Hashmika" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Dulaj Hashmika | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio and projects of Dulaj Hashmika."
        />
        <meta property="og:url" content="https://dulajhashmika.vercel.app/" />
        <meta
          property="og:image"
          content="https://dulajhashmika.vercel.app/preview.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta
          name="twitter:title"
          content="Dulaj Hashmika | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio and projects of Dulaj Hashmika."
        />
        <meta
          name="twitter:image"
          content="https://dulajhashmika.vercel.app/preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="TtbO5yzgzIF9SChF8gDLUcO_llcDclrrTRo5p9sKCrc"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dulaj Hashmika",
              url: "https://dulajhashmika.vercel.app",
              sameAs: [
                "https://github.com/DH-0216",
                "https://www.linkedin.com/in/dulaj-hashmika",
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
