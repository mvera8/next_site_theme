import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Do Not Sell Or Share My Personal Information", "Do Not Sell Or Share My Personal Information", "/do-not-sell-my-information");
}

export default function DoNotSellOrShareMyPersonalInformationPage() {
    return (
        <Page title="Do Not Sell Or Share My Personal Information">
            <p>Do Not Sell Or Share My Personal Information</p>
        </Page>
    );
}