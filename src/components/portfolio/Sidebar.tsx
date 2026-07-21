import { portfolio } from "#/data/portfolio";

type SidebarProps = {
    activeId: string;
};

export function Sidebar({ activeId }: SidebarProps) {
    return (
        <aside className="sticky top-0 h-screen self-start overflow-y-auto border-r border-line px-5 py-7 max-[820px]:static max-[820px]:h-auto max-[820px]:border-r-0 max-[820px]:border-b">
            <div className="mb-4 font-mono text-[13px] tracking-[0.02em] text-muted">
                ~/
                <span className="font-semibold text-text">
                    {portfolio.handle}
                </span>
            </div>

            <nav aria-label="Site sections" className="font-mono text-[13px]">
                {portfolio.nav.map((item) => {
                    const isActive =
                        item.kind === "file" && activeId === item.id;
                    const isContact = item.id === "contact";

                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            data-active={isActive ? "true" : "false"}
                            data-dir={item.kind === "dir" ? "true" : "false"}
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

            <div className="mt-8 font-mono text-[11.5px] leading-[1.8] text-dim">
                {portfolio.sidebarLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target={
                            link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                            link.href.startsWith("http")
                                ? "noreferrer"
                                : undefined
                        }
                        className="block transition-colors hover:text-signal"
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
                <span className="block">{portfolio.location}</span>
            </div>
        </aside>
    );
}
