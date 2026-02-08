import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Accessibility & Non-Discrimination Notice", "Accessibility & Non-Discrimination Notice", "/accessibility-and-non-discrimination-notice");
}

export default function AccessibilityAndNonDiscriminationNoticePage() {
    return (
        <Page title="Accessibility & Non-Discrimination Notice">
            <p>Accessibility & Non-Discrimination Notice</p>
        </Page>
    );
}