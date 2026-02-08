import Link from "next/link";
import Button from "../ui/Button";
import Disclaimer from "../layout/Dislaimer";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CheckList from "../layout/CheckList";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import RefreshmentIcons from "../icons/RefreshmentIcons";
import Offers from "../layout/Offers";
import WantToLearnMore from "../ui/WantToLearnMore";
import styles from "./RefreshmentHomePage.module.scss";
import CardPost from "../ui/CardPost";
import Affix from "../layout/Affix";
import PrimaryButton from "../layout/PrimaryButton";

const applicatioData = [
    "Use our <b>free guide</b> to learn more about the topic & gain insights quickly and clearly.",
    "We offer a free, <b>easy-to-understand guide</b> that dives into more information, independently compiled from various sources.",
    "We are a private company, not affiliated with any government agency. Our website is funded by ads and marketing partners, who may send offers to users who opt-in to share their information."
];

const bullets = [
    {
        "title": "10k Daily",
        "lead": "Readers of our guides",
        "icon": "more",
    },
    {
        "title": "$0",
        "lead": "Completely Free Guide",
        "icon": "zero",
    },
    {
        "title": "Clear",
        "lead": "Easy-to-read info",
        "icon": "clear",
    },
    {
        "title": "Personalized",
        "lead": "Connection to offers",
        "icon": "personalized",
    }
];

