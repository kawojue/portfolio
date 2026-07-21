import { useEffect } from "react";

import { consoleEasterEgg } from "#/data/portfolio";

export function ConsoleEasterEgg() {
    useEffect(() => {
        console.log(
            consoleEasterEgg,
            "color:#5eead4;font-family:monospace;font-size:12px;",
        );
    }, []);

    return null;
}
