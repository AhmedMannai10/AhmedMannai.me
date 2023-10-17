import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../sections/Layout";
import { AuthProvider } from "../lib/adminAuth";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
    return (
            <ThemeProvider attribute="class" enableSystem={true}>
                <Toaster />
                <Layout >
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
                </Layout>
            </ThemeProvider>
    );
}

export default MyApp;