export default function RefreshmentHomePage({ title, domain, link }: { title: string, domain: string, link: string }) {
    return (
        <>
            <section id="refreshment-home-wrapper" className={`${styles.refreshmentHomePageHero} wrapper position-relative remove-background-image`}>
                <Disclaimer bg={false} />
                <Header />
                <div className="mb-1 mb-md-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-7 col-xl-6 order-2 order-lg-1">
                                <div className="pt-0 pt-md-5 pb-5 pb-md-4 mb-4 mb-md-0">
                                    <div className="text-center text-md-start pe-0 pe-xl-5">
                                        <h1 className="mb-5 display-1 text-black">
                                            <div className="text-uppercase text-primary display-4 mb-3">A free guide to</div>
                                            {title}
                                        </h1>
                                    </div>

                                    <CheckList data={applicatioData} />

                                    <div className="d-flex flex-column flex-md-row gap-3 align-items-center">
                                        <Link
                                            href="/about-us"
                                            className="text-decoration-none order-2 order-md-1 w-100">
                                            <Button
                                                className="text-primary d-block d-md-inline w-100 btn-lg px-0 mb-3 mb-md-0"
                                                variant="outline"
                                            >
                                                Learn More about us
                                            </Button>
                                        </Link>

                                        <PrimaryButton
                                            text="Get the Guide"
                                            link={link}
                                            linkClass="order-1 order-md-2 w-100"
                                            buttonClass="w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-6 order-1 order-lg-2 px-0 px-lg-5">
                                <div className="text-center pt-4">
                                    <Image
                                        className="img-fluid mb-5 mb-md-0 px-4 px-md-0"
                                        src={withBasePath(`/refreshment/image_home.webp`)}
                                        alt={title}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0 pt-md-5 pb-5 mb-4 mb-md-5 post-slide-hide">
                <div className="container">
                    <div className="rounded-3 px-5 py-4 bg-primary d-block d-md-flex flex-row justify-content-center">
                        {bullets.map((app, index) => (
                            <div key={index} className="w-100 py-4 mb-3 mb-md-0">
                                <div className="d-flex gap-4">
                                    <RefreshmentIcons icon={app.icon} />
                                    <div className="flex-fill align-self-center pl-4">
                                        <h3 className="mb-0 text-start text-white">
                                            {app.title}
                                        </h3>
                                        <p className="mb-0 text-white">
                                            {app.lead}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="gc-help-intro" className="section pt-0 pt-md-5 pb-5 mb-4 post-slide-hide">
                <div className="container py-0 py-md-4">
                    <div className="row">
                        <div className="col-12 col-md-6 text-center">
                            <Image
                                className="img-fluid mb-5 mb-md-0"
                                loading="lazy"
                                src={withBasePath(`/refreshment/image_answers.webp`)}
                                alt="Easy access to the answers you need"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            <h2 className="mb-5">Easy access to the answers you need</h2>
                            <div className="text-muted">
                                <p>Countless Americans across the country miss out on benefits they’re entitled to, either because they weren’t aware or because they didn’t know where to start. <b>That’s why we do what we do. You can browse our site for more information.</b></p>
                                <p>Here at {domain}, our goal is to be your bridge to information. We help those seeking to apply for assistance benefits by providing them with the information they need to: understand the requirements of the program, learn about the application process and seek to get the most out of their benefits.</p>
                            </div>
                            <div className="text-center text-md-start">
                                <PrimaryButton
                                    text="Get the Guide"
                                    link={link}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.refreshmentHomePageSection} section pt-5 pt-md-0`}>
                <div className="">
                    <Offers />
                    <WantToLearnMore />
                </div>
            </section>

            <section className="section position-relative pt-0 pt-md-5 pb-5 mb-4">
                <div className="container">

                    <div className="row align-items-center justify-content-center">

                        <div className="col-12 col-md-4">
                            <div className={`${styles.refreshmentHomePagePosts} min-vh-100`}></div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="lead mb-5 text-primary">Recommended Read</div>
                            <CardPost
                                truncate={false}
                                image={false}
                                title="Learn About Different Types of Public Housing Assistance & Subsidized Programs"
                                text="Information You Can Find in Our Guide: Our free guide will help you understand the steps you have to take and how to obtain the benefits you are looking for. Requirements How to Apply Waiting Lists Denials Important Information on Section 8 Housing VouchersThe Section 8 Housing program is run by the federal government and provides low-income, disabled and elderly individuals with private housing. Those deemed eligible for housing vouchers receive a federal subsidy that pays a private landlord. Section 8 does not require recipients of housing aid to reside ..."
                                link="/post"
                                readMore
                            />
                        </div>

                        <div className="col-12 col-md-4">
                            <CardPost
                                image={false}
                                title="Details About the Section 8 Wait List Lottery"
                                text="Information You Can Find in Our Guide: Our free guide will help you understand the steps you have to take and how to obtain the benefits you are looking for. Requirements How to Apply Waiting Lists Denials Important Information on Section 8 Housing VouchersThe Section 8 Housing program is run by the federal government and provides low-income, disabled and elderly individuals with private housing. Those deemed eligible for housing vouchers receive a federal subsidy that pays a private landlord. Section 8 does not require recipients of housing aid to reside ..."
                                link="/post"
                                readMore
                            />
                            <hr className="border-grey mt-0 mb-5" />
                            <CardPost
                                image={false}
                                title="Details About the Section 8 Wait List Lottery"
                                text="Information You Can Find in Our Guide: Our free guide will help you understand the steps you have to take and how to obtain the benefits you are looking for. Requirements How to Apply Waiting Lists Denials Important Information on Section 8 Housing VouchersThe Section 8 Housing program is run by the federal government and provides low-income, disabled and elderly individuals with private housing. Those deemed eligible for housing vouchers receive a federal subsidy that pays a private landlord. Section 8 does not require recipients of housing aid to reside ..."
                                link="/post"
                                readMore
                            />
                            <hr className="border-grey mt-0 mb-5" />
                            <CardPost
                                image={false}
                                title="Details About the Section 8 Wait List Lottery"
                                text="Information You Can Find in Our Guide: Our free guide will help you understand the steps you have to take and how to obtain the benefits you are looking for. Requirements How to Apply Waiting Lists Denials Important Information on Section 8 Housing VouchersThe Section 8 Housing program is run by the federal government and provides low-income, disabled and elderly individuals with private housing. Those deemed eligible for housing vouchers receive a federal subsidy that pays a private landlord. Section 8 does not require recipients of housing aid to reside ..."
                                link="/post"
                                readMore
                            />
                        </div>

                    </div>

                </div>
            </section>
            <Affix
                link={link}
            />
            <Footer />
        </>
    );
}