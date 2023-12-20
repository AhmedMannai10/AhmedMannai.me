import { AuthProvider } from "../lib/adminAuth";
import "./globals.css";
import styles from "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Providers } from "./Theme/Providers";
import { Ubuntu, Inter } from "next/font/google";
import myPic from "../assests/imgs/Ahmed_image_w.png";
import coverPic from "../assests/imgs/ahmedmannai_cover_img.jpeg";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    weight: ["300", "400", "500", "700"],
    template: "%s | Ahmed Mannai",
    default: "Ahmed Mannai", // a default is required when creating a template
    description:
      "Hello there, I, Ahmed Mannai, am software engineer join me for fun coding adventure",
    img: "https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07",
  },
  openGraph: {
    title: 'Ahmed Mannai',
    description: "Hello there, I, Ahmed Mannai, am software engineer join me for fun coding adventure",
    url: 'https://ahmedmannai.me',
    siteName: 'Ahmed.Mannai',
    images: [
      {

        url: "https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07",
        width: 1800,
        height: 1600,
        alt: "Ahmed Mannai LOGO"
      },
      {
        url: "https://ahmedmannai.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAhmed_image_w.7dbc8512.png&w=1920&q=75",
        width: 800,
        height: 600,
        alt: "Ahmed Mannai Picture"
      },

    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='scroll-smooth font-inter'
      dark-theme="light"

    >
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,500&display=swap'
          rel='stylesheet'
        />
        <link

          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes="png"
        />
      </Head>

      <body className="">
        <AuthProvider>
          <Script
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENTID}`}
          />

          <Script
            id='google-analytics'
            strategy='afterInteractive'
          >
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENTID}');

                    `}
          </Script>
          <Providers>
            <Header />
            <section className='flex flex-col gap-6 items-center mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 font-ubuntu'>
              {children}
              <Footer />
            </section>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
