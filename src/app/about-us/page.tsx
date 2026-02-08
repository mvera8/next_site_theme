import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { getSiteData, generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("About Us", "", "about-us");
}

export default async function AboutUsPage() {
    const data = await getSiteData();

    return (
        <Page title="About Us">
            <section className="mb-5">
                <p>Have you ever tried to submit an application to the government?</p>
                <p>
                    The process can seem complicated. It can involve lots of different
                    forms, documents, steps to complete and even different ways to submit
                    your request.
                </p>
                <p>
                    So if you&apos;re asking yourself, &quot;Can I get some help?&quot;
                    you&apos;re not alone.
                </p>
                <p>That&apos;s where we come in.</p>
            </section>

            <section className="mb-5">
                <h2>We are not the government.</h2>
                <p>
                    We&apos;re an independent private company with 0 bias and 1 goal – to
                    help you accomplish your tasks by providing you useful information.
                </p>
                <p>
                    This whole company started when one of our founders wished they had
                    gotten some help while trying to submit an application to the
                    government.
                </p>
                <p>Now we&apos;re here to help YOU achieve your goals with free information.</p>
            </section>

            <section className="mb-5">
                <h2>Our #1 Goal</h2>
                <p>
                    So many Americans across the country miss out on benefits they&apos;re
                    entitled to, either because they weren&apos;t aware that the benefits
                    existed or because they didn&apos;t know where to start.
                </p>
                <p>That&apos;s why we do what we do.</p>
                <p>
                    Our goal is to be your <strong>bridge to benefits</strong>.
                </p>
                <p>
                    We help people who want to apply for government benefits by giving
                    them the information to:
                </p>
                <ul>
                    <li>Understand the program&apos;s requirements.</li>
                    <li>Learn about the application process.</li>
                    <li>Seek to get the most out of their benefits.</li>
                </ul>
                <p>
                    We give you the information you need so that you can apply for the
                    benefits you deserve.
                </p>
            </section>

            <section className="mb-5">
                <h3>
                    <em>How does it work?</em>
                </h3>
                <ol>
                    <li>
                        <strong>We Research</strong>
                        <br />
                        Our team of writers has done a lot of research into the program. We
                        try to look at as much of the information available online as we
                        can. We&apos;ve also called local offices to ask the questions you want
                        answers to.
                    </li>
                    <li>
                        <strong>We Make It Easy</strong>
                        <br />
                        Our team then compiles that research into a free guide with
                        information and tips that are clear and easy to understand.
                    </li>
                </ol>
                <p>
                    We keep looking online and calling local offices, even if we already
                    looked or called a few months ago. We go through these steps on a
                    regular basis to give you as much helpful information as we can.
                </p>
            </section>

            <section className="mb-5">
                <h2>Section 8 Apartment Benefits Tips and Information – Clear &amp; Simple</h2>
                <p>
                    We know researching information online can be a hassle. That&apos;s why
                    we do the research and compile the information in a free guide
                    that&apos;s easy to understand.
                </p>
            </section>

            <section className="mb-5">
                <h2>Our Guide Is Free</h2>
                <p>
                    You won&apos;t have to pay money for any information that we give you on
                    our website. You won&apos;t even have to pay money for our guide that
                    provides Section 8 benefits tips and information.
                </p>
                <p>
                    Our website costs $0 for you to use because you&apos;re entitled to this
                    free information!
                </p>
                <p>
                    The way our website is financed is through ads and affiliate
                    marketing. Many of our users allow us to share some of their
                    information with our marketing partners so that our marketing partners
                    can send them offers related to their interests.
                </p>
            </section>

            <section className="mb-5">
                <h2>Protecting Your Privacy</h2>
                <p>
                    We believe in the importance of keeping your data safe. If you decide
                    to provide your data to us using our website, we use many different
                    protections to help keep it safe. To learn more about how we protect
                    your information, check out our{" "}
                    <a href={`https://${data.site.domain}/privacy/`}>Privacy Policy</a>{" "}
                    and{" "}
                    <a href={`https://${data.site.domain}/tc/`}>
                        Terms &amp; Conditions
                    </a>
                    .
                </p>
            </section>

            <section className="mb-5">
                <h2>We&apos;re Here to Help</h2>
                <p>We want you to get the help you need to apply for Section 8 assistance.</p>
                <p>
                    That&apos;s why we provide you the information in one place through our
                    free guide: to help you learn about the requirements and how to apply
                    in a way that is easy to understand.
                </p>
                <p className="fw-bold">THE SECTION 8 APARTMENTS HOUSING TEAM.</p>
            </section>
        </Page>
    );
}