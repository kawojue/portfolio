import { portfolio } from "#/data/portfolio";

type SectionPromptProps = {
    command: string;
};

export function SectionPrompt({ command }: SectionPromptProps) {
    return (
        <div className="mb-1.5 font-mono text-[13px] text-dim">
            <span className="text-signal">$</span> {command}
        </div>
    );
}

type TagListProps = {
    tags: readonly string[];
};

export function TagList({ tags }: TagListProps) {
    return (
        <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
                <li
                    key={tag}
                    className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[11.5px] text-muted"
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
}

export function AboutSection() {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-6"
            aria-labelledby="about-heading"
        >
            <SectionPrompt command="cat about.md" />
            <h1
                id="about-heading"
                className="mb-3.5 font-mono text-2xl font-semibold tracking-[-0.01em] text-text sm:text-[28px]"
            >
                {portfolio.headline}
            </h1>
            <p className="max-w-[58ch] text-base text-text">
                {portfolio.lede.before}{" "}
                <span className="text-signal">{portfolio.lede.highlight}</span>{" "}
                {portfolio.lede.after}
            </p>
            <TagList tags={portfolio.tags} />
        </section>
    );
}

export function ContactSection() {
    return (
        <section
            id="contact"
            className="scroll-mt-6"
            aria-labelledby="contact-heading"
        >
            <SectionPrompt command="cat contact.md" />
            <h2
                id="contact-heading"
                className="mb-1.5 font-mono text-lg font-semibold text-text"
            >
                {portfolio.contact.heading}
            </h2>
            <p className="mb-3 max-w-[60ch] text-muted">
                {portfolio.contact.body}
            </p>
            <footer className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-dim">
                <a
                    href={portfolio.phone.href}
                    className="transition-colors hover:text-signal"
                >
                    {portfolio.phone.label}
                </a>
                {portfolio.contact.links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="transition-colors hover:text-signal"
                        {...(link.href.startsWith("http")
                            ? {
                                  target: "_blank",
                                  rel: "noreferrer",
                              }
                            : {})}
                    >
                        {link.label}
                    </a>
                ))}
            </footer>
        </section>
    );
}
