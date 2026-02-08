import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Guides", "Guides", "/guides");
}

export default function GuidesPage() {
    return (
        <Page title="Guides">
            <p>Guides</p>
        </Page>
    );
}