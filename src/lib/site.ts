// src/lib/site.ts

import type { Metadata } from "next";
import type { SiteData } from "@/types/site";

const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID;

if (!SITE_ID) {
    throw new Error("NEXT_PUBLIC_SITE_ID is not defined");
}

const dataLoaders: Record<string, () => Promise<SiteData>> = {
    "section-8-apartments.org": () =>
        import("@/data/section-8-apartments.org/data.json"),
    "assistance-guides.com": () =>
        import("@/data/assistance-guides.com/data.json"),
};

export async function getSiteData(): Promise<SiteData> {
    const loader = dataLoaders[SITE_ID as string];

    if (!loader) {
        throw new Error(`No site data found for SITE_ID: ${SITE_ID}`);
    }

    return loader();
}

/**
 * Generate page metadata with site-specific information
 * @param title - Page title (will be appended with site name)
 * @param description - Optional page description
 * @returns Metadata object for Next.js
 */
export async function generatePageMetadata(
    title: string,
    description?: string,
    path?: string
): Promise<Metadata> {
    const data = await getSiteData();
    const base = `/data/${data.site.domain}`;

    return {
        title: `${title} | ${data.site.name}`,
        description: description || data.site.description,
        openGraph: {
            url: `${data.site.domain}/${path || ""}`,
            siteName: data.site.name,
            locale: "en_US",
            type: "website",
        },
        icons: {
            icon: [
                { url: `${base}/favicon.png`, type: "image/png" },
            ],
            apple: `${base}/apple-touch-icon.png`,
        },
    };
}