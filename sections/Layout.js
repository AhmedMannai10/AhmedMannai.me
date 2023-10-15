import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="flex flex-col gap-20 px-4 py-2 md:px-10 min-h-screen ">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
