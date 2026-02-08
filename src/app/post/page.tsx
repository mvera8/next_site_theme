import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Post", "Post", "/post");
}

export default function PostPage() {
    return (
        <Page title="Post">
            <p>Post</p>
        </Page>
    );
}