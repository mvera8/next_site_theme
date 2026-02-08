import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("E-SIGN", "E-SIGN", "/e-sign");
}

export default function ESignPage() {
    return (
        <Page title="E-SIGN">
            <p>E-SIGN</p>
        </Page>
    );
}