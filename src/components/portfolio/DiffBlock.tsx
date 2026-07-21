import type { DiffLine } from "#/data/portfolio";

type DiffBlockProps = {
    lines: DiffLine[];
};

export function DiffBlock({ lines }: DiffBlockProps) {
    return (
        <div className="diff-scroll mt-3.5 rounded border border-line bg-surface-2 px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-dim">
            {lines.map((line) => (
                <div
                    key={line.text}
                    className={
                        line.type === "add" ? "text-signal" : "text-diff-rem"
                    }
                >
                    {line.text}
                </div>
            ))}
        </div>
    );
}
