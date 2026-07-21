import { portfolio } from "#/data/portfolio";

type SidebarProps = {
    activeId: string;
};

export function Sidebar({ activeId }: SidebarProps) {
    const fileNav = portfolio.nav.filter((item) => item.kind === "file");

    return (
        <aside className="sticky top-0 z-40 self-start border-line max-[820px]:static max-[820px]:border-b min-[821px]:h-screen min-[821px]:overflow-y-auto min-[821px]:border-r">
            <div className="px-4 py-5 min-[821px]:px-5 min-[821px]:py-7">
                <div className="mb-4 font-mono text-[13px] tracking-[0.02em] text-muted">
                    ~/
                    <span className="font-semibold text-text">
                        {portfolio.handle}
                    </span>
                </div>

                <nav
                    aria-label="Site sections"
                    className="mobile-nav-scroll -mx-4 flex gap-1 overflow-x-auto px-4 pb-1 min-[821px]:hidden"
                >
                    {fileNav.map((item) => {
                        const isActive = activeId === item.id;

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
                </nav>

                <nav
                    aria-label="Site sections"
                    className="hidden font-mono text-[13px] min-[821px]:block"
                >
                    {portfolio.nav.map((item) => {
                        const isActive =
                            item.kind === "file" && activeId === item.id;
                        const isContact = item.id === "contact";

                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                data-active={isActive ? "true" : "false"}
                                data-dir={
                                    item.kind === "dir" ? "true" : "false"
                                }
                                aria-current={isActive ? "location" : undefined}
                                className={[
                                    "tree-item",
                                    item.indent ? "ml-3" : "",
                                    isContact ? "mt-4" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] leading-relaxed text-dim min-[821px]:hidden">
                    {portfolio.sidebarLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target={
                                link.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                link.href.startsWith("http")
                                    ? "noreferrer"
                                    : undefined
                            }
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
                            target={
                                link.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                link.href.startsWith("http")
                                    ? "noreferrer"
                                    : undefined
                            }
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
            </div>
        </aside>
    );
}
