import type { Project } from "#/data/portfolio";

import { SectionPrompt } from "#/components/portfolio/ContentSections";
import { DiffBlock } from "#/components/portfolio/DiffBlock";
import { useReveal } from "#/hooks/useReveal";

type ProjectPanelProps = {
    project: Project;
};

function repoLabel(href: string) {
    return href.replace(/^https?:\/\//, "");
}

export function ProjectPanel({ project }: ProjectPanelProps) {
    const { ref, state } = useReveal<HTMLElement>();
    const flagship = Boolean(project.flagship);

    const statusClassName =
        project.status === "production"
            ? "text-signal"
            : project.status === "sunset"
              ? "text-dim"
              : "text-amber";

    return (
        <section
            ref={ref}
            id={project.id}
            data-reveal={state}
            className={[
                "reveal scroll-mt-6",
                flagship ? "mb-16" : "mb-10",
            ].join(" ")}
            aria-labelledby={`${project.id}-heading`}
        >
            <SectionPrompt command={`cat projects/${project.fileName}`} />
            <h2
                id={`${project.id}-heading`}
                className={[
                    "mb-3 break-all font-mono font-semibold text-text",
                    flagship
                        ? "text-base sm:text-lg"
                        : "text-[13px] text-muted sm:text-sm",
                ].join(" ")}
            >
                ~/projects/
                <span
                    className={flagship ? "font-normal text-dim" : "text-dim"}
                >
                    {project.fileName}
                </span>
            </h2>

            <article
                className={[
                    "rounded border border-line bg-surface",
                    flagship ? "project-flagship px-5.5 py-5" : "px-4 py-3.5",
                ].join(" ")}
            >
                <div className="mb-2 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                    <h3
                        className={[
                            "font-mono font-semibold text-text",
                            flagship ? "text-[15px]" : "text-[13.5px]",
                        ].join(" ")}
                    >
                        {project.name}
                    </h3>
                    <span
                        className={`whitespace-nowrap font-mono text-[11px] ${statusClassName}`}
                    >
                        {project.statusLabel}
                    </span>
                </div>

                <p
                    className={[
                        "max-w-[62ch] text-muted",
                        flagship ? "text-sm" : "text-[13px] leading-relaxed",
                    ].join(" ")}
                >
                    {project.description}
                </p>

                {project.systems?.length ? (
                    <ul
                        className={[
                            "space-y-3 border-t border-line",
                            flagship ? "mt-4 pt-4" : "mt-3 pt-3",
                        ].join(" ")}
                    >
                        {project.systems.map((system) => (
                            <li key={system.name}>
                                <div className="mb-1 font-mono text-[13px] font-semibold text-text">
                                    {system.name}
                                </div>
                                <p className="max-w-[62ch] text-sm text-muted">
                                    {system.summary}
                                </p>
                                {system.repo ? (
                                    <a
                                        href={system.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-1 inline-block font-mono text-[11.5px] text-dim transition-colors hover:text-signal"
                                    >
                                        repo: {repoLabel(system.repo)}
                                    </a>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                ) : null}

                {project.diff?.length ? (
                    <DiffBlock lines={project.diff} />
                ) : null}

                <div
                    className={[
                        "flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11.5px] text-dim",
                        flagship ? "mt-3" : "mt-2.5",
                    ].join(" ")}
                >
                    <span>role: {project.role}</span>
                    <span>stack: {project.stack}</span>
                    {project.site ? (
                        <a
                            href={project.site}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-signal"
                        >
                            site: {repoLabel(project.site)}
                        </a>
                    ) : null}
                    {project.companySite ? (
                        <a
                            href={project.companySite}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-signal"
                        >
                            company: {repoLabel(project.companySite)}
                        </a>
                    ) : null}
                    {project.repo ? (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-signal"
                        >
                            repo: {repoLabel(project.repo)}
                        </a>
                    ) : null}
                </div>
            </article>
        </section>
    );
}
