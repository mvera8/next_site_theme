import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata(
        "Privacy Rights Request",
        "Privacy Rights Request",
        "/california-privacy-request"
    );
}

export default function PrivacyRightsRequestPage() {
    return (
        <Page title="Privacy Rights Request">
            <p>Privacy Rights Request</p>
        </Page>
    );
}