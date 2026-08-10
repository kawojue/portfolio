import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(
    rootMargin = "0px 0px -8% 0px",
) {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold: 0.12 },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [rootMargin]);

    return { ref, visible };
}
