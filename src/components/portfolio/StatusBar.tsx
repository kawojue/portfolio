import { portfolio, systemsInProduction } from "#/data/portfolio";
import { useLagosClock } from "#/hooks/useLagosClock";

export function StatusBar() {
    const clock = useLagosClock();

    return (
        <div
            className="fixed inset-x-0 bottom-0 z-50 flex h-[calc(26px+env(safe-area-inset-bottom,0px))] items-center justify-between gap-3 border-t border-line bg-surface-2 px-3 pb-[env(safe-area-inset-bottom,0px)] font-mono text-[11.5px] text-muted min-[821px]:px-3.5"
            aria-live="polite"
            aria-atomic="true"
        >
            <div className="flex min-w-0 items-center gap-2 sm:gap-4">
                <span className="truncate">
                    <span
                        aria-hidden="true"
                        className="status-dot mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-signal"
                    />
                    <span className="sm:hidden">
                        {systemsInProduction} prod
                    </span>
                    <span className="hidden sm:inline">
                        {systemsInProduction} systems in prod
                    </span>
                </span>
                <span className="branch-tag hidden shrink-0 sm:inline">
                    {portfolio.statusBar.branch}
                </span>
            </div>
            <span className="shrink-0 tabular-nums">{clock}</span>
        </div>
    );
}
