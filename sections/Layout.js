import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <html>
        <Header />

        <main className="flex flex-col gap-20 px-4 py-2 md:px-10 min-h-screen ">
          {children}
          <h1>hello there</h1>
        </main>
        <Footer />
      </html>
    </>
  );
};

export default Layout;
