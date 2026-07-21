import { useEffect, useState } from "react";

import { portfolio } from "#/data/portfolio";

const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: portfolio.statusBar.timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});

export function useLagosClock() {
    const [clock, setClock] = useState(() => formatClock());

    useEffect(() => {
        setClock(formatClock());

        const interval = window.setInterval(
            () => setClock(formatClock()),
            portfolio.statusBar.tickMs,
        );

        return () => window.clearInterval(interval);
    }, []);

    return clock;
}

function formatClock() {
    const time = formatter.format(new Date());
    return `${portfolio.statusBar.timezoneLabel} ${time} ${portfolio.statusBar.timezoneSuffix}`;
}
