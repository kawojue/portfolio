import { portfolio, systemsInProduction } from "#/data/portfolio";
import { useLagosClock } from "#/hooks/useLagosClock";

export function StatusBar() {
    const clock = useLagosClock();

    return (
        <div
            className="fixed inset-x-0 bottom-0 z-50 flex h-[26px] items-center justify-between border-t border-line bg-surface-2 px-3.5 font-mono text-[11.5px] text-muted"
            aria-live="polite"
            aria-atomic="true"
        >
            <div className="flex items-center gap-4">
                <span>
                    <span
                        aria-hidden="true"
                        className="status-dot mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-signal"
                    />
                    {systemsInProduction} systems in prod
                </span>
                <span className="branch-tag">{portfolio.statusBar.branch}</span>
            </div>
            <span>{clock}</span>
        </div>
    );
}
