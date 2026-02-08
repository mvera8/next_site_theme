import Link from "next/link";
import styles from "./Disclaimer.module.scss";

export default function Disclaimer({ bg = true }: { bg?: boolean }) {
    return (
        <div id="top-disclaimer" className={`${styles.disclaimer} text-center post-slide-hide py-2 py-md-3 px-2 ${bg ? '' : 'bg-transparent'}`}>
            <b className="fs-7 fs-4">This site is privately owned and the information provided is free of charge. Learn more <Link href="/about-us" className="text-dark" target="_blank" rel="noopener">here</Link>.</b>
        </div>
    );
}