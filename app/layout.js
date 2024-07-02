import { AuthProvider } from "../lib/adminAuth";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    weight: ["300", "400", "500", "700"],
    template: "%s | Ahmed Mannai",
    default: "Ahmed Mannai", // a default is required when creating a template
    description:
      "Hello there, I, Ahmed Mannai, am software engineer join me for fun coding adventure",
    img: "https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07",
  },
  description:
    "I'm Ahmed Mannai, a software enthusiast on a coding adventure. Explore my latest projects, enjoy regular articles, and let's geek out over all things software together! Welcome aboard!",
  openGraph: {
    title: "Ahmed Mannai",
    description:
      "I'm Ahmed Mannai, a software enthusiast on a coding adventure. Explore my latest projects, enjoy regular articles, and let's geek out over all things software together! Welcome aboard!",
    url: "https://ahmedmannai.me",
    siteName: "Ahmed.Mannai",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07",
        width: 1800,
        height: 1600,
        alt: "Ahmed Mannai LOGO",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07",
        width: 800,
        height: 600,
        alt: "Ahmed Mannai Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth  ${inter.className} `}
      dark-theme="light"
    >
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="png" />
      </Head>

      <body className=" min-h-screen bg-background ">
        <AuthProvider>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENTID}`}
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENTID}');

                    `}
          </Script>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
