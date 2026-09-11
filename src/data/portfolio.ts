export type ProjectStatus =
    "production" | "maintained" | "wip" | "sunset" | "go_live";

export type DiffLine = {
    type: "add" | "rem";
    text: string;
};

export type ProjectSystem = {
    name: string;
    summary: string;
    repo?: string;
};

export type ProjectDiagram = {
    src: string;
    alt: string;
    caption?: string;
};

export type Project = {
    id: string;
    fileName: string;
    name: string;
    status: ProjectStatus;
    statusLabel: string;
    summary: string;
    description: string;
    role: string;
    stack: string;
    flagship?: boolean;
    repo?: string;
    site?: string;
    companySite?: string;
    diagram?: ProjectDiagram;
    systems?: ProjectSystem[];
    diff?: DiffLine[];
};

export type NavItem = {
    id: string;
    label: string;
    href: string;
    kind: "file" | "dir";
    indent?: boolean;
    hint?: string;
};

export type PrimaryNavItem = {
    id: string;
    label: string;
    href: string;
    sectionIds: readonly string[];
};

export type SocialLink = {
    label: string;
    href: string;
};

export type Action = SocialLink & {
    primary?: boolean;
};

export type Highlight = {
    value: string;
    label: string;
};

export type Experience = {
    id: string;
    role: string;
    org: string;
    orgHref?: string;
    period: string;
    summary: string;
    projectIds?: readonly string[];
};

export type SkillGroup = {
    label: string;
    items: readonly string[];
};

