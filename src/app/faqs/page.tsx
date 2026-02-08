import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("FAQs", "FAQs", "/faqs");
}

export default function FaqsPage() {
    return (
        <Page title="FAQs">
            <p>FAQs Us</p>
        </Page>
    );
}   