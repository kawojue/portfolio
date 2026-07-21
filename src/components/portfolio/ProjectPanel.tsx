import type { Project } from "#/data/portfolio";

import { DiffBlock } from "#/components/portfolio/DiffBlock";

type ProjectPanelProps = {
    project: Project;
};

export function ProjectPanel({ project }: ProjectPanelProps) {
    const statusClassName =
        project.status === "maintained" || project.status === "wip"
            ? "text-amber"
            : "text-signal";

    return (
        <section
            id={project.id}
            className="mb-16 scroll-mt-6 last:mb-0"
            aria-labelledby={`${project.id}-heading`}
        >
            <h2
                id={`${project.id}-heading`}
                className="mb-3 font-mono text-lg font-semibold text-text"
            >
                ~/projects/
                <span className="font-normal text-dim">{project.fileName}</span>
            </h2>

            <article className="rounded border border-line bg-surface px-[22px] py-5">
                <div className="mb-2 flex items-baseline justify-between gap-3">
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

                {project.diff?.length ? (
                    <DiffBlock lines={project.diff} />
                ) : null}

                <div className="mt-3 flex gap-4 font-mono text-[11.5px] text-dim">
                    <span>role: {project.role}</span>
                    <span>stack: {project.stack}</span>
                </div>
            </article>
        </section>
    );
}
