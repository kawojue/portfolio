import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "#/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({ component: PortfolioPage });
