import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../sections/Layout";
import { AuthProvider } from "../lib/adminAuth";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
            
            <ThemeProvider attribute="class" enableSystem={true}>
                <Toaster />
                <Layout >
                <AuthProvider>

                <Script strategy="afterInteractive" 
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENTID}`}/>

                <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENTID}');
                    `}
                </Script>
                    <Component {...pageProps} />
                </AuthProvider>
                </Layout>


            </ThemeProvider>

    );
}

export default MyApp;
