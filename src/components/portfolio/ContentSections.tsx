import type { ComponentPropsWithoutRef } from "react";

import { isExternalHref, portfolio } from "#/data/portfolio";
import { useReveal } from "#/hooks/useReveal";
import { ActionLinks } from "#/components/portfolio/ActionLinks";

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
    className?: string;
};

export function TagList({ tags, className = "mt-4" }: TagListProps) {
    return (
        <ul className={`flex flex-wrap gap-2 ${className}`.trim()}>
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

type RevealSectionProps = ComponentPropsWithoutRef<"section"> & {
    id: string;
};

export function RevealSection({
    id,
    className = "",
    children,
    ...rest
}: RevealSectionProps) {
    const { ref, state } = useReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id={id}
            data-reveal={state}
            className={`reveal scroll-mt-6 ${className}`.trim()}
            aria-labelledby={`${id}-heading`}
            {...rest}
        >
            {children}
        </section>
    );
}

type SectionHeadingProps = {
    id: string;
    children: React.ReactNode;
};

export function SectionHeading({ id, children }: SectionHeadingProps) {
    return (
        <h2
            id={`${id}-heading`}
            className="mb-4 font-mono text-lg font-semibold text-text"
        >
            {children}
        </h2>
    );
}

export function AboutSection() {
    return (
        <RevealSection id="about" className="mb-16">
            <SectionPrompt command="cat about.md" caret />
            <h1
                id="about-heading"
                className="mb-1.5 font-mono text-[1.75rem] font-semibold tracking-[-0.02em] text-text sm:text-[2rem]"
            >
                {portfolio.headline}
            </h1>
            <p className="mb-1 font-mono text-[13px] text-signal sm:text-sm">
                {portfolio.title}
            </p>
            <p className="mb-3.5 font-mono text-[12px] text-dim sm:text-[13px]">
                {portfolio.punch}
            </p>
            <p className="max-w-[58ch] text-[17px] font-medium leading-snug text-text">
                {portfolio.valueProp}
            </p>
            <p className="mt-3 max-w-[58ch] text-base text-muted">
                {portfolio.lede}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                <ActionLinks actions={portfolio.actions} />
                <span className="inline-flex items-center gap-2 font-mono text-[11.5px] text-dim">
                    <span
                        aria-hidden="true"
                        className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-signal"
                    />
                    {portfolio.availability}
                </span>
            </div>

            <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-4">
                {portfolio.highlights.map((item) => (
                    <div
                        key={item.label}
                        className="flex flex-col bg-surface px-3.5 py-3"
                    >
                        <dt className="order-2 font-mono text-[11px] leading-snug text-dim">
                            {item.label}
                        </dt>
                        <dd className="order-1 mb-1 font-mono text-xl font-semibold text-signal">
                            {item.value}
                        </dd>
                    </div>
                ))}
            </dl>

            <TagList tags={portfolio.tags} className="mt-5" />
        </RevealSection>
    );
}

export function ContactSection() {
    return (
        <RevealSection id="contact">
            <SectionPrompt command="cat contact.md" />
            <h2
                id="contact-heading"
                className="mb-1.5 font-mono text-lg font-semibold text-text"
            >
                {portfolio.contact.heading}
            </h2>
            <p className="mb-4 max-w-[60ch] text-muted">
                {portfolio.contact.body}
            </p>

            <div className="rounded border border-line bg-surface px-5 py-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="font-mono text-[11px] text-dim">
                            fastest route
                        </div>
                        <a
                            href={`mailto:${portfolio.contact.email}`}
                            className="font-mono text-[15px] font-semibold text-text transition-colors hover:text-signal"
                        >
                            {portfolio.contact.email}
                        </a>
                    </div>
                    <ActionLinks actions={portfolio.actions} />
                </div>

                <footer className="mt-4 flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-3 font-mono text-xs text-dim">
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
                            {...(isExternalHref(link.href)
                                ? { target: "_blank", rel: "noreferrer" }
                                : {})}
                        >
                            {link.label}
                        </a>
                    ))}
                    <span className="ml-auto">{portfolio.location}</span>
                </footer>
            </div>
        </RevealSection>
    );
}
