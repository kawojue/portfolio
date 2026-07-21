import type { Project } from "#/data/portfolio";

import { DiffBlock } from "#/components/portfolio/DiffBlock";

type ProjectPanelProps = {
    project: Project;
};

function repoLabel(href: string) {
    return href.replace(/^https?:\/\//, "");
}

export function ProjectPanel({ project }: ProjectPanelProps) {
    const statusClassName =
        project.status === "production"
            ? "text-signal"
            : project.status === "sunset"
              ? "text-dim"
              : "text-amber";

    return (
        <section
            id={project.id}
            className="mb-16 scroll-mt-6 last:mb-0"
            aria-labelledby={`${project.id}-heading`}
        >
            <h2
                id={`${project.id}-heading`}
                className="mb-3 break-all font-mono text-base font-semibold text-text sm:text-lg"
            >
                ~/projects/
                <span className="font-normal text-dim">{project.fileName}</span>
            </h2>

            <article className="rounded border border-line bg-surface px-5.5 py-5">
                <div className="mb-2 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                    <h3 className="font-mono text-[15px] font-semibold text-text">
                        {project.name}
                    </h3>
                    <span
                        className={`whitespace-nowrap font-mono text-[11px] ${statusClassName}`}
                    >
                        {project.statusLabel}
                    </span>
                </div>

                <p className="max-w-[62ch] text-sm text-muted">
                    {project.description}
                </p>

                {project.systems?.length ? (
                    <ul className="mt-4 space-y-3 border-t border-line pt-4">
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

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11.5px] text-dim">
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
