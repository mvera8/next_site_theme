import Link from "next/link";
import { getSiteData } from "@/lib/site";
import { withBasePath } from "@/lib/paths";
import Image from "next/image";

const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID;

export default async function Logo({ variant }: { variant?: "dark" | "light" | "grey" }) {
    const data = await getSiteData();

    let src = withBasePath(`/data/${SITE_ID}/logo.svg`);

    if (variant === "grey") {
        src = withBasePath(`/data/${SITE_ID}/logo_grey.svg`);
    }

    return (
        <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
                src={src}
                alt={data.site.name}
                width={180}
                height={50}
                priority
                style={{
                    maxWidth: "120px",
                    maxHeight: "40px",
                }}
            />
        </Link>
    )
}