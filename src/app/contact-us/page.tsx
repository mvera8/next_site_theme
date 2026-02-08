import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Contact Us", "Contact Us", "/contact-us");
}

export default function ContactPage() {
    return (
        <Page title="Contact Us">
            <p>Contact Us</p>
        </Page>
    );
}