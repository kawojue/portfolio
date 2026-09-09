import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "#/components/portfolio/PortfolioPage";
import { getIndexHead } from "#/lib/seo";

export const Route = createFileRoute("/")({
    head: getIndexHead,
    component: PortfolioPage,
});
