import { Link } from "@tanstack/react-router";

import { isExternalHref, type Action } from "#/data/portfolio";

type ActionLinksProps = {
    actions: readonly Action[];
    className?: string;
};

const base =
    "inline-flex items-center gap-1.5 rounded-[3px] border px-3 py-1.5 font-mono text-[12px] leading-none transition-colors";

const variants = {
    primary:
        "border-signal bg-signal text-selection-fg hover:bg-signal/90 hover:border-signal/90",
    secondary: "border-line text-muted hover:border-signal hover:text-signal",
} as const;

function classesFor(action: Action) {
    return `${base} ${action.primary ? variants.primary : variants.secondary}`;
}

export function ActionLinks({ actions, className = "" }: ActionLinksProps) {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
            {actions.map((action) => {
                if (action.href.startsWith("/")) {
                    return (
                        <Link
                            key={action.href}
                            to={action.href}
                            className={classesFor(action)}
                        >
                            <span aria-hidden="true" className="opacity-70">
                                →
                            </span>
                            {action.label}
                        </Link>
                    );
                }

                const external = isExternalHref(action.href);

                return (
                    <a
                        key={action.href}
                        href={action.href}
                        className={classesFor(action)}
                        {...(external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                    >
                        <span aria-hidden="true" className="opacity-70">
                            {external ? "↗" : "→"}
                        </span>
                        {action.label}
                    </a>
                );
            })}
        </div>
    );
}
