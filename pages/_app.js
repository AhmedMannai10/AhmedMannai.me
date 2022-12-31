import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../sections/Layout";
import { AuthProvider } from "../lib/adminAuth";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <ThemeProvider attribute="class" enableSystem={true}>
                <Toaster/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default MyApp;
