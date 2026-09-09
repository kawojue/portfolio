import { moreProjects, type Project } from "#/data/portfolio";
import {
    RevealSection,
    SectionHeading,
    SectionPrompt,
} from "#/components/portfolio/ContentSections";

function stripProtocol(href: string) {
    return href.replace(/^https?:\/\/(www\.)?/, "");
}

function statusClassName(status: Project["status"]) {
    if (status === "production" || status === "maintained") {
        return "text-signal";
    }
    return status === "sunset" ? "text-dim" : "text-amber";
}

function primaryLink(project: Project) {
    const href = project.site ?? project.repo ?? project.companySite;
    if (!href) {
        return null;
    }
    const prefix = project.site
        ? "site"
        : project.repo
          ? "repo"
          : "company";
    return { prefix, href };
}

export function MoreWorkSection() {
    return (
        <RevealSection id="more-work" className="mb-16">
            <SectionPrompt command="ls projects/ | tail -n +5" />
            <SectionHeading id="more-work">More work</SectionHeading>
            <p className="-mt-2 mb-4 max-w-[60ch] text-[13.5px] text-muted">
                Shorter entries for systems that shipped but don't need a
                full case study. Every one ran in front of real users.
            </p>

            <ul className="divide-y divide-line overflow-hidden rounded border border-line bg-surface">
                {moreProjects.map((project) => {
                    const link = primaryLink(project);
                    const systems = project.systems?.length ?? 0;

                    return (
                        <li
                            key={project.id}
                            id={project.id}
                            className="scroll-mt-6 px-4 py-3.5"
                        >
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                                <h3 className="font-mono text-[13.5px] font-semibold text-text">
                                    {project.name}
                                    <span className="ml-2 font-normal text-dim">
                                        {project.role}
                                    </span>
                                </h3>
                                <span
                                    className={`shrink-0 font-mono text-[11px] ${statusClassName(project.status)}`}
                                >
                                    {project.statusLabel}
                                </span>
                            </div>
                            <p className="mt-1 max-w-[62ch] text-[13px] leading-relaxed text-muted">
                                {project.summary}
                            </p>
                            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-dim">
                                <span>stack: {project.stack}</span>
                                {systems > 0 ? (
                                    <span>{systems} services</span>
                                ) : null}
                                {link ? (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition-colors hover:text-signal"
                                    >
                                        {link.prefix}: {stripProtocol(link.href)}
                                    </a>
                                ) : null}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </RevealSection>
    );
}
