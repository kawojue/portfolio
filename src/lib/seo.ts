import { portfolio } from "#/data/portfolio";

const siteUrl = portfolio.site.url;

const fontsHref =
    "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap";

export function absoluteUrl(path: string) {
    return new URL(path, siteUrl).href;
}

export function getPersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Raheem Kawojue",
        alternateName: ["kawojue", "0xkawojue"],
        url: siteUrl,
        image: absoluteUrl(portfolio.site.ogImage),
        jobTitle: "CTO & Co-founder, Senior Software Engineer",
        description: portfolio.meta.description,
        email: "mailto:kawojue08@gmail.com",
        telephone: portfolio.phone.label,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "NG",
        },
        nationality: {
            "@type": "Country",
            name: "Nigeria",
        },
        knowsLanguage: ["en"],
        knowsAbout: [...portfolio.site.skills],
        worksFor: [
            {
                "@type": "Organization",
                name: "Waysdrop",
                url: "https://waysdrop.com",
            },
            {
                "@type": "Organization",
                name: "Terrakru",
                url: "https://terrakru.com",
            },
            {
                "@type": "Organization",
                name: "Opsettle",
            },
        ],
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
        "@id": `${siteUrl}/#website`,
        name: portfolio.site.name,
        alternateName: "kawojue.dev",
        url: siteUrl,
        description: portfolio.meta.description,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
    };
}

export function getProfilePageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: portfolio.meta.title,
        description: portfolio.meta.description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
        about: { "@id": `${siteUrl}/#person` },
        dateModified: `${portfolio.site.updated}T00:00:00+01:00`,
    };
}

export function getItemListJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Selected projects by Raheem Kawojue",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: portfolio.projects.length,
        itemListElement: portfolio.projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.name,
            url: `${siteUrl}/#${project.id}`,
            description: project.description,
        })),
    };
}

export function getIndexHead() {
    return {
        links: [{ rel: "canonical", href: siteUrl }],
    };
}

export function getResumeHead() {
    const title = `${portfolio.headline} - Resume`;
    const description = `Resume for ${portfolio.headline}: ${portfolio.title}. ${portfolio.valueProp}`;
    const url = absoluteUrl("/resume");

    return {
        meta: [
            { title },
            { name: "description", content: description },
            { property: "og:type", content: "profile" },
            { property: "og:url", content: url },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
        ],
        links: [{ rel: "canonical", href: url }],
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
            { name: "creator", content: "Raheem Kawojue" },
            { name: "publisher", content: "Raheem Kawojue" },
            { name: "keywords", content: portfolio.site.keywords },
            { name: "category", content: "technology" },
            { name: "theme-color", content: "#101214" },
            { name: "color-scheme", content: "dark" },
            {
                name: "robots",
                content:
                    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
            },
            {
                name: "googlebot",
                content:
                    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
            },
            { name: "bingbot", content: "index, follow" },
            { property: "og:type", content: "profile" },
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
            { property: "profile:first_name", content: "Raheem" },
            { property: "profile:last_name", content: "Kawojue" },
            { property: "profile:username", content: "kawojue" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: portfolio.site.twitter },
            { name: "twitter:creator", content: portfolio.site.twitter },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            { name: "twitter:image", content: ogImage },
            { name: "twitter:image:alt", content: title },
        ],
        links: [
            {
                rel: "describedby",
                href: absoluteUrl("/llms.txt"),
                type: "text/plain",
            },
            {
                rel: "sitemap",
                href: absoluteUrl("/sitemap.xml"),
                type: "application/xml",
            },
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
            { rel: "stylesheet", href: fontsHref },
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
            {
                type: "application/ld+json",
                children: JSON.stringify(getProfilePageJsonLd()),
            },
            {
                type: "application/ld+json",
                children: JSON.stringify(getItemListJsonLd()),
            },
        ],
    };
}
