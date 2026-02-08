import type { Metadata } from "next";
import ThankYouPage from "@/components/templates/ThankYouPage";
import Alert from "@/components/ui/Alert";
import CardTY from "@/components/ui/CardTY";
import { generatePageMetadata } from "@/lib/site";
import Vector from "@/plugins/vector/Vector";
import Link from "next/link";
import AdPostX from "@/components/ads/AdPostX";
import { ChevronRight } from "@/components/icons/ChevronRight";

const accessYourFreeGuide = [
    {
        title: "View Section 8 Guide Here",
        link: "https://opgguides.com/category/housing-assistance/?src=cdp&tg1=tg1&utm_source=tg2&utm_medium=tg3&utm_campaign=tg4&tg5=tg5&utm_content=tg6&tg7=tg7&tg8=tg8&tg9=tg9&utm_term=tg10"
    },
    {
        title: "View Rent to Own Guide Here",
        link: "https://opgguides.com/guides/your-free-guide-to-rent-to-own-homes/?src=cdp&tg1=tg1&utm_source={tg2}&utm_medium={tg3}&utm_campaign={tg4}&tg5={tg5}&utm_content={tg6}&tg7={tg7}&tg8={tg8}&tg9={tg9}&utm_term={tg10}"
    },
];

const helpfulArticles = [
    {
        title: "Ways to Make Money From Home",
        link: "https://search.fgasy.com/c/e3dA5DOgapDrMJxG?src=cdp&tg1=eb_makemoneyremote&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=education-buzz.com"
    },
    {
        title: "Social Security Disability: What you need to know",
        link: "https://search.fgasy.com/c/w5lkmNvQZM6nQVpJ?src=cdp&tg1=fv_ssdi&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=financial-verge.com"
    },
    {
        title: "Learn How Housing Assistance May Help You",
        link: "https://search.fgasy.com/c/52PYXDQXRRNmLl1j?src=cdp&tg1=hl101_housingass&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=housingliving101.com"
    },
    {
        title: "Education Grants that You May Not Have to Pay Back",
        link: "https://search.fgasy.com/c/YJ9zMDZRqzDwdoBv?src=cdp&tg1=eb_edugrantsqualify&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=education-buzz.com"
    },
    {
        title: "Discover How to Get Cheap Health Insurance",
        link: "https://search.fgasy.com/c/EXWzeD11bbDBq0kM?src=cdp&tg1=hf_healthinsuranceplan&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=healthy-first.org"
    },
];

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata(
        "Here Are Some More Things That Could Be Helpful For You!",
        "Here Are Some More Things That Could Be Helpful For You!",
        "/getting-your-guide"
    );
}

