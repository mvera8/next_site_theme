import Disclaimer from '../layout/Dislaimer';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import LatestArticles from '../layout/LatestArticles';

export default function ThankYouPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Disclaimer />
            <Header />
            <section className="section py-0 py-md-5">
                <div className="container container-sm">
                    {children}
                </div>
            </section>
            <LatestArticles />
            <Footer />
        </>
    );
}
