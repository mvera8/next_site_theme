// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { getSiteData, getSitePages } from '@/lib/site';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteData = await getSiteData();
    const baseUrl = `https://${siteData.site.domain}`;

    // Import from app?
    const staticRoutes = [
        '',
        'about-us',
        'access-your-free-guide',
        'accessibility-and-non-discrimination-notice',
        'california-privacy-request',
        'contact-us',
        'cookies',
        'do-not-sell-my-information',
        'e-sign',
        'eligibility',
        'faqs',
        'getting-your-guide',
        'guides',
        'how-to-apply',
        'marketing-partners',
        'post',
        'posts',
        'privacy',
        'tc',
    ];

    const staticPages = staticRoutes.map(route => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const dynamicPagesConfig = await getSitePages();
    const dynamicPages = dynamicPagesConfig.map((page) => ({
        url: `${baseUrl}/${page.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: page.priority || 0.7,
    }));

    return [...staticPages, ...dynamicPages];
}