export default function GettingYourGuidePage() {
    return (
        <>
            <ThankYouPage>
                <Alert
                    icon={true}
                    title="Thank you!"
                    text={<>A copy of your guide has been sent to your Email. Please check <Link href="https://mail.google.com/mail/u/0/#search/guide" target="_blank" rel="noopener noreferrer">your inbox</Link> or Spam folder in case it ended up there by mistake.</>}
                    type="success"
                />

                <h1>Here Are Some More Things That Could Be Helpful For You!</h1>

                <p>Looking for an apartment can be time-consuming and frustrating. There are many different types of apartments out there, and they all have different facilities that you need to take into account apart from the basics of the structure and building. The pricing and the date that the apartment is available will also be different.</p>

                <div className="row my-5">
                    <CardTY
                        image="5"
                        title="EDU Grants Available up to $100K"
                        text="Grants for college are available if you qualify. 100% Free Info on financial aid for college."
                        link="https://education-buzz.com/best-education-grants/?src=cdp&tg1=eb_edugrantsqualify&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=education-buzz.com"
                    />
                    <CardTY
                        image="2"
                        title="Social Security Benefits up to $3K/mo."
                        text="Learn how to maximize your social security benefits. Discover how you may qualify."
                        link="https://financial-verge.com/understanding-ssdi-requirements/?src=cdp&tg1=fv_ssdi&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=financial-verge.com"
                    />
                    <CardTY
                        image="3"
                        title="Become Debt Free ASAP"
                        text="Take charge of your finances and discover life without debt. Find out how now."
                        link="https://financial-verge.com/how-to-pay-off-your-debt/?src=cdp&tg1=fv_debtreliefoptions&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=financial-verge.com"
                    />
                </div>

                <p>Moving into a new apartment is an exciting step, and if you know what to look for the process can become less stressful. Read the sections below and learn more about what to look for in an apartment and how to make your apartment search more efficient.</p>

                <h2>Set Your Budget</h2>

                <p>When you are deciding what the rent budget should be, you have to consider the expenses you will have every month like groceries, utilities, entertainment, gas and medical bills.</p>

                <div className="row my-5">
                    <CardTY
                        image="4"
                        title="Can't Pay Rent? Learn About Help."
                        text="If you meet the requirements, you may be able to get FREE help with housing. Learn more here."
                        link="https://housingliving101.com/financing-options-for-homebuyers/?src=cdp&tg1=hl101_housingass&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=housingliving101.com"
                    />
                    <CardTY
                        image="5"
                        title="Work Remotely - up to $20/hr"
                        text="Work from home jobs that pay! Learn about different options and where to find them."
                        link="https://education-buzz.com/how-to-make-money-remotely/?src=cdp&tg1=eb_makemoneyremote&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=education-buzz.com"
                    />
                    <CardTY
                        image="6"
                        title="Health Insurance Plans You Can Afford"
                        text="Learn about affordable health insurance plans. Learn how to find which companies offer the lowest rates."
                        link="https://healthy-first.org/cheaper-health-insurance/?src=cdp&tg1=hf_healthinsuranceplan&utm_source=&utm_medium=&utm_campaign=&tg=&utm_content=&tg7=&tg8=_ty&tg9=healthy-first.org"
                    />
                </div>

                <p>Subtract the expenses and a bit more from your income (after deducting taxes), so that you have a bit of wiggle room in case of emergency. Then you will have an approximate amount you can spend on rent every month.</p>

                <h2>Consider Your Must-Haves</h2>

                <p>Although you might not be able to get the perfect apartment, you should put together a list of everything an apartment should have and include the ones you can compromise and the ones you cannot. This way, you know exactly what you want.</p>

                <p>If you want to live somewhere specific, have two bedrooms and a pool, make sure you narrow your options. If you don’t find many options that meet your expectations, make sure you are flexible with some of your choices. Make adjustments but make sure you don’t settle for something that is not right for you or your family.</p>

                <h2>Visit Your Favorites</h2>

                <div className="row mb-5">
                    <div className="col-12 col-md-7 d-flex flex-column flex-grow-1 align-items-center">
                        <div className="card rounded-3 border-info shadow p-4 p-md-5 mb-5 mb-md-0 rounded h-100 flex-grow-1 row flex-column justify-content-center w-100">
                            <h3>Access Your Free Guide Now:</h3>
                            {accessYourFreeGuide.map((article, index) => (
                                <Link
                                    key={index}
                                    href={article.link}
                                    className="btn btn-warning btn-block pe-3 pe-md-4 mb-3 d-flex align-items-center justify-content-between appendTyParam"
                                    target="_blank"
                                >
                                    {article.title}
                                    <ChevronRight size={20} strokeWidth={2} className="text-dark" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="rounded-3 shadow p-5 rounded h-100 flex-grow-1">
                            <h3>Helpful Articles</h3>
                            <ul className="mb-0">
                                {helpfulArticles.map((article, index) => (
                                    <li key={index} className="mb-3">
                                        <Link
                                            href={article.link}
                                            className="appendTyParam text-info fs-5"
                                            target="_blank"
                                        >
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <p>If you search for an apartment online you can save time and effort looking through different options without having to move. Once you have a few favorites, schedule a visit to each one and take into account:</p>

                <ul className="mb-5">
                    <li><strong>Condition:</strong>&nbsp;Look for holes in the walls, mold in the bathroom and make sure that the apartment is up to your hygiene standards. Also, check the water pressure and make sure that the toilets, sinks, and showers all work. You should also check that the heating and air conditioning units work as well.</li>
                    <li><strong>Safety: </strong>Check that the&nbsp;doors and windows shut completely and lock and that the smoke and carbon monoxide detectors work. Discuss anything that might worry you about security with the landlord.</li>
                    <li><strong>Service:</strong>&nbsp;Make sure you have good cellphone reception, that you get service inside the apartment and if the internet is included, make sure the speed is good for your needs.</li>
                    <li><strong>Amenities:</strong>&nbsp;Check to see whether the&nbsp;laundry facilities are close by, the parking, if pets are allowed and any other amenities you want the apartment to have before signing the agreement.</li>
                </ul>

                <h2>Keep Track of Your Options</h2>

                <p>You need to stay organized throughout the apartment search process, so make sure you make a list of apartments you found online and that you would like to visit. After you visit each option, write about pricing, amenities and anything else that is important to you. After you are done visiting apartments, the details may be blurry, so by keeping notes you can narrow down your favorites and choose the one you like most.</p>

                <h2>Discounts and Negotiations</h2>

                <p>Also keep in mind that when you are looking at a specific apartment, it is always a good idea to talk to the landlord on any discounts he or she may have to offer. You might even get your first month rent-free, especially if your lease is longer.</p>

                <p>In fact, in general, the longer the lease, the bigger the discounts. Think about how long you are willing to lease that apartment and maybe you can take advantage of those discounts.</p>

                <h2>Go Over the Fine Print</h2>

                <p>Before signing a lease, make sure you know the terms of the lease, which options you have for ending a lease before time, how many rent payments you need to pay each month and any other cost that there could be. Read everything in the contract to make sure you understand and know everything there is to know. If you are not sure which apartment to rent, the final decision may come down to the cost and amenities each has.</p>

                <Alert
                    title="Tip box"
                    text="There are two main approaches that consumers take when getting free credit reports. You can request reports from all three bureaus at one time to see how the scores vary slightly (as they often do). Alternatively, you can spread out your requests throughout the year to track your credit increases or decreases every few months."
                    type="primary"
                />
            </ThankYouPage>
        </>
    );
}
