import { portfolio } from "#/data/portfolio";

const siteUrl = portfolio.site.url;

export function absoluteUrl(path: string) {
    return new URL(path, siteUrl).href;
}

export function getPersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Raheem Kawojue",
        url: siteUrl,
        jobTitle: "Senior Backend & Web3 Engineer",
        description: portfolio.meta.description,
        email: "mailto:kawojue08@gmail.com",
        telephone: portfolio.phone.label,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "NG",
        },
        sameAs: [
            "https://github.com/kawojue",
            "https://www.linkedin.com/in/kawojue",
            "https://x.com/0xkawojue",
        ],
    };
}

export function getWebsiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: portfolio.site.name,
        url: siteUrl,
        description: portfolio.meta.description,
        inLanguage: "en",
    };
}

export function getRootHead() {
    const title = portfolio.meta.title;
    const description = portfolio.meta.description;
    const ogImage = absoluteUrl(portfolio.site.ogImage);

    return {
        meta: [
            { charSet: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1, viewport-fit=cover",
            },
            { title },
            { name: "description", content: description },
            { name: "author", content: "Raheem Kawojue" },
            { name: "keywords", content: portfolio.site.keywords },
            { name: "theme-color", content: "#101214" },
            { name: "color-scheme", content: "dark" },
            { name: "robots", content: "index, follow" },
            { property: "og:type", content: "website" },
            { property: "og:site_name", content: portfolio.site.name },
            { property: "og:locale", content: portfolio.site.locale },
            { property: "og:url", content: siteUrl },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: ogImage },
            { property: "og:image:type", content: "image/jpeg" },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: title },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: portfolio.site.twitter },
            { name: "twitter:creator", content: portfolio.site.twitter },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            { name: "twitter:image", content: ogImage },
            { name: "twitter:image:alt", content: title },
        ],
        links: [
            { rel: "canonical", href: siteUrl },
            { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
            {
                rel: "icon",
                href: "/favicon-32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                rel: "apple-touch-icon",
                href: "/apple-touch-icon.png",
                sizes: "180x180",
            },
            { rel: "manifest", href: "/manifest.json" },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous" as const,
            },
        ],
        scripts: [
            {
                type: "application/ld+json",
                children: JSON.stringify(getPersonJsonLd()),
            },
            {
                type: "application/ld+json",
                children: JSON.stringify(getWebsiteJsonLd()),
            },
        ],
    };
}
