import Link from "next/link";
import Disclaimer from "../layout/Dislaimer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import styles from "./RefreshmentLandingPage.module.scss";
import Button from "../ui/Button";
import Vector from "@/plugins/vector/Vector";
import Logo from "../layout/Logo";
import DataCollectedBox from "../layout/DataCollectedBox";
import RefreshmentIcons from "../icons/RefreshmentIcons";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import CheckList from "../layout/CheckList";
import { Plus } from "../icons/Plus";
import { Less } from "../icons/Less";
import Offers from "../layout/Offers";
import WantToLearnMore from "../ui/WantToLearnMore";

const accordionData = [
    {
        id: "person",
        title: "In Person",
        text: "Some programs allow you to apply in person. Application appointments may be required, so it’s best to contact your local office before visiting. Be sure to bring all necessary documents and information."
    },
    {
        id: "online",
        title: "Online",
        text: "Online applications are some of the most common ways to apply for government benefits and programs. To apply online, you may need to create an account on your state office’s website. You’ll also usually need to submit certain documents and information online. For more information, get our free guide!"
    },
    {
        id: "mail",
        title: "Mail",
        text: "You may be able to apply for some programs by mail. This usually means downloading a printable application form, filling it out, and sending it to the address provided on the application. Be sure to include any required documents or information. To learn more, check out our free guide!"
    },
    {
        id: "phone",
        title: "By Phone",
        text: "Some programs may allow you to apply by phone when you call the state office’s hotline. Depending on the program or the state, you may be able to provide necessary information to a representative over the phone. To learn more, get our free guide!"
    }
];

const applicatioData = [
    "Requirements can vary by state or applicant.",
    "Only those who qualify can participate.",
    "Application methods can vary; check the guide for more information.",
    "The program may change yearly - get our guide for more information.",
    "Benefits and options can vary by location."
];

export default function RefreshmentLandingPage({ children, title }: { children?: React.ReactNode, title: string }) {
    return (
        <>
            <div className="wrapper">
                <Disclaimer />

                <section id="refreshment-landing-hero" className="position-relative">
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block post-slide-hide" style={{ zIndex: 0 }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 737 795"
                            preserveAspectRatio="none"
                            className={`${styles.refreshmentHeroImage} h-100`}
                            style={{ display: 'block' }}
                        >
                            <defs>
                                <linearGradient id="linear-gradient" x1="296.6" y1="887.9" x2="420.3" y2="43.7" gradientTransform="translate(0 796) scale(1 -1)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#2c67ff"></stop>
                                    <stop offset="1" stopColor="#0016dd"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="url(#linear-gradient)" d="M0,0h736.9s-49.9,29.9-49.9,168.4,114.9,232-15.2,464.6C549.2,852.1-1,789.9-1,789.9L0,0Z"></path>
                        </svg>
                    </div>

                    <div className="position-relative pb-5 mb-0 mb-md-5" style={{ zIndex: 1 }}>
                        <div className={`${styles.refreshmentHeader} remove-background-color`}>
                            <Header logo="hide" />
                        </div>
                        <div className="container container-lg">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-6 order-2 order-lg-1 post-slide-hide">
                                    <div className="pt-0 pt-lg-4 pb-5 pb-md-4 mb-4 mb-md-0">
                                        <div className="d-none d-lg-block">
                                            <div className="mb-5 d-none d-md-block">
                                                <Logo variant="grey" />
                                            </div>
                                            {title &&
                                                <h1 className="mb-5 display-1 text-white">
                                                    <div className="text-uppercase text-secondary display-4">Learn how to</div>
                                                    {title}
                                                    <div className="text-capitalize text-secondary display-3">With our guide</div>
                                                </h1>
                                            }
                                        </div>
                                        <DataCollectedBox />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 order-1 order-lg-2">
                                    <Vector />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Offers />
            </div>

            <section
                id="refreshment-landing-accordion"
                className="section pb-0 pb-md-5 mb-5 post-slide-hide"
            >
                <div className="container">
                    <h2 className="mb-2 mb-md-4 text-center">
                        Common application methods
                    </h2>
                    <p className="text-center mb-5 lead text-light">
                        Different programs have different application methods. Here are some common ways to apply:
                    </p>

                    <div className="accordion row justify-content-center pt-4 mb-5" id="refreshmentAccordion">
                        {accordionData.map((item, index) => {
                            const collapseId = `collapse-${index}`;

                            return (
                                <div key={item.id} className="col-lg-3 pb-4">
                                    <div className="bg-primary rounded-3 p-4">
                                        <button
                                            className={`border-0 d-block w-100 collapsed px-0 py-3 bg-transparent ${styles.accordionButton}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${collapseId}`}
                                            aria-expanded="false"
                                            aria-controls={collapseId}
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <RefreshmentIcons icon={item.id} />

                                                <h3 className="flex-fill mb-0 text-start text-white">
                                                    {item.title}
                                                </h3>

                                                <Plus size={30} strokeWidth={2} className={`text-white ${styles.iconPlus}`} />
                                                <Less size={30} strokeWidth={2} className={`text-white ${styles.iconLess}`} />
                                            </div>
                                        </button>

                                        <div
                                            id={collapseId}
                                            className="collapse text-start"
                                            data-bs-parent="#refreshmentAccordion"
                                        >
                                            <div className="py-4">
                                                <p className="card-text text-white mb-4">{item.text}</p>

                                                <Link
                                                    href="#vector-refreshment"
                                                    className="text-decoration-none btn bg-white text-dark"
                                                >
                                                    More Information
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="refreshment-landing-application" className="pb-0 pb-md-5 post-slide-hide">
                <div className="container container-lg">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
                            <h2 className="mb-2 mb-md-4">Section 8 Application</h2>
                            <p className="mb-5 lead text-light">
                                Before applying, remember:
                            </p>
                            <CheckList data={applicatioData} />
                            <Link
                                href="#vector-refreshment"
                                className="text-decoration-none text-center text-md-start d-block"
                            >
                                <Button
                                    variant="gradient"
                                    size="lg"
                                    className="text-dark py-4 px-5"
                                >
                                    Go to the Guide
                                </Button>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 offset-lg-1 order-1 order-md-2 text-center">
                            <Image
                                className="img-fluid mb-5 mb-md-0"
                                loading="lazy"
                                src={withBasePath(`/refreshment/image_application.webp`)}
                                alt="Section 8 Application"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {children &&
                <section id="refreshment-landing-content" className="pt-5 post-slide-hide">
                    <div className="container container-lg">
                        {children}
                    </div>
                </section>
            }

            <section id="refreshment-section-more" className="post-slide-hide">
                <div className="w-100" style={{ lineHeight: 0 }}>
                    <svg
                        width="100%"
                        viewBox="0 0 1440 234"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'block' }}
                    >
                        <g clipPath="url(#clip0_512_6159)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.0778e-06 130.653L0 234.49L1440 234.491L1440 157.542C1217.88 240.484 941.105 269.03 639.315 129.438C431.774 33.4409 197.365 46.0787 9.0778e-06 130.653Z" fill="url(#paint0_linear_512_6159)"></path>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_512_6159" x1="720" y1="234.491" x2="720" y2="23.7523" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#010D83"></stop>
                                <stop offset="1" stopColor="#07159B"></stop>
                            </linearGradient>
                            <clipPath id="clip0_512_6159">
                                <rect width="1440" height="234" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className={`${styles.refreshmentSection} py-5`}>
                    <WantToLearnMore />
                </div>
            </section>
            <Footer />
        </>
    );
}