export const portfolio = {
    meta: {
        title: "Raheem Kawojue | Senior Backend, AI Agents, Web3 & AWS Engineer",
        description:
            "Raheem Kawojue — CTO and Co-founder at Waysdrop and Terrakru, co-founder of Opsettle. Built Waysdrop end-to-end: ~2M-line NestJS backend, 6+ frontends, 6 SDKs, 3 production AI agents, 4 payment rails, zero-downtime Railway->AWS migration, and the H3 courier matching engine. Open to senior remote roles worldwide.",
    },
    site: {
        url: "https://kawojue.dev",
        name: "Raheem Kawojue",
        locale: "en_NG",
        twitter: "@0xkawojue",
        ogImage: "/og.jpg",
        updated: "2026-09-11",
        keywords: [
            "Raheem Kawojue",
            "kawojue",
            "0xkawojue",
            "senior backend engineer",
            "NestJS engineer",
            "TypeScript backend engineer",
            "AI agent engineer",
            "LLM tool calling engineer",
            "Web3 engineer",
            "Solidity developer",
            "smart contract engineer",
            "payment systems engineer",
            "fintech backend engineer",
            "Paystack integration engineer",
            "Nomba Stripe NestJS",
            "escrow wallet systems",
            "distributed systems engineer",
            "BullMQ Redis Kafka",
            "PostgreSQL NestJS",
            "remote NestJS engineer",
            "remote backend engineer",
            "EVM Solana engineer",
            "AWS engineer",
            "zero-downtime cloud migration",
            "Railway to AWS migration",
            "AWS EC2 RDS ElastiCache Lambda",
            "WAF Shield CloudFront Amplify",
            "agriculture tech Nigeria",
            "agritech marketplace",
            "Terrakru CTO",
            "Terrakru co-founder",
            "agricultural marketplace Nigeria",
            "farmers merchants platform Nigeria",
            "Next.js full stack engineer",
            "Next.js admin dashboard",
            "CTO Waysdrop",
            "Head of Engineering Waysdrop",
            "Waysdrop SDK",
            "Dart Node Go PHP Rust Python SDK",
            "Opsettle",
            "Ojah Payshiga",
            "backend engineer Lagos",
            "backend engineer Nigeria",
        ].join(", "),
        skills: [
            "NestJS",
            "TypeScript",
            "Next.js",
            "PostgreSQL",
            "Redis",
            "BullMQ",
            "AI agents",
            "LLM tool calling",
            "notification agents",
            "retention agents",
            "payment systems",
            "escrow",
            "Paystack",
            "Nomba",
            "Stripe",
            "AWS",
            "zero-downtime cloud migration",
            "Solidity",
            "EVM",
            "Solana",
            "Kafka",
            "RabbitMQ",
            "WebSockets",
            "distributed systems",
            "fintech",
            "agritech",
            "agricultural marketplace",
            "platform SDKs",
        ],
    },
    handle: "kawojue",
    headline: "Raheem Kawojue",
    title: "Senior Backend Engineer · AI Agents · Payments · Web3",
    punch: "CTO & Co-founder @ Waysdrop · Building Opsettle",
    valueProp:
        "I take payment systems, AI agents, and real-time infra from zero to production — and keep them running with real money on the line.",
    lede: "Built and own Waysdrop end-to-end: ~2M-line NestJS backend, 6+ frontends, 6 SDKs, 3 production AI agents, and 4 payment rails. Led its zero-downtime Railway to AWS migration across RDS, EC2, ElastiCache, Lambda, Amplify, CloudFront, and the rest of the stack. Also CTO and co-founder at Terrakru, co-founder at Opsettle, and shipped production backends for 9+ companies since 2023.",
    availability: "Open to senior roles · remote-first · Lagos (WAT, UTC+1)",
    tags: [
        "AI agents · support · notify · retain",
        "Payments · escrow · wallets",
        "TypeScript · NestJS · Go · Solidity",
        "Redis · BullMQ · RabbitMQ · Kafka",
        "Smart Contracts · EVM · Solana",
    ],
    highlights: [
        { value: "3", label: "production AI agents: support, notify, retain" },
        { value: "4", label: "payment rails shipped to prod" },
        { value: "9+", label: "production backends shipped since 2023" },
        { value: "0", label: "downtime Railway → AWS migration at Waysdrop" },
        { value: "~2M", label: "lines of backend operated in prod" },
    ] satisfies Highlight[],
    actions: [
        {
            label: "email me",
            href: "mailto:kawojue08@gmail.com",
            primary: true,
        },
        { label: "linkedin", href: "https://www.linkedin.com/in/kawojue" },
        { label: "resume", href: "/resume" },
    ] satisfies Action[],
    location: "Lagos, Nigeria · Open to remote",
    phone: {
        label: "+234 813 191 1964",
        href: "tel:+2348131911964",
    },
    contact: {
        heading: "Let's talk",
        body: "Hiring for senior backend, AI-agent, distributed systems, or Web3 work? I'm remote-first out of Lagos (UTC+1), which overlaps cleanly with European and US East hours. Email is the fastest route; a short note about the problem you're solving is enough to start.",
        email: "kawojue08@gmail.com",
        links: [
            { label: "mail", href: "mailto:kawojue08@gmail.com" },
            { label: "github", href: "https://github.com/kawojue" },
            { label: "linkedin", href: "https://www.linkedin.com/in/kawojue" },
            { label: "x", href: "https://x.com/0xkawojue" },
        ] satisfies SocialLink[],
    },
    // Periods are drafted from the project writeups. Correct them here and
    // the timeline, resume, and llms corpus follow.
    experience: [
        {
            id: "waysdrop-cto",
            role: "CTO & Co-founder",
            org: "Waysdrop",
            orgHref: "https://waysdrop.com",
            period: "Sep 2026 - present",
            summary:
                "Built and own the entire platform end-to-end: the ~2M-line NestJS backend, the agent fleet (support, notifications, activation/retention), multi-rail wallets, 6+ frontend apps (admin, API dashboard, affiliate, web, CRM, global-admin), 6 cross-language SDKs, and zero-downtime migration from Railway to AWS across 4 RDS, 3 EC2, 2 Load Balancers, ElastiCache, 9 Amplify deployments, and 2 Lambda/EventBridge schedulers.",
            projectIds: ["waysdrop"],
        },
        {
            id: "waysdrop-hoe",
            role: "Head of Engineering",
            org: "Waysdrop",
            orgHref: "https://waysdrop.com",
            period: "Jan 2026 - Aug 2026",
            summary:
                "Ran engineering and built the whole platform end-to-end: production AI agents beyond chat, H3 courier matching, 15+ queues, the admin/API-dashboard/affiliate/web/CRM/global-admin frontends, 6 SDKs (Dart, Node, Go, PHP, Rust, Python), and 3 public reference architectures on GitHub.",
            projectIds: ["waysdrop"],
        },
        {
            id: "waysdrop-lead",
            role: "Lead Backend Engineer",
            org: "Waysdrop",
            orgHref: "https://waysdrop.com",
            period: "Jan 2025 - Dec 2025",
            summary:
                "Built the entire platform server from early MVP to production: all NestJS services, Paystack/Nomba/Stripe wallet rails, Bull queues, the first Claude/Qwen support agent with 80+ tools, and the first internal admin and web frontends.",
            projectIds: ["waysdrop"],
        },
        {
            id: "terrakru",
            role: "CTO & Co-founder",
            org: "Terrakru",
            orgHref: "https://terrakru.com",
            period: "2026 - present",
            summary:
                "CTO and co-founder of an agricultural commerce marketplace connecting farmers and merchants across Nigeria. Built the NestJS backend with a colleague, the Next.js frontends with another colleague, and single-handedly delivered the admin dashboard. Secure wallet, Paystack payments, in-app chat, geo-radius discovery via maps, and real-time listings ready for go-live.",
            projectIds: ["terrakru"],
        },
        {
            id: "opsettle",
            role: "Co-founder · Lead Engineer",
            org: "Opsettle",
            period: "2025 - present",
            summary:
                "Building crypto payment infrastructure from zero: merchant dashboard and gasless checkout on top of a NestJS API, backed by an audited non-custodial settlement layer across Base, Polygon, Arbitrum, Optimism, and BNB.",
            projectIds: ["opsettle"],
        },
        {
            id: "fixorflex",
            role: "CTO",
            org: "FixOrFlex",
            orgHref: "https://fixorflex.com",
            period: "2025",
            summary:
                "Architected and shipped a two-sided services marketplace backend: Paystack escrow, concurrency-safe withdrawals, SSE job discovery, KYC gating, and TOTP 2FA.",
            projectIds: ["fixorflex"],
        },
        {
            id: "payshiga",
            role: "Product Lead · Backend Engineer",
            org: "Payshiga (Ojah)",
            orgHref: "https://payshiga.com",
            period: "2024",
            summary:
                "Led product and backend for Ojah, a cross-border marketplace on Payshiga's rails: live FX quotes, vendor-split checkout, dual logistics, and HMAC-signed webhook sync.",
            projectIds: ["ojah"],
        },
        {
            id: "web3",
            role: "Co-founder · Backend Engineer",
            org: "Videlabs · Metadawgs",
            orgHref: "https://videlabs.io",
            period: "2024 - present",
            summary:
                "VideSwap DEX aggregator across 5+ EVM chains with ERC-721 revenue sharing; five NestJS services for Metadawgs' Solana ecosystem covering presale, trading, SocialFi, and moderation.",
            projectIds: ["videswap", "metadawgs"],
        },
        {
            id: "freelance",
            role: "Backend Engineer · Freelance",
            org: "Independent",
            period: "2023 - 2024",
            summary:
                "Shipped production backends for clients across e-commerce, fintech, healthcare, and Web3 gaming: StedShop, TalentSphere Africa, Amopedia, Omega Loan, and MemeGoat.",
            projectIds: [
                "stedshop",
                "talentsphere",
                "memegoat",
                "amopedia",
                "omega-loan",
            ],
        },
    ] satisfies Experience[],
    skillGroups: [
        {
            label: "Languages",
            items: ["TypeScript", "Node.js", "Go", "Solidity", "SQL"],
        },
        {
            label: "Backend & data",
            items: [
                "NestJS",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "BullMQ",
                "RabbitMQ",
                "Kafka",
                "WebSockets · Socket.io",
                "SSE",
                "Webhooks · HMAC signing",
            ],
        },
        {
            label: "Payments & fintech",
            items: [
                "Paystack",
                "Nomba",
                "Stripe",
                "Payshiga",
                "Escrow & wallet ledgers",
                "Dedicated virtual accounts",
                "KYC (NIN · CAC)",
                "TOTP 2FA",
                "Refunds & reconciliation",
            ],
        },
        {
            label: "AI agents",
            items: [
                "Claude",
                "Qwen",
                "LLM tool-calling",
                "Notification decisioning",
                "Activation & retention agents",
                "Multi-channel (push · email · SMS · in-app)",
                "WhatsApp · Telegram bots",
            ],
        },
        {
            label: "Web3",
            items: [
                "EVM · Hardhat",
                "ERC-4337",
                "EIP-712",
                "ERC-721 · ERC-1271",
                "Uniswap V3 · Stargate",
                "Solana · SPL",
                "Jito · Raydium · Orca",
                "Stacks",
            ],
        },
        {
            label: "Reliability & infra",
            items: [
                "AWS: EC2 · RDS · ElastiCache · Lambda",
                "AWS: Load Balancers · S3 · CloudFront · SES",
                "AWS: EventBridge · Secrets Manager · ECR",
                "AWS: WAF & Shield · Amplify · CloudWatch",
                "Zero-downtime cloud migrations",
                "Read-replica routing",
                "Redis circuit breakers",
                "Prometheus",
                "Sentry",
                "H3 geospatial",
                "Azure Blob",
                "Cloudinary",
                "Vercel",
            ],
        },
    ] satisfies SkillGroup[],
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
        {
            id: "about",
            label: "about.md",
            href: "#about",
            kind: "file",
            hint: "intro",
        },
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
            hint: "case study",
        },
        {
            id: "opsettle",
            label: "opsettle.md",
            href: "#opsettle",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "terrakru",
            label: "terrakru.md",
            href: "#terrakru",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "fixorflex",
            label: "fixorflex.md",
            href: "#fixorflex",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "ojah",
            label: "ojah.md",
            href: "#ojah",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "more-work",
            label: "more-work.md",
            href: "#more-work",
            kind: "file",
            indent: true,
            hint: "7 more systems",
        },
        {
            id: "experience",
            label: "experience.md",
            href: "#experience",
            kind: "file",
            hint: "timeline",
        },
        {
            id: "skills",
            label: "skills.md",
            href: "#skills",
            kind: "file",
            hint: "stack",
        },
        {
            id: "contact",
            label: "contact.md",
            href: "#contact",
            kind: "file",
            hint: "reach out",
        },
        {
            id: "resume",
            label: "resume.pdf",
            href: "/resume",
            kind: "file",
            hint: "print view",
        },
    ] satisfies NavItem[],
    primaryNav: [
        { id: "about", label: "about", href: "#about", sectionIds: ["about"] },
        {
            id: "work",
            label: "work",
            href: "#waysdrop",
            sectionIds: [
                "waysdrop",
                "opsettle",
                "terrakru",
                "fixorflex",
                "ojah",
                "more-work",
            ],
        },
        {
            id: "experience",
            label: "experience",
            href: "#experience",
            sectionIds: ["experience"],
        },
        {
            id: "skills",
            label: "skills",
            href: "#skills",
            sectionIds: ["skills"],
        },
        {
            id: "contact",
            label: "contact",
            href: "#contact",
            sectionIds: ["contact"],
        },
    ] satisfies PrimaryNavItem[],
    projects: [
        {
            id: "waysdrop",
            fileName: "waysdrop.md",
            name: "Waysdrop",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Built the entire logistics and commerce platform end-to-end: ~2M-line NestJS backend, 6+ frontend apps, AI agent fleet, H3 matching, multi-rail wallets, 6 SDKs, zero-downtime Railway→AWS migration.",
            description:
                "Logistics and commerce platform serving users, couriers, stores, admins, and agents. I built the whole thing end-to-end — server, every frontend, SDKs, architectures, infrastructure — from early MVP through production to scaling as lead backend, then Head of Engineering, and now CTO and co-founder. The frontend fleet is 6+ production apps: waysdrop-admin, waysdrop-api-dashboard, waysdrop-affiliate, waysdrop-web, waysdrop-crm, and waysdrop-global-admin, plus partner portals and mobile wrappers for a total of 9 Amplify deployments. Led zero-downtime migration of all servers and databases from Railway to AWS: 4 RDS instances, 3 EC2 with 2 Elastic IPs, 2 Load Balancers, ElastiCache for caching, 2 Lambda functions with EventBridge Schedulers, 9 Amplify deployments, 2 ECRs, 2 CloudFront distributions, S3 for storage, 2 Secrets Managers, SES for email, and 2 WAF & Shield layers — everything instrumented with CloudWatch. Published 3 reference architectures on GitHub covering the location service, HTTP logger, and API key gateway. Authored 6 official platform SDKs in Dart, Node.js, Go, PHP, Rust, and Python so merchant and courier integrations ship in hours, not weeks. The AI layer is a fleet, not a chat box. A Claude/Qwen support agent with 80+ tools runs live on WhatsApp and Telegram and executes ops from a prompt. A notification decision agent chooses when and how to reach someone: push, email, SMS, or in-app, including new products, cart reminders, a nearby store, and holiday greetings. An activation and retention agent creates promos and pulls abandoned users back. Under that: H3 geospatial courier matching, multi-rail wallets (Paystack, Nomba, Stripe, DVA, escrow), and 15+ Bull queues for delivery, payments, KYC, and webhooks.",
            role: "built everything · cto · co-founder",
            stack: "nestjs · postgres · redis · bullmq · claude · qwen · aws · amplify · ec2 · rds · elasticache · react · sdk ×6",
            site: "https://waysdrop.com",
            diagram: {
                src: "/waysdrop_architecture.svg",
                alt: "Waysdrop platform architecture diagram showing frontends and SDKs feeding a NestJS backend, AI agents, and AWS infrastructure.",
                caption:
                    "Architecture overview: frontends and SDKs feed the NestJS core, which powers the AI agent fleet and runs on AWS infra.",
            },
            systems: [
                {
                    name: "Platform server (entire codebase)",
                    summary:
                        "The ~2M-line NestJS monorepo I built end-to-end: services, domain models, auth, payments, matching, queues, WebSockets, webhooks, audit, and every internal API the frontends and SDKs call.",
                },
                {
                    name: "Frontend apps × 6+",
                    summary:
                        "Contributed to 6+ production web frontends: waysdrop-admin, waysdrop-api-dashboard, waysdrop-affiliate, waysdrop-web, waysdrop-crm, and waysdrop-global-admin — plus partner portals — all deployed to AWS Amplify.",
                },
                {
                    name: "Support agent",
                    summary:
                        "Claude/Qwen ops agent with 80+ tools on WhatsApp and Telegram. Users and staff prompt it; it executes across the platform.",
                },
                {
                    name: "Notification agent",
                    summary:
                        "Decision agent that picks channel, timing, and copy: push, email, SMS, or in-app. New products, cart reminders, nearby stores, holiday greetings, and the rest of the lifecycle.",
                },
                {
                    name: "Activation & retention agent",
                    summary:
                        "Brings abandoned users back. Creates promos, drives sessions, and decides what to say so people who left the app have a reason to open it again.",
                },
                {
                    name: "AWS migration (zero downtime)",
                    summary:
                        "Full stack migration from Railway to AWS with zero downtime. 4 RDS, 3 EC2 with 2 EIPs, 2 ALBs, ElastiCache, 2 Lambda + EventBridge schedulers, 9 Amplify deployments (all 6+ frontends + portals), 2 ECRs, 2 CloudFront + WAF/Shield, S3, 2 Secrets Managers, SES, CloudWatch across the board.",
                },
                {
                    name: "Location service architecture",
                    repo: "https://github.com/kawojue/waysdrop-location-architecture",
                    summary:
                        "Reference architecture and writeup for Waysdrop's geospatial location service: H3 courier matching, geofencing, real-time tracking, and high-throughput location ingestion on AWS.",
                },
                {
                    name: "Courier matching algorithm",
                    repo: "https://github.com/kawojue/waysdrop-courier-matching-algorithm",
                    summary:
                        "Multi-stage reactive pipeline for assigning deliveries to couriers: H3 res-7 spatial pre-filter on Redis SETs, parallel fleet/promotion/route matching via forkJoin, 3 allocation strategies (SEND_TO_ALL / NEAREST_ALL / NEAREST_ONE_BY_ONE), eligibility filters (decline cooldown, request caps, collection favorites), and Bull worker scheduling with 8 sequential stages from data prep through push notification dispatch.",
                },
                {
                    name: "HTTP logger architecture",
                    repo: "https://github.com/kawojue/waysdrop-http-logger-architecture",
                    summary:
                        "Reference architecture for Waysdrop's distributed HTTP request logger: structured logging, correlation IDs, log aggregation on CloudWatch, and replayable audit trails across every service boundary.",
                },
                {
                    name: "API key gateway architecture",
                    repo: "https://github.com/kawojue/waysdrop-api-key-architecture",
                    summary:
                        "Reference architecture for Waysdrop's API key gateway: rotation, scoped permissions, rate limiting, audit logging, and SDK integration across all public merchant endpoints.",
                },
                {
                    name: "Platform SDKs × 6",
                    summary:
                        "Official SDKs for Waysdrop's public API in Dart, Node.js, Go, PHP, Rust, and Python. Typed clients, auth helpers, retry policies, and release automation so integrations with merchants, couriers, and partners ship in hours instead of weeks.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- all servers and databases hosted on Railway, single-region",
                },
                {
                    type: "add",
                    text: "+ zero-downtime Railway → AWS migration across 4 RDS, 3 EC2, 2 ALBs",
                },
                {
                    type: "add",
                    text: "+ ElastiCache, 2 Lambda + EventBridge, 9 Amplify deployments, 2 ECRs, S3, 2 Secrets Managers, SES, 2 CloudFront + WAF/Shield — all on CloudWatch",
                },
                {
                    type: "rem",
                    text: "- no public SDKs; partners wrote raw HTTP integrations",
                },
                {
                    type: "add",
                    text: "+ 6 official platform SDKs: Dart · Node.js · Go · PHP · Rust · Python",
                },
                {
                    type: "add",
                    text: "+ 6+ production frontends: admin · API-dashboard · affiliate · web · CRM · global-admin (9 Amplify deployments with portals)",
                },
                {
                    type: "add",
                    text: "+ 3 public reference architectures: location · HTTP logger · API key gateway",
                },
                {
                    type: "rem",
                    text: "- scripted support replies, no ops actions from chat",
                },
                {
                    type: "add",
                    text: "+ Claude/Qwen support agent with 80+ tools across WhatsApp/Telegram",
                },
                {
                    type: "rem",
                    text: "- blast campaigns on a cron, same message to everyone",
                },
                {
                    type: "add",
                    text: "+ decision agent picks push, email, SMS, or in-app per user",
                },
                {
                    type: "add",
                    text: "+ activation/retention agent: promos, cart, geo, holiday triggers",
                },
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
            status: "wip",
            statusLabel: "● in progress",
            flagship: true,
            summary:
                "Crypto payment infrastructure — Stripe for stablecoins. Gasless checkout, merchant dashboard, and audited settlement contracts across 5 EVM chains.",
            description:
                "Crypto payment infrastructure — Stripe for stablecoins. Co-founded and built from zero: a merchant dashboard and gasless checkout on top of a NestJS API, backed by an audited smart-contract settlement layer across five EVM chains: Base, Polygon, Arbitrum, Optimism, and BNB. The contract layer covers direct and relayed checkout, no-wallet deposit addresses, reusable customer wallets, escrow with dispute resolution, ERC-20 subscriptions, programmable payments like vesting, timelocks, and threshold triggers, donation campaigns, and cross-chain swaps — all fee-metered through a central token registry with oracle safety checks. Deterministic CREATE2 factories give merchants and customers the same wallet address on every supported chain. Non-custodial throughout: funds settle directly to merchant wallets; Opsettle never holds them.",
            role: "co-founder · lead eng",
            stack: "solidity · hardhat · nestjs · postgres · multi-chain (Base, Polygon, Arbitrum, Optimism, BNB)",
            diagram: {
                src: "/crypto_payment_platform_architecture.svg",
                alt: "Opsettle crypto payment platform architecture showing access, API orchestration, smart contract settlement, and multi-chain execution layers.",
                caption:
                    "Architecture overview: dashboard and checkout feed API orchestration, which drives the non-custodial settlement contracts across five EVM chains.",
            },
            systems: [
                {
                    name: "Merchant dashboard & gasless checkout",
                    summary:
                        "Merchant-facing dashboard plus hosted checkout for links, invoices, customers, and gasless payment flows on any supported wallet.",
                },
                {
                    name: "NestJS payment orchestration",
                    summary:
                        "Backend modules for payment intents, ledgering, webhook delivery with retry/replay, relayer coordination, and merchant-facing APIs.",
                },
                {
                    name: "Settlement contract suite",
                    summary:
                        "TokenRegistry, MerchantRegistry, PaymentSettlement, PayoutRouter, Escrow, SubscriptionManager, and ProgrammablePayments with oracle-backed fee checks.",
                },
                {
                    name: "Identity, wallets & execution",
                    summary:
                        "EIP-712 merchant consent, ERC-4337 account abstraction, deterministic CREATE2 wallets, no-wallet deposit addresses, and cross-chain swap routing.",
                },
            ],
            diff: [
                {
                    type: "add",
                    text: "+ TokenRegistry, MerchantRegistry, PaymentSettlement, PayoutRouter",
                },
                {
                    type: "add",
                    text: "+ Escrow, SubscriptionManager, ProgrammablePayments, cross-chain swap routing",
                },
                {
                    type: "add",
                    text: "+ EIP-712 merchant consent + ERC-4337 account abstraction",
                },
            ],
        },
        {
            id: "terrakru",
            fileName: "terrakru.md",
            name: "Terrakru",
            status: "go_live",
            statusLabel: "● ready to go live",
            flagship: true,
            summary:
                "Agricultural marketplace connecting Nigerian farmers and merchants: direct trading, built-in wallet, in-app chat, geo-discovery maps, verified listings.",
            description:
                "Agricultural commerce platform connecting farmers and merchants across Nigeria for direct buying and selling of agricultural products with secure transactions and reliable delivery. CTO and co-founder in a three-person founding team. I built the NestJS backend with one colleague, the Next.js customer and merchant frontends with the other colleague, and single-handedly designed and shipped the admin dashboard. Users get a built-in wallet with bank transfers, card payments, and instant payouts via Paystack and Bull-driven payout queues. Farmers and buyers chat directly inside the app to negotiate prices and share product specifications. An interactive map and geo-radius filter lets merchants find produce close to them for efficient sourcing. Real-time listings, price comparison, photo-based produce uploads with pricing, and verified buyer offers round out the full commerce loop — from listing to secure payment to delivery, Terrakru is a complete ecosystem for agricultural commerce in Nigeria.",
            role: "cto · co-founder · backend (pair) · frontend (pair) · admin dashboard (solo)",
            stack: "nestjs · nextjs · postgres · redis · bull · paystack · s3 · cloudinary",
            site: "https://terrakru.com",
            systems: [
                {
                    name: "Built-in wallet & payouts",
                    summary:
                        "Secure in-app wallet with bank transfers, card payments via Paystack, and instant merchant payouts queued on Bull.",
                },
                {
                    name: "In-app negotiation chat",
                    summary:
                        "Direct chat between farmers and merchants: price negotiation, product spec sharing, and offer counter-signing on listings.",
                },
                {
                    name: "Geo-radius discovery & maps",
                    summary:
                        "Interactive map with geo-radius filtering so merchants source produce efficiently by distance and price.",
                },
                {
                    name: "Listings, verified buyers & offers",
                    summary:
                        "Farmers list produce with photos and pricing; verified buyers send offers; admins moderate the whole flow.",
                },
                {
                    name: "Admin dashboard",
                    summary:
                        "Built solo: user and listing moderation, payout operations, KYC review, dispute resolution, marketplace analytics, and super-admin controls.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- farmers and merchants find each other offline or via WhatsApp groups",
                },
                {
                    type: "add",
                    text: "+ verified listings with photos, geo-radius map search, and real-time price comparison across Nigeria",
                },
                {
                    type: "rem",
                    text: "- payments on bank transfer screenshots, payout handled manually in spreadsheets",
                },
                {
                    type: "add",
                    text: "+ built-in wallet: Paystack card/bank intake + Bull-queued instant payouts with reconciliation",
                },
                {
                    type: "add",
                    text: "+ in-app chat for negotiation and spec sharing, plus admin dashboard (built solo) for ops and moderation",
                },
            ],
        },
        {
            id: "fixorflex",
            fileName: "fixorflex.md",
            name: "FixOrFlex",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Two-sided services marketplace: Paystack escrow, concurrency-safe withdrawals, SSE discovery, KYC, 2FA.",
            description:
                "Two-sided services marketplace connecting clients with professionals. As CTO I architected and delivered the backend from scratch: the full job lifecycle, escrow-based payments on Paystack (charges, transfers, webhooks), concurrency-safe wallet withdrawals, SSE job discovery with relevance ranking, in-app chat, KYC gating (NIN/CAC), and TOTP 2FA.",
            role: "cto",
            stack: "nestjs · postgres · paystack · redis",
            site: "https://fixorflex.com",
            diff: [
                {
                    type: "rem",
                    text: "- direct Paystack transfer on withdraw, race-prone balance updates",
                },
                {
                    type: "add",
                    text: "+ escrow lifecycle + concurrency-safe wallet withdrawals",
                },
                {
                    type: "add",
                    text: "+ SSE job discovery with relevance ranking + TOTP 2FA",
                },
            ],
        },
        {
            id: "ojah",
            fileName: "ojah.md",
            name: "Ojah",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Cross-border marketplace on Payshiga rails: live FX, vendor-split checkout, dual logistics, signed webhooks.",
            description:
                "Cross-border e-commerce marketplace built on Payshiga's payment and wallet rails. I led product and backend: a multi-vendor catalog with HS customs codes, vendor-split checkout priced with live FX from Payshiga quotes, dual logistics providers (Shiip and Topship), HMAC-signed vendor sync from Payshiga business webhooks, and payment confirmation from Payshiga charge events queued through Bull.",
            role: "product lead · backend eng",
            stack: "nestjs · postgres · redis · payshiga",
            site: "https://ojah.shop",
            companySite: "https://payshiga.com",
            diff: [
                {
                    type: "rem",
                    text: "- hardcoded FX rates, single courier quote at checkout",
                },
                {
                    type: "add",
                    text: "+ vendor-split carts with Shiip/Topship comparison + HS codes on international routes",
                },
                {
                    type: "add",
                    text: "+ Payshiga quote API, payment links, and HMAC-signed business sync webhooks",
                },
            ],
        },
        {
            id: "videswap",
            fileName: "videswap.md",
            name: "VideSwap",
            status: "maintained",
            statusLabel: "● maintained",
            summary:
                "DEX aggregator across 5+ EVM chains with ERC-721 revenue sharing and a NestJS quote/indexing backend.",
            description:
                "DEX aggregator smart contract with multi-source swaps across 5+ EVM chains (Ethereum, Optimism, Base, Arbitrum, BSC, Polygon, Monad). Built ShareholderPass ERC-721 with referral rewards, USDC revenue sharing with ERC-1271 signatures, and NestJS backend for quote aggregation, trade indexing, and XP leaderboards.",
            role: "co-founder · lead eng",
            stack: "solidity · hardhat · nestjs · moralis · coingecko · redis",
            companySite: "https://videlabs.io",
            systems: [
                {
                    name: "Contracts",
                    repo: "https://github.com/kawojue/videswap-contracts",
                    summary:
                        "DEX aggregator smart contract with multi-source swaps across 5+ EVM chains, ShareholderPass ERC-721, and USDC revenue sharing with ERC-1271 signatures.",
                },
                {
                    name: "Server",
                    repo: "https://github.com/kawojue/videswap-server",
                    summary:
                        "NestJS backend for multi-source quote aggregation, trade indexing from on-chain events, XP leaderboards, and referral tracking.",
                },
                {
                    name: "Client",
                    repo: "https://github.com/kawojue/videswap-client",
                    summary:
                        "Web client for swap routing, wallet connection, and live quote execution against the Videswap aggregator.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- single-DEX router, no on-chain revenue share",
                },
                {
                    type: "add",
                    text: "+ multi-source aggregator across 5+ EVM chains",
                },
                {
                    type: "add",
                    text: "+ ShareholderPass ERC-721 + USDC revenue sharing with ERC-1271",
                },
            ],
        },
        {
            id: "stedshop",
            fileName: "stedshop.md",
            name: "StedShop",
            status: "production",
            statusLabel: "● in production",
            summary:
                "Nigerian e-commerce backend: Paystack checkout, full-text search, delivery-gated returns and refunds.",
            description:
                "Live Nigerian e-commerce store backend, built freelance. Full product catalog with three-level categories, variants, and Postgres full-text search; server-side cart and checkout with Paystack; and an end-to-end returns and refunds pipeline with delivery-gated return windows, refund-vs-exchange logic, and Paystack refund API integration with webhook confirmation.",
            role: "backend engineer · freelance",
            stack: "nestjs · postgres · paystack · redis",
            repo: "https://github.com/kawojue/stedshop-server",
            diff: [
                {
                    type: "rem",
                    text: "- checkout only, return handled as a status flag",
                },
                {
                    type: "add",
                    text: "+ 7-day delivery-gated returns with refund vs exchange pricing",
                },
                {
                    type: "add",
                    text: "+ Paystack refund API + Bull webhook queue for async confirmation",
                },
            ],
        },
        {
            id: "memegoat",
            fileName: "memegoat-game.md",
            name: "MemeGoat Game",
            status: "sunset",
            statusLabel: "● sunset",
            summary:
                "Real-time casino and sportsbook server on Stacks: wallet auth, WebSocket games, automated STX payouts.",
            description:
                "Real-time backend for MemeGoat's on-chain casino and sportsbook on Stacks (Bitcoin L2). Launched on production domains, later shut down. Wallet-signature auth, live multiplayer games over WebSockets (Dice, BlackJack, Roulette, and more), ticket/tournament economy, NFL sportsbook with async settlement, and automated STX payouts broadcast from a backend-held wallet when tournaments closed.",
            role: "backend engineer",
            stack: "nestjs · postgres · redis · stacks",
            repo: "https://github.com/kawojue/memegoat-game-server",
            diff: [
                {
                    type: "rem",
                    text: "- off-chain win ledger, no automated on-chain settlement",
                },
                {
                    type: "add",
                    text: "+ Stacks wallet auth (@stacks/encryption) + HMAC replay protection",
                },
                {
                    type: "add",
                    text: "+ backend signs and broadcasts STX payout txs with post-conditions",
                },
            ],
        },
        {
            id: "talentsphere",
            fileName: "talentsphere.md",
            name: "TalentSphere Africa",
            status: "production",
            statusLabel: "● in production",
            summary:
                "Creative booking marketplace: e-signed contracts, OTP-gated Paystack payouts, Socket.io chat.",
            description:
                "Talent and creative booking marketplace for Africa's creative industry. Built roughly 70% of the backend before departure: casting briefs and production projects, project-based hiring with e-signed contracts, OTP-gated Paystack wallet payouts, real-time chat over Socket.io, and a parallel job board alongside direct booking flows.",
            role: "backend engineer",
            stack: "nestjs · mongodb · paystack · socket.io",
            site: "https://www.talentsphereafrica.com",
            diff: [
                {
                    type: "rem",
                    text: "- balance field withdrawals, no async transfer reconciliation",
                },
                {
                    type: "add",
                    text: "+ OTP-gated Paystack transfers with atomic wallet debit in one transaction",
                },
                {
                    type: "add",
                    text: "+ transfer webhook reconciliation with Paystack fee and settlement tracking",
                },
            ],
        },
        {
            id: "metadawgs",
            fileName: "metadawgs.md",
            name: "Metadawgs",
            status: "maintained",
            statusLabel: "● maintained",
            summary:
                "Five NestJS services for a Solana ecosystem: presale, trading terminal, SocialFi, moderation, growth.",
            description:
                "Solana-based meme/trading ecosystem with a live Telegram community. As co-founder and backend engineer, I owned five NestJS services covering token launch, trading, social quests, moderation, and growth. Real SOL, SPL tokens, and community trust all riding on backend correctness.",
            role: "co-founder · backend eng",
            stack: "nestjs · solana · redis · telegram",
            systems: [
                {
                    name: "Presale Server",
                    repo: "https://github.com/kawojue/presale-server",
                    summary:
                        "TGE backend with dual-round private/public sales, KOL-tiered pricing, referral commissions, and partially-signed SPL token delivery. Hard caps enforced live, async-mutex on concurrent purchases, and a retry path for failed Solana settlements.",
                },
                {
                    name: "SocialFi Server",
                    repo: "https://github.com/kawojue/metadawgs-socialfi-server",
                    summary:
                        "SocialFi quest and rewards platform: X OAuth2 auth, multi-platform content submissions (X/TikTok/YouTube) with Twitter API engagement scoring, points economy and Solana wallet linking, Dawghouse team tournaments with cron-driven reward distribution, and proportional airdrop allocation merged with Telegram invite leaderboard data.",
                },
                {
                    name: "MetaDawgs Terminal",
                    repo: "https://github.com/kawojue/trade-bot",
                    summary:
                        "Full trading terminal inside Telegram: buy/sell by token address or DexScreener/Jupiter links, Jito bundle execution for MEV protection, Raydium/Orca liquidity management, and cron-driven pool rebalancing every 6 hours.",
                },
                {
                    name: "Spam Detection Bot",
                    repo: "https://github.com/kawojue/tg-spam-detection-bot",
                    summary:
                        "Community moderation on every group message: scam wordlist and domain blocklist matching, Solana address drop detection, progressive warn-then-ban over a rolling 24h window, with admin exemption via live chat-member checks.",
                },
                {
                    name: "Invite Bot",
                    repo: "https://github.com/kawojue/invite-bot",
                    summary:
                        "Gamified referral growth: per-user Telegram invite links, join attribution on chat_member events, points and paginated leaderboards, timed campaigns with giveaway mode, and Socket.io for live dashboard updates backed by Redis.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- single public sale round, manual token handoff",
                },
                {
                    type: "add",
                    text: "+ dual-round presale with KOL pricing tiers + live hard-cap checks",
                },
                {
                    type: "add",
                    text: "+ partially-signed SPL transfers, async-mutex, and settlement retry queue",
                },
            ],
        },
        {
            id: "amopedia",
            fileName: "amopedia.md",
            name: "Amopedia",
            status: "production",
            statusLabel: "● in production",
            summary:
                "Multi-tenant radiology RIS: DICOM parsing, Azure Blob storage, role-scoped practitioner access.",
            description:
                "Multi-tenant radiology imaging platform (PACS-adjacent RIS), built freelance in 2023. Patient studies with real clinical metadata (modality, CPT codes, priority, reporting status), DICOM parsing and Azure Blob storage, role-based practitioner access, and a platform-level Adspec super-admin layer over independent imaging centers.",
            role: "backend engineer · freelance",
            stack: "nestjs · postgres · azure · dicom",
            repo: "https://github.com/kawojue/amopedia-server",
            diff: [
                {
                    type: "rem",
                    text: "- opaque file upload, generic patient/image records",
                },
                {
                    type: "add",
                    text: "+ dicom-parser metadata extraction before Azure Blob upload",
                },
                {
                    type: "add",
                    text: "+ study-scoped expiring JWT + wadouri: URLs for viewer access",
                },
            ],
        },
        {
            id: "omega-loan",
            fileName: "omega-loan.md",
            name: "Omega Loan",
            status: "production",
            statusLabel: "● in production",
            summary:
                "Microfinance loan backend shipped in under 24 hours: KYC, repayment schedules, Excel exports.",
            description:
                "Microfinance loan management backend, built and shipped for a client in under 24 hours (for real). Customer and guarantor KYC with Cloudinary document uploads, loan applications (Salary Loan, Asset Financing, SME) with auto-generated repayment schedules, role-scoped moderator/admin access, and Excel portfolio exports via ExcelJS.",
            role: "backend engineer · freelance",
            stack: "nestjs · mongodb · cloudinary · exceljs",
            repo: "https://github.com/kawojue/omega-loan-server",
            diff: [
                {
                    type: "rem",
                    text: "- manual loan records, no repayment schedule generation",
                },
                {
                    type: "add",
                    text: "+ month-by-month payback schedules on approval, leap-year Feb handling",
                },
                {
                    type: "add",
                    text: "+ Admin vs Modmin scoping in query layer + live PAID/OVERDUE/UPCOMING remarks",
                },
            ],
        },
    ] satisfies Project[],
    statusBar: {
        branch: "main",
        signal: "open to remote",
        timezone: "Africa/Lagos",
        timezoneLabel: "Lagos",
        timezoneSuffix: "WAT",
        tickMs: 30_000,
    },
} as const;

export const sectionIds = portfolio.nav
    .filter((item) => item.kind === "file" && item.href.startsWith("#"))
    .map((item) => item.id);

export const featuredProjects = portfolio.projects.filter(
    (project) => project.flagship,
);

export const moreProjects = portfolio.projects.filter(
    (project) => !project.flagship,
);

export const systemsInProduction = portfolio.projects.filter(
    (project) =>
        project.status === "production" || project.status === "maintained",
).length;

export function primaryNavIdFor(sectionId: string) {
    return (
        portfolio.primaryNav.find((item) => item.sectionIds.includes(sectionId))
            ?.id ?? portfolio.primaryNav[0].id
    );
}

export function isExternalHref(href: string) {
    return /^https?:\/\//.test(href);
}

export const consoleEasterEgg =
    "%cif you're reading this from devtools, we'd probably get along.";
