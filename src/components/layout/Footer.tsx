import { withBasePath } from "@/lib/paths";
import { getSiteData } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "./Logo";

const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID;

const menuItems = [
    { label: "Terms & Conditions", href: "/tc" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Rights Request", href: "/california-privacy-request" },
    { label: "Do Not Sell Or Share My Personal Information", href: "/do-not-sell-my-information" },
    { label: "Cookie Choices", href: "/cookies" },
    { label: "Accessibility & Non-Discrimination Notice", href: "/accessibility-and-non-discrimination-notice" },
    { label: "Marketing Partners", href: "/marketing-partners" },
    { label: "E-SIGN", href: "/e-sign" },
];

export default async function Footer() {
    const data = await getSiteData();

    return (
        <footer id="refreshment-footer" className={`${styles.refreshmentFooter} py-5`}>
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-3">
                        <div className="pt-0 pt-md-4 pb-5 pb-md-0 d-flex justify-content-center justify-content-md-start">
                            <Logo variant="grey" />
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-1">
                        <nav className="navbar navbar-dark">
                            <ul className={`${styles.refreshmentFooterMenu} navbar-nav list-unstyled mb-0 pt-5 pt-md-3 pb-4 pb-md-5 w-100 d-block text-center text-md-start`}>
                                {menuItems.map((item) => (
                                    <li className="nav-item" key={item.label}>
                                        <Link className="nav-link" href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 text-center">
                        <div className={`${styles.refreshmentFooterCopyright} pt-5`}>
                            {data.site.name} © 2026. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}