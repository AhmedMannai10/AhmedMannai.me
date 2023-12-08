import "../styles/globals.css";
import Layout from "../sections/Layout";
import { AuthProvider } from "../lib/adminAuth";
import { Toaster } from "react-hot-toast";
import Head from 'next/head'
import Script from "next/script";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

export const metadata = {
    title: {
        template: "%s | Ahmed Mannai",
        default: "Ahmed Mannai", // a default is required when creating a template
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <Head>


                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,500&display=swap"
                    rel="stylesheet"
                />

               <link rel="icon" type="image/x-icon" href="/ahmedIcon.png" />
            </Head>
            <body>
                <AuthProvider>

                    <Script strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENTID}`} />

                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENTID}');
                    `}
                    </Script> 
                    <Header/>
                    
            {children}
              </AuthProvider>
            </body>
            <Footer/>
        </html>

    );
}