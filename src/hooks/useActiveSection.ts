import { useEffect, useState } from "react";

const ACTIVATION_OFFSET = 120;

export function useActiveSection(sectionIds: readonly string[]) {
    const [activeId, setActiveId] = useState(sectionIds[0] ?? "about");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        if (sections.length === 0) {
            return;
        }

        const updateActiveSection = () => {
            let nextActiveIndex = 0;

            sections.forEach((section, index) => {
                if (section.getBoundingClientRect().top < ACTIVATION_OFFSET) {
                    nextActiveIndex = index;
                }
            });

            const nextActiveId = sectionIds[nextActiveIndex];
            if (nextActiveId) {
                setActiveId(nextActiveId);
            }
        };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
        };
    }, [sectionIds]);

    return activeId;
}
