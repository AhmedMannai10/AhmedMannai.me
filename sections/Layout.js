import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className ="flex flex-col p-2">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
