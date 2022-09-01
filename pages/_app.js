import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../sections/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class" enableSystem={true}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
