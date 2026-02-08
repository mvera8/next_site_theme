import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Privacy Policy", "Privacy Policy", "/privacy");
}

export default async function PrivacyPolicyPage() {
    return (
        <Page title="Privacy Policy">
            <p>Privacy Policy</p>
        </Page>
    );
}