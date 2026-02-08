import Link from "next/link";
import ProgressBar from "./ProgressBar";
import Logo from "./Logo";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "How to Apply", href: "/how-to-apply" },
    { label: "About Us", href: "/about-us" },
    { label: "Posts", href: "/posts" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact-us" },
];

export default function Header({ logo = "show" }: { logo?: "show" | "hide" }) {
    return (
        <>
            <header className="remove-background-color text-nowrap position-relative">
                <nav className="navbar navbar-expand-md mb-0 text-nowrap py-2 py-md-4">
                    <div className="container">
                        <div className={`py-2 post-slide-show post-slide-change ${logo === "hide" ? "d-block d-md-none" : ""}`}>
                            <Logo />
                        </div>

                        <ProgressBar />

                        <button
                            className="navbar-toggler border-0 post-slide-hide"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNavbar"
                            aria-controls="mainNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse post-slide-hide" id="mainNavbar">
                            <ul className={`navbar-nav mb-2 mb-lg-0 text-center text-md-left gap-md-5 ${logo === "hide" ? "navbar-dark" : "ms-auto navbar-light"}`}>
                                {menuItems.map((item) => (
                                    <li className="nav-item" key={item.label}>
                                        <Link className="nav-link py-4 py-md-3 px-0 border-bottom border-mobile border-light-subtle" href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}