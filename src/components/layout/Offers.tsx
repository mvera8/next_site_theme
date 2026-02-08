import CardRefreshment from "../ui/CardRefreshment";

export default function Offers() {
    const cardsData = [
        {
            icon: "processs",
            title: "Simplifying the Process",
            description: "Navigating programs or procedures can be challenging. Our free guide breaks down the process, making it easier to know how to access what you need."
        },
        {
            icon: "processs",
            title: "Independent and Private",
            description: "As an independent company, we make it easier to understand complex programs and processes with clear, concise information."
        },
        {
            icon: "processs",
            title: "Trusted Information Sources",
            description: "We take time to research information and use official program resources to answer your most pressing questions."
        },
        {
            icon: "processs",
            title: "Cost of Our Guide",
            description: "Our guide costs you nothing. It's completely free."
        }
    ];

    return (
        <section id="refreshment-landing-offers" className="pb-0 pb-md-5 mb-5 post-slide-hide">
            <div className="container container-lg">
                <h2 className="mb-5 text-center">What do we offer?</h2>
                <div className="d-noneAAAd-md-inline-block">
                    <div className="row refreshment-offers">
                        {cardsData.map((card, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">
                                <CardRefreshment
                                    icon={card.icon}
                                    title={card.title}
                                    description={card.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}