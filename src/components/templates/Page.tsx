import Disclaimer from "../layout/Dislaimer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function Page({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <>
            <Disclaimer />
            <Header />
            <section className="section py-0 py-md-5">
                <div className="container">
                    {title && <h1>{title}</h1>}
                    {children}
                </div>
            </section>
            <Footer />
        </>
    );
}