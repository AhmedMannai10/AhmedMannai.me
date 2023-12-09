import { AuthProvider } from "../lib/adminAuth";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Providers } from "./Theme/Providers";

export const metadata = {
  title: {
    template: "%s | Ahmed Mannai",
    default: "Ahmed Mannai", // a default is required when creating a template
    description:
      "Hello there, I, Ahmed Mannai, am software engineer join me for fun coding adventure",
    img: "https://ahmedmannai.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fahmed-mannai.appspot.com%2Fo%2Fuploads%252F1675363540779.jpeg%3Falt%3Dmedia%26token%3D56790d52-2d1b-42d4-a39a-99c89c661b07&w=1920&q=75",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='scroll-smooth '
      dark-theme="light"
    >
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
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
          rel='icon'
          type='image/x-icon'
          href='/ahmedIcon.png'
        />
      </Head>

      <body>
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
            <section className='flex flex-col gap-6 items-center mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
              {children}
              <Footer />
            </section>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
