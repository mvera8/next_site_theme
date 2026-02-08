import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Terms and Conditions", "Terms and Conditions", "/tc");
}

export default async function TermsAndConditionsPage() {
    return (
        <Page title="Terms and Conditions">
            <p>Terms and Conditions</p>
        </Page>
    );
}