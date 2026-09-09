import { portfolio } from "#/data/portfolio";
import {
    RevealSection,
    SectionHeading,
    SectionPrompt,
} from "#/components/portfolio/ContentSections";

const projectNames = new Map(
    portfolio.projects.map((project) => [project.id, project.name] as const),
);

export function ExperienceSection() {
    return (
        <RevealSection id="experience" className="mb-16">
            <SectionPrompt command="git log --oneline experience.md" />
            <SectionHeading id="experience">Experience</SectionHeading>

            <ol className="timeline">
                {portfolio.experience.map((entry) => (
                    <li key={entry.id} className="timeline-item">
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <h3 className="font-mono text-[14px] font-semibold text-text">
                                {entry.role}
                                <span className="font-normal text-dim"> @ </span>
                                {entry.orgHref ? (
                                    <a
                                        href={entry.orgHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-signal transition-colors hover:text-text"
                                    >
                                        {entry.org}
                                    </a>
                                ) : (
                                    <span className="text-signal">
                                        {entry.org}
                                    </span>
                                )}
                            </h3>
                            <span className="shrink-0 font-mono text-[11.5px] tabular-nums text-dim">
                                {entry.period}
                            </span>
                        </div>
                        <p className="mt-1.5 max-w-[62ch] text-[13.5px] leading-relaxed text-muted">
                            {entry.summary}
                        </p>
                        {entry.projectIds?.length ? (
                            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-dim">
                                {entry.projectIds.map((projectId) => (
                                    <a
                                        key={projectId}
                                        href={`#${projectId}`}
                                        className="transition-colors hover:text-signal"
                                    >
                                        ↳ {projectNames.get(projectId) ?? projectId}
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </li>
                ))}
            </ol>
        </RevealSection>
    );
}
