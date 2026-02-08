import CardPost from "../ui/CardPost";

const latestArticles = [
    {
        title: "Learn About Different Types of Public Housing Assistance & Subsidized Programs",
        text: "Beneficiaries of federal housing assistance can choose from different types of housing programs including public housing, privately owned subsidized housing, ...",
        link: "/types-of-housing-assistance"
    },
    {
        title: "Learn About Different Types of Public Housing Assistance & Subsidized Programs",
        text: "Beneficiaries of federal housing assistance can choose from different types of housing programs including public housing, privately owned subsidized housing, ...",
        link: "/types-of-housing-assistance"
    },
    {
        title: "Learn About Different Types of Public Housing Assistance & Subsidized Programs",
        text: "Beneficiaries of federal housing assistance can choose from different types of housing programs including public housing, privately owned subsidized housing, ...",
        link: "/types-of-housing-assistance"
    }
];

export default function LatestArticles() {
    return (
        <section id="latest-articles-section" className="post-slide-hide pb-5">
            <div className="container">
                <h2 className="mb-5">Latest Articles</h2>

                <div className="row mb-5">
                    {latestArticles.map((article, index) => (
                        <div
                            className="article-card col-12 col-sm-6 col-lg-4"
                            key={index}
                        >
                            <CardPost
                                image="1"
                                title={article.title}
                                text={article.text}
                                link={article.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}