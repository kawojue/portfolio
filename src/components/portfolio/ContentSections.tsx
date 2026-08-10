import { portfolio } from "#/data/portfolio";
import { useReveal } from "#/hooks/useReveal";

type SectionPromptProps = {
    command: string;
    caret?: boolean;
};

export function SectionPrompt({ command, caret = false }: SectionPromptProps) {
    return (
        <div className="mb-1.5 font-mono text-[13px] text-dim">
            <span className="text-signal">$</span> {command}
            {caret ? (
                <span className="prompt-caret" aria-hidden="true" />
            ) : null}
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
    const { ref, visible } = useReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="about"
            data-visible={visible ? "true" : "false"}
            className="reveal mb-16 scroll-mt-6"
            aria-labelledby="about-heading"
        >
            <SectionPrompt command="cat about.md" caret />
            <h1
                id="about-heading"
                className="mb-1.5 font-mono text-[1.75rem] font-semibold tracking-[-0.02em] text-text sm:text-[2rem]"
            >
                {portfolio.headline}
            </h1>
            <p className="mb-3.5 font-mono text-[13px] text-signal sm:text-sm">
                {portfolio.punch}
            </p>
            <p className="max-w-[58ch] text-base text-muted">
                {portfolio.lede}
            </p>
            <TagList tags={portfolio.tags} />
        </section>
    );
}

export function ContactSection() {
    const { ref, visible } = useReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="contact"
            data-visible={visible ? "true" : "false"}
            className="reveal scroll-mt-6"
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
