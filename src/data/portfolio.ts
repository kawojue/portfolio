export type ProjectStatus = "production" | "maintained" | "wip";

export type DiffLine = {
    type: "add" | "rem";
    text: string;
};

export type Project = {
    id: string;
    fileName: string;
    name: string;
    status: ProjectStatus;
    statusLabel: string;
    description: string;
    role: string;
    stack: string;
    diff?: DiffLine[];
};

export type NavItem = {
    id: string;
    label: string;
    href: string;
    kind: "file" | "dir";
    indent?: boolean;
};

export type SocialLink = {
    label: string;
    href: string;
};

export const portfolio = {
    meta: {
        title: "Raheem Kawojue, Senior Backend & Web3 Engineer",
        description:
            "Product-driven backend engineer shipping high-performance systems end-to-end. Head of Engineering at Waysdrop, Co-Founder at Opsettle.",
    },
    handle: "kawojue",
    headline: "Raheem Kawojue, software engineer",
    lede: {
        before: "Product-driven backend engineer with a track record of shipping complex, high-performance systems end-to-end, from zero to production. Deep expertise in TypeScript/NestJS, distributed systems, real-time architecture, and financial infrastructure (wallets, escrow, payment rails). Also builds EVM smart contracts.",
        highlight: "Head of Engineering @ Waysdrop · Co-Founder @ Opsettle",
        after: "Previously CTO at FixOrFlex, co-founded Videswap, and integrated Paystack, Flutterwave, and Stripe across production platforms.",
    },
    tags: [
        "TypeScript · NestJS",
        "PostgreSQL @ scale",
        "Solidity · EVM",
        "BullMQ · real-time",
        "Paystack · Stripe",
        "AWS · Docker",
        "EIP-712 · ERC-4337",
        "Prometheus · Sentry",
    ],
    location: "Lagos, Nigeria · Open to remote",
    phone: {
        label: "+234 813 191 1964",
        href: "tel:+2348131911964",
    },
    contact: {
        heading: "Let's talk",
        body: "Open to senior backend, distributed systems, and Web3 engineering roles, remote-first.",
        email: "kawojue08@gmail.com",
        links: [
            { label: "mail", href: "mailto:kawojue08@gmail.com" },
            { label: "github", href: "https://github.com/kawojue" },
            { label: "linkedin", href: "https://www.linkedin.com/in/kawojue" },
            { label: "x", href: "https://x.com/0xkawojue" },
        ] satisfies SocialLink[],
    },
    sidebarLinks: [
        { label: "github.com/kawojue", href: "https://github.com/kawojue" },
        {
            label: "linkedin.com/in/kawojue",
            href: "https://www.linkedin.com/in/kawojue",
        },
        { label: "x.com/0xkawojue", href: "https://x.com/0xkawojue" },
        {
            label: "kawojue08@gmail.com",
            href: "mailto:kawojue08@gmail.com",
        },
    ] satisfies SocialLink[],
    nav: [
        { id: "about", label: "about.md", href: "#about", kind: "file" },
        {
            id: "projects",
            label: "projects/",
            href: "#waysdrop",
            kind: "dir",
        },
        {
            id: "waysdrop",
            label: "waysdrop.md",
            href: "#waysdrop",
            kind: "file",
            indent: true,
        },
        {
            id: "opsettle",
            label: "opsettle.md",
            href: "#opsettle",
            kind: "file",
            indent: true,
        },
        {
            id: "fixorflex",
            label: "fixorflex.md",
            href: "#fixorflex",
            kind: "file",
            indent: true,
        },
        {
            id: "videswap",
            label: "videswap.md",
            href: "#videswap",
            kind: "file",
            indent: true,
        },
        { id: "contact", label: "contact.md", href: "#contact", kind: "file" },
    ] satisfies NavItem[],
    projects: [
        {
            id: "waysdrop",
            fileName: "waysdrop.md",
            name: "Waysdrop",
            status: "production",
            statusLabel: "● in production",
            description:
                "Large-scale logistics and commerce platform (users, couriers, stores, admin, agents). Led backend from early MVP to production: AI support chat (Claude/Qwen, 80+ tools, WhatsApp/Telegram), H3 geospatial courier matching, multi-rail wallet infrastructure (Paystack, Flutterwave, Stripe, DVA, escrow), and 15+ Bull queues for delivery, payments, KYC, and webhooks.",
            role: "head of engineering",
            stack: "nestjs · postgres · redis · bullmq",
            diff: [
                {
                    type: "rem",
                    text: "- primary Postgres handling reads, writes, and high-volume audit logs",
                },
                {
                    type: "add",
                    text: "+ read-replica routing + Prometheus/Sentry slow-query tracing",
                },
                {
                    type: "add",
                    text: "+ Redis circuit breaker on hot paths, no instance upgrade needed",
                },
            ],
        },
        {
            id: "opsettle",
            fileName: "opsettle.md",
            name: "Opsettle",
            status: "production",
            statusLabel: "● in production",
            description:
                "Full payment infrastructure protocol spanning smart contracts, NestJS backend, and DevOps. Co-founded and built from zero: programmable payments, escrow, subscriptions, split payments, cross-chain swaps, virtual wallets, EIP-712 signatures, ERC-4337 account abstraction, WebSocket subsystem, and webhook management with retry/replay.",
            role: "co-founder · lead eng",
            stack: "solidity · hardhat · nestjs · postgres",
            diff: [
                {
                    type: "add",
                    text: "+ TokenRegistry, PaymentSettlement, Escrow, SubscriptionManager",
                },
                {
                    type: "add",
                    text: "+ EIP-712 typed signatures + ERC-4337 account abstraction",
                },
                {
                    type: "add",
                    text: "+ SwapRouter with UniswapV3 / Stargate adapters + NestJS modules",
                },
            ],
        },
        {
            id: "fixorflex",
            fileName: "fixorflex.md",
            name: "FixOrFlex",
            status: "production",
            statusLabel: "● in production",
            description:
                "Two-sided services marketplace (clients vs professionals). Architected and delivered the backend from scratch: full job lifecycle, escrow-based payments with Paystack (charges, transfers, webhooks), concurrency-safe wallet withdrawals, SSE job discovery with relevance ranking, in-app chat, KYC gating (NIN/CAC), and TOTP 2FA.",
            role: "cto",
            stack: "nestjs · postgres · paystack · redis",
        },
        {
            id: "videswap",
            fileName: "videswap.md",
            name: "Videswap",
            status: "maintained",
            statusLabel: "● maintained",
            description:
                "DEX aggregator smart contract with multi-source swaps across 10+ EVM chains (Ethereum, Optimism, Base, Arbitrum, BSC, Polygon, Monad). Built ShareholderPass ERC-721 with referral rewards, USDC revenue sharing with ERC-1271 signatures, and NestJS backend for quote aggregation, trade indexing, and XP leaderboards.",
            role: "co-founder · lead eng",
            stack: "solidity · hardhat · nestjs · moralis",
        },
    ] satisfies Project[],
    statusBar: {
        branch: "main",
        timezone: "Africa/Lagos",
        timezoneLabel: "Lagos",
        timezoneSuffix: "WAT",
        tickMs: 30_000,
    },
} as const;

export const sectionIds = portfolio.nav
    .filter((item) => item.kind === "file")
    .map((item) => item.id);

export const systemsInProduction = portfolio.projects.filter(
    (project) =>
        project.status === "production" || project.status === "maintained",
).length;

export const consoleEasterEgg =
    "%cif you're reading this from devtools, we'd probably get along.";
