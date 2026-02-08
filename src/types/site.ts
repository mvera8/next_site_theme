export type SiteData = {
    site: {
        id: string;
        domain: string;
        name: string;
        description: string;
    };
    theme: {
        type: string;
    };
    tools: {
        gtm: string;
        gtag: string;
    };
    compliance: {
        dba_name: string;
        dba_address: string;
        email_support: string;
    };
    hero: {
        title: string;
        link: string;
    };
};