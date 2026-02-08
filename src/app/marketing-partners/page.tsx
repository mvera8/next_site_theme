import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Marketing Partners", "Marketing Partners", "/marketing-partners");
}

export default async function MarketingPartnersPage() {
    return (
        <Page title="Marketing Partners">
            <p>Marketing Partners</p>
        </Page>
    );
}   