import { useEffect, useRef, useState } from "react";

export type RevealState = "pending" | "hidden" | "visible";

export function useReveal<T extends HTMLElement = HTMLElement>(
    rootMargin = "0px 0px -8% 0px",
) {
    const ref = useRef<T | null>(null);
    const [state, setState] = useState<RevealState>("pending");

    useEffect(() => {
        const node = ref.current;
        if (!node) {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setState("visible");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry) {
                    return;
                }

                if (entry.isIntersecting) {
                    setState("visible");
                    observer.disconnect();
                    return;
                }

                setState("hidden");
            },
            { rootMargin, threshold: 0.12 },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [rootMargin]);

    return { ref, state };
}
