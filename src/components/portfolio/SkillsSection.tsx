import { portfolio } from "#/data/portfolio";
import {
    RevealSection,
    SectionHeading,
    SectionPrompt,
} from "#/components/portfolio/ContentSections";

export function SkillsSection() {
    return (
        <RevealSection id="skills" className="mb-16">
            <SectionPrompt command="cat skills.md" />
            <SectionHeading id="skills">Skills</SectionHeading>

            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2">
                {portfolio.skillGroups.map((group) => (
                    <div key={group.label} className="bg-surface px-4 py-3.5">
                        <dt className="mb-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.08em] text-dim">
                            {group.label}
                        </dt>
                        <dd className="flex flex-wrap gap-1.5 font-mono text-[11.5px] text-muted">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-[3px] border border-line bg-surface-2 px-2 py-0.5"
                                >
                                    {item}
                                </span>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </RevealSection>
    );
}
