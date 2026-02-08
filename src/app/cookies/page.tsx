import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Cookies", "Cookies", "/cookies");
}

export default function CookiesPage() {
    return (
        <Page title="Cookies">
            <p>Cookies</p>
        </Page>
    );
}