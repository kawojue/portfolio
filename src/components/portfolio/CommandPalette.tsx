import { useEffect, useId, useRef, useState } from "react";

import { portfolio } from "#/data/portfolio";

type PaletteItem = {
    id: string;
    label: string;
    href: string;
    hint: string;
};

const items: PaletteItem[] = portfolio.nav
    .filter((item) => item.kind === "file")
    .map((item) => ({
        id: item.id,
        label: item.label,
        href: item.href,
        hint:
            item.id === "about"
                ? "intro"
                : item.id === "contact"
                  ? "reach out"
                  : "project",
    }));

function isModKey(event: KeyboardEvent) {
    return event.metaKey || event.ctrlKey;
}

export function CommandPalette() {
    const listId = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

    const filtered = items.filter((item) => {
        const q = query.trim().toLowerCase();
        if (!q) {
            return true;
        }
        return (
            item.label.toLowerCase().includes(q) ||
            item.id.toLowerCase().includes(q) ||
            item.hint.toLowerCase().includes(q)
        );
    });

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (isModKey(event) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                setOpen((prev) => !prev);
                return;
            }

            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        if (!open) {
            setQuery("");
            setActiveIndex(0);
            return;
        }

        const frame = window.requestAnimationFrame(() => {
            inputRef.current?.focus();
        });

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.cancelAnimationFrame(frame);
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    useEffect(() => {
        setActiveIndex(0);
    }, [query]);

    if (!open) {
        return null;
    }

    const jump = (href: string) => {
        setOpen(false);
        window.location.hash = href.replace(/^#/, "");
    };

    return (
        <div
            className="palette-scrim fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    setOpen(false);
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Jump to section"
                className="w-full max-w-[440px] overflow-hidden rounded border border-line bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            >
                <div className="flex items-center gap-2 border-b border-line px-3.5 py-3">
                    <span className="font-mono text-[13px] text-signal">$</span>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "ArrowDown") {
                                event.preventDefault();
                                setActiveIndex((index) =>
                                    Math.min(index + 1, filtered.length - 1),
                                );
                                return;
                            }

                            if (event.key === "ArrowUp") {
                                event.preventDefault();
                                setActiveIndex((index) =>
                                    Math.max(index - 1, 0),
                                );
                                return;
                            }

                            if (event.key === "Enter") {
                                event.preventDefault();
                                const item = filtered[activeIndex];
                                if (item) {
                                    jump(item.href);
                                }
                            }
                        }}
                        placeholder="jump to section…"
                        aria-controls={listId}
                        aria-autocomplete="list"
                        aria-activedescendant={
                            filtered[activeIndex]
                                ? `${listId}-${filtered[activeIndex].id}`
                                : undefined
                        }
                        className="w-full bg-transparent font-mono text-[13px] text-text outline-none placeholder:text-dim"
                    />
                    <kbd className="hidden shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-dim sm:inline">
                        esc
                    </kbd>
                </div>

                <ul
                    id={listId}
                    role="listbox"
                    aria-label="Sections"
                    className="max-h-[min(360px,50vh)] overflow-y-auto py-1.5"
                >
                    {filtered.length === 0 ? (
                        <li className="px-3.5 py-3 font-mono text-[12px] text-dim">
                            no matches
                        </li>
                    ) : (
                        filtered.map((item, index) => {
                            const active = index === activeIndex;

                            return (
                                <li key={item.id} role="presentation">
                                    <button
                                        id={`${listId}-${item.id}`}
                                        type="button"
                                        role="option"
                                        aria-selected={active}
                                        onMouseEnter={() =>
                                            setActiveIndex(index)
                                        }
                                        onClick={() => jump(item.href)}
                                        className={[
                                            "flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left font-mono text-[12.5px] transition-colors",
                                            active
                                                ? "bg-[rgba(94,234,212,0.08)] text-signal"
                                                : "text-muted hover:text-text",
                                        ].join(" ")}
                                    >
                                        <span>{item.label}</span>
                                        <span className="text-[10.5px] text-dim">
                                            {item.hint}
                                        </span>
                                    </button>
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>
        </div>
    );
}
