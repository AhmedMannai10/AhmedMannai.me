import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="flex flex-col gap-14 px-4 py-2">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
