import { Link, createFileRoute } from "@tanstack/react-router";

import { getResumeHead } from "#/lib/seo";
import {
    featuredProjects,
    isExternalHref,
    moreProjects,
    portfolio,
} from "#/data/portfolio";

export const Route = createFileRoute("/resume")({
    head: getResumeHead,
    component: ResumePage,
});

function stripProtocol(href: string) {
    return href.replace(/^(https?:\/\/|mailto:|tel:)(www\.)?/, "");
}

const resumeLinks = [
    { label: portfolio.contact.email, href: `mailto:${portfolio.contact.email}` },
    { label: portfolio.phone.label, href: portfolio.phone.href },
    ...portfolio.sidebarLinks.filter((link) => isExternalHref(link.href)),
    { label: "kawojue.dev", href: portfolio.site.url },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-3 border-b border-[#d9dde0] pb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4b5257] print:text-[9pt]">
            {children}
        </h2>
    );
}

function ResumePage() {
    return (
        <div className="resume-page min-h-screen">
            <div className="print-hidden sticky top-0 z-40 border-b border-[#e3e6e8] bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-[820px] items-center justify-between gap-3 px-5 py-2.5 font-mono text-[12px] text-[#4b5257]">
                    <Link
                        to="/"
                        className="transition-colors hover:text-[#0f766e]"
                    >
                        ← back to portfolio
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="hidden text-[#7c8489] sm:inline">
                            generated from the same data as the site
                        </span>
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="rounded-[3px] border border-[#0f766e] bg-[#0f766e] px-3 py-1.5 text-white transition-colors hover:bg-[#115e59]"
                        >
                            print / save PDF
                        </button>
                    </div>
                </div>
            </div>

            <article className="mx-auto max-w-[820px] px-5 py-10 text-[14px] leading-relaxed sm:px-8 print:py-0">
                <header className="avoid-break mb-8">
                    <h1 className="font-mono text-[26px] font-semibold tracking-[-0.02em] text-[#101214] print:text-[20pt]">
                        {portfolio.headline}
                    </h1>
                    <p className="mt-1 font-mono text-[13px] text-[#0f766e] print:text-[10pt]">
                        {portfolio.title}
                    </p>
                    <p className="mt-3 max-w-[70ch] text-[#3a4045]">
                        {portfolio.valueProp}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11.5px] text-[#4b5257] print:text-[8.5pt]">
                        {resumeLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="hover:text-[#0f766e]"
                                    {...(isExternalHref(link.href)
                                        ? { target: "_blank", rel: "noreferrer" }
                                        : {})}
                                >
                                    {stripProtocol(link.label)}
                                </a>
                            </li>
                        ))}
                        <li>{portfolio.location}</li>
                    </ul>
                </header>

                <section className="mb-8">
                    <SectionTitle>Experience</SectionTitle>
                    <ol className="space-y-4">
                        {portfolio.experience.map((entry) => (
                            <li key={entry.id} className="avoid-break">
                                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                    <h3 className="font-mono text-[13.5px] font-semibold text-[#101214] print:text-[10.5pt]">
                                        {entry.role}
                                        <span className="font-normal text-[#7c8489]">
                                            {" "}
                                            ·{" "}
                                        </span>
                                        {entry.orgHref ? (
                                            <a
                                                href={entry.orgHref}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-[#0f766e]"
                                            >
                                                {entry.org}
                                            </a>
                                        ) : (
                                            <span className="text-[#0f766e]">
                                                {entry.org}
                                            </span>
                                        )}
                                    </h3>
                                    <span className="shrink-0 font-mono text-[11.5px] tabular-nums text-[#7c8489] print:text-[8.5pt]">
                                        {entry.period}
                                    </span>
                                </div>
                                <p className="mt-1 text-[#3a4045]">
                                    {entry.summary}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="mb-8">
                    <SectionTitle>Selected systems</SectionTitle>
                    <ul className="space-y-4">
                        {featuredProjects.map((project) => (
                            <li key={project.id} className="avoid-break">
                                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                    <h3 className="font-mono text-[13.5px] font-semibold text-[#101214] print:text-[10.5pt]">
                                        {project.name}
                                        <span className="ml-2 font-normal text-[#7c8489]">
                                            {project.role}
                                        </span>
                                    </h3>
                                    <span className="shrink-0 font-mono text-[11px] text-[#7c8489] print:text-[8.5pt]">
                                        {project.statusLabel.replace("● ", "")}
                                    </span>
                                </div>
                                <p className="mt-1 text-[#3a4045]">
                                    {project.description}
                                </p>
                                {project.diff?.length ? (
                                    <ul className="mt-1.5 list-disc space-y-0.5 pl-5 text-[13px] text-[#3a4045] print:text-[9.5pt]">
                                        {project.diff
                                            .filter((line) => line.type === "add")
                                            .map((line) => (
                                                <li key={line.text}>
                                                    {line.text.replace(/^\+\s*/, "")}
                                                </li>
                                            ))}
                                    </ul>
                                ) : null}
                                <p className="mt-1.5 font-mono text-[11px] text-[#7c8489] print:text-[8.5pt]">
                                    stack: {project.stack}
                                    {project.site ? (
                                        <>
                                            {" · "}
                                            <a
                                                href={project.site}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {stripProtocol(project.site)}
                                            </a>
                                        </>
                                    ) : null}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-8 avoid-break">
                    <SectionTitle>Additional work</SectionTitle>
                    <ul className="space-y-1.5 text-[13px] text-[#3a4045] print:text-[9.5pt]">
                        {moreProjects.map((project) => (
                            <li key={project.id}>
                                <span className="font-mono font-semibold text-[#101214]">
                                    {project.name}
                                </span>
                                <span className="text-[#7c8489]">
                                    {" "}
                                    · {project.role} ·{" "}
                                </span>
                                {project.summary}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="avoid-break">
                    <SectionTitle>Skills</SectionTitle>
                    <dl className="grid grid-cols-1 gap-x-6 gap-y-2 text-[13px] sm:grid-cols-[max-content_1fr] print:grid-cols-[max-content_1fr] print:text-[9.5pt]">
                        {portfolio.skillGroups.map((group) => (
                            <div key={group.label} className="contents">
                                <dt className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4b5257] sm:pt-0.5 print:text-[8.5pt]">
                                    {group.label}
                                </dt>
                                <dd className="text-[#3a4045]">
                                    {group.items.join(" · ")}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </article>
        </div>
    );
}
