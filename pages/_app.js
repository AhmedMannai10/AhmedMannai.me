import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../sections/Layout";
import { AuthProvider } from "../lib/adminAuth";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <ThemeProvider attribute="class" enableSystem={true}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default MyApp;
