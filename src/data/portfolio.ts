export type ProjectStatus = "production" | "maintained" | "wip" | "sunset";

export type DiffLine = {
    type: "add" | "rem";
    text: string;
};

export type ProjectSystem = {
    name: string;
    summary: string;
    repo?: string;
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
    repo?: string;
    site?: string;
    companySite?: string;
    systems?: ProjectSystem[];
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
        title: "Raheem Kawojue | Senior Backend & Web3 Engineer",
        description:
            "Portfolio of Raheem Kawojue, senior backend and Web3 engineer. Head of Engineering at Waysdrop, co-founder at Opsettle. TypeScript, NestJS, distributed systems, payments, and smart contracts.",
    },
    site: {
        url: "https://kawojue.dev",
        name: "Raheem Kawojue",
        locale: "en_NG",
        twitter: "@0xkawojue",
        ogImage: "/og.jpg",
        keywords:
            "Raheem Kawojue, backend engineer, Web3 engineer, NestJS, TypeScript, distributed systems, fintech, Lagos, Nigeria, portfolio, smart contracts, Paystack",
    },
    handle: "kawojue",
    headline: "Raheem Kawojue, software engineer",
    lede: {
        before: "Product-driven backend engineer with a track record of shipping complex, high-performance systems end-to-end, from zero to production. Deep expertise in TypeScript/NestJS, distributed systems, real-time architecture, and financial infrastructure (wallets, escrow, payment rails). Also builds EVM smart contracts.",
        highlight: "Head of Engineering @ Waysdrop · Co-Founder @ Opsettle",
        after: "Led Ojah at Payshiga, previously CTO at FixOrFlex, co-founded Videswap and Metadawgs, built MemeGoat's on-chain game server, and integrated Paystack, Flutterwave, and Stripe across production platforms.",
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
            id: "ojah",
            label: "ojah.md",
            href: "#ojah",
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
        {
            id: "stedshop",
            label: "stedshop.md",
            href: "#stedshop",
            kind: "file",
            indent: true,
        },
        {
            id: "memegoat",
            label: "memegoat-game.md",
            href: "#memegoat",
            kind: "file",
            indent: true,
        },
        {
            id: "talentsphere",
            label: "talentsphere.md",
            href: "#talentsphere",
            kind: "file",
            indent: true,
        },
        {
            id: "metadawgs",
            label: "metadawgs.md",
            href: "#metadawgs",
            kind: "file",
            indent: true,
        },
        {
            id: "amopedia",
            label: "amopedia.md",
            href: "#amopedia",
            kind: "file",
            indent: true,
        },
        {
            id: "omega-loan",
            label: "omega-loan.md",
            href: "#omega-loan",
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
            site: "https://waysdrop.com",
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
            status: "wip",
            statusLabel: "● in progress",
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
            site: "https://fixorflex.com",
        },
        {
            id: "ojah",
            fileName: "ojah.md",
            name: "Ojah",
            status: "production",
            statusLabel: "● in production",
            description:
                "Cross-border e-commerce marketplace built on Payshiga's payment and wallet rails. Led product and backend: multi-vendor catalog with HS customs codes, vendor-split checkout with live FX from Payshiga quotes, dual logistics providers (Shiip and Topship), HMAC-signed vendor sync from Payshiga business webhooks, and payment confirmation via Payshiga charge events queued through Bull.",
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
            name: "Videswap",
            status: "maintained",
            statusLabel: "● maintained",
            description:
                "DEX aggregator smart contract with multi-source swaps across 10+ EVM chains (Ethereum, Optimism, Base, Arbitrum, BSC, Polygon, Monad). Built ShareholderPass ERC-721 with referral rewards, USDC revenue sharing with ERC-1271 signatures, and NestJS backend for quote aggregation, trade indexing, and XP leaderboards.",
            role: "co-founder · lead eng",
            stack: "solidity · hardhat · nestjs · moralis · coingecko · redis",
            systems: [
                {
                    name: "Contracts",
                    repo: "https://github.com/kawojue/videswap-contracts",
                    summary:
                        "DEX aggregator smart contract with multi-source swaps across 10+ EVM chains, ShareholderPass ERC-721, and USDC revenue sharing with ERC-1271 signatures.",
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
        },
        {
            id: "stedshop",
            fileName: "stedshop-server.md",
            name: "StedShop",
            status: "production",
            statusLabel: "● in production",
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
            fileName: "memegoat-game-server.md",
            name: "MemeGoat Game",
            status: "sunset",
            statusLabel: "● sunset",
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
            description:
                "Talent and creative booking marketplace for Africa's creative industry. Built roughly 70% of the backend before departure: casting briefs and production projects, project-based hiring with e-signed contracts, OTP-gated Paystack wallet payouts, real-time chat over Socket.io, and a parallel job board alongside direct booking flows.",
            role: "backend engineer",
            stack: "nestjs · mongodb · paystack · socket.io",
            site: "https://www.talentsphereafrica.com/",
            repo: "https://github.com/kawojue/tsphere-africa-server",
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
            fileName: "amopedia-server.md",
            name: "Amopedia",
            status: "production",
            statusLabel: "● in production",
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
            fileName: "omega-loan-server.md",
            name: "Omega Loan",
            status: "production",
            statusLabel: "● in production",
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
