import Link from "next/link";
import styles from "./DataCollectedBox.module.scss";

export default function DataCollectedBox() {
    return (
        <div className={`${styles.dataCollectedBox} disable-auto-ads text-light text-lg-white fs-6 p-4 p-lg-0 pb-5`} role="alert">
            <p className="mb-3 mb-lg-2"><b>Please Read:</b></p>
            <ul className="mb-3">
                <li><b>Data We Will Collect:</b> Contact information and answers to our optional survey.</li>
                <li><b>What You Will Get:</b> Free guide, and if you answer the optional survey, marketing offers from us and our partners.</li>
                <li><b>Use, Disclosure, Sale:</b> If you complete the optional survey, we will send your answers to our marketing partners.</li>
                <li><b>Who We Will Share Your Data With:</b> Our <Link href="/marketing-partners/" className="text-primary text-lg-warning" target="_blank" rel="noopener">Marketing Partners</Link>.</li>
                <div className="clearfix"></div>
            </ul>
            <p className="mb-0"><b>Note:</b> You may be contacted about Medicare plan options, including by one of our licensed partners. <b>We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact <Link href="https://www.medicare.gov/" className="text-primary text-lg-warning" target="_blank">Medicare.gov</Link> or 1-800-MEDICARE to get information on all of your options. See our <Link href="/accessibility-and-non-discrimination-notice/" className="text-primary text-lg-warning" target="_blank">Accessibility &amp; Non-Discrimination Notice.</Link></b></p>
        </div>
    )
}