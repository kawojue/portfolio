import { portfolio, sectionIds } from "#/data/portfolio";
import {
    AboutSection,
    ContactSection,
} from "#/components/portfolio/ContentSections";
import { ConsoleEasterEgg } from "#/components/portfolio/ConsoleEasterEgg";
import { ProjectPanel } from "#/components/portfolio/ProjectPanel";
import { Sidebar } from "#/components/portfolio/Sidebar";
import { StatusBar } from "#/components/portfolio/StatusBar";
import { useActiveSection } from "#/hooks/useActiveSection";

export function PortfolioPage() {
    const activeId = useActiveSection(sectionIds);

    return (
        <>
            <a
                href="#about"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-surface-2 focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-signal"
            >
                Skip to content
            </a>

            <div className="mx-auto grid min-h-screen max-w-[1180px] grid-cols-1 pb-[26px] min-[821px]:grid-cols-[260px_1fr]">
                <Sidebar activeId={activeId} />

                <main className="min-w-0 px-6 py-10 pb-24 min-[821px]:px-10 min-[821px]:py-11">
                    <AboutSection />

                    <div>
                        {portfolio.projects.map((project) => (
                            <ProjectPanel key={project.id} project={project} />
                        ))}
                    </div>

                    <ContactSection />
                </main>
            </div>

            <StatusBar />
            <ConsoleEasterEgg />
        </>
    );
}
