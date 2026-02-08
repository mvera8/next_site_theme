import type { Metadata } from "next";
import Page from "@/components/templates/Page";
import { generatePageMetadata } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata("Posts", "Posts", "/posts");
}

export default async function PostsPage() {
    return (
        <Page title="Posts">
            <p>Posts</p>
        </Page>
    );
}