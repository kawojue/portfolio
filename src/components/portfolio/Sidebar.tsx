import { Link } from "@tanstack/react-router";

import {
    isExternalHref,
    portfolio,
    primaryNavIdFor,
    type NavItem,
} from "#/data/portfolio";

type SidebarProps = {
    activeId: string;
};

function externalProps(href: string) {
    return isExternalHref(href)
        ? { target: "_blank", rel: "noreferrer" }
        : {};
}

type TreeLinkProps = {
    item: NavItem;
    active: boolean;
    className: string;
};

function TreeLink({ item, active, className }: TreeLinkProps) {
    const shared = {
        "data-active": active ? "true" : "false",
        "data-dir": item.kind === "dir" ? "true" : "false",
        "aria-current": active ? ("location" as const) : undefined,
        className,
    };

    if (item.href.startsWith("/")) {
        return (
            <Link to={item.href} {...shared}>
                {item.label}
            </Link>
        );
    }

    return (
        <a href={item.href} {...shared}>
            {item.label}
        </a>
    );
}

export function Sidebar({ activeId }: SidebarProps) {
    const primaryActiveId = primaryNavIdFor(activeId);

    return (
        <aside className="sticky top-0 z-40 self-start border-line max-[820px]:static max-[820px]:border-b min-[821px]:h-screen min-[821px]:overflow-y-auto min-[821px]:border-r">
            <div className="px-4 py-5 min-[821px]:px-5 min-[821px]:py-7">
                <div className="mb-4 flex items-baseline justify-between gap-3 font-mono text-[13px] tracking-[0.02em] text-muted">
                    <div>
                        ~/
                        <span className="font-semibold text-text">
                            {portfolio.handle}
                        </span>
                    </div>
                    <span className="hidden text-[10.5px] text-dim min-[821px]:inline">
                        ⌘K
                    </span>
                </div>

                <nav
                    aria-label="Site sections"
                    className="mobile-nav-scroll -mx-4 flex gap-1 overflow-x-auto px-4 pb-1 min-[821px]:hidden"
                >
                    {portfolio.primaryNav.map((item) => {
                        const isActive = primaryActiveId === item.id;

                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                data-active={isActive ? "true" : "false"}
                                aria-current={isActive ? "location" : undefined}
                                className="tree-item shrink-0 whitespace-nowrap rounded-sm border border-line px-3 py-1.5 [border-left-width:1px]"
                            >
                                {item.label}
                            </a>
                        );
                    })}
                    <Link
                        to="/resume"
                        className="tree-item shrink-0 whitespace-nowrap rounded-sm border border-line px-3 py-1.5 [border-left-width:1px]"
                    >
                        resume
                    </Link>
                </nav>

                <nav
                    aria-label="Site sections"
                    className="hidden font-mono text-[13px] min-[821px]:block"
                >
                    {portfolio.nav.map((item) => {
                        const isActive =
                            item.kind === "file" && activeId === item.id;
                        const spaced =
                            item.id === "experience" || item.id === "resume";

                        return (
                            <TreeLink
                                key={item.id}
                                item={item}
                                active={isActive}
                                className={[
                                    "tree-item",
                                    item.indent ? "ml-3" : "",
                                    spaced ? "mt-4" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                            />
                        );
                    })}
                </nav>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] leading-relaxed text-dim min-[821px]:hidden">
                    {portfolio.sidebarLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            {...externalProps(link.href)}
                            className="transition-colors hover:text-signal"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="mt-6 hidden font-mono text-[11.5px] leading-[1.8] text-dim min-[821px]:mt-8 min-[821px]:block">
                    {portfolio.sidebarLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            {...externalProps(link.href)}
                            className="block break-all transition-colors hover:text-signal"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={portfolio.phone.href}
                        className="block transition-colors hover:text-signal"
                    >
                        {portfolio.phone.label}
                    </a>
                    <span>{portfolio.location}</span>
                </div>

                <div className="mt-6 hidden rounded border border-line bg-surface px-3.5 py-3 min-[821px]:block">
                    <div className="mb-1 flex items-center gap-2 font-mono text-[11px] text-text">
                        <span
                            aria-hidden="true"
                            className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-signal"
                        />
                        {portfolio.statusBar.signal}
                    </div>
                    <p className="font-mono text-[11px] leading-relaxed text-dim">
                        {portfolio.availability}
                    </p>
                    <a
                        href={`mailto:${portfolio.contact.email}`}
                        className="mt-2 inline-block font-mono text-[11.5px] text-signal transition-colors hover:text-text"
                    >
                        → email me
                    </a>
                </div>
            </div>
        </aside>
    );
}
