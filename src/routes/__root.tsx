import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

import { getRootHead } from "#/lib/seo";

import "../styles.css";

// Devtools only ride along in dev; recruiters don't need a router inspector.
const Devtools = import.meta.env.DEV
    ? lazy(async () => {
          const [{ TanStackDevtools }, { TanStackRouterDevtoolsPanel }] =
              await Promise.all([
                  import("@tanstack/react-devtools"),
                  import("@tanstack/react-router-devtools"),
              ]);

          return {
              default: () => (
                  <TanStackDevtools
                      config={{ position: "bottom-right" }}
                      plugins={[
                          {
                              name: "Tanstack Router",
                              render: <TanStackRouterDevtoolsPanel />,
                          },
                      ]}
                  />
              ),
          };
      })
    : null;

const rootHead = getRootHead();

export const Route = createRootRoute({
    head: () => rootHead,
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body className="min-h-screen bg-bg font-sans text-text antialiased">
                {children}
                {Devtools ? (
                    <Suspense fallback={null}>
                        <Devtools />
                    </Suspense>
                ) : null}
                <Scripts />
            </body>
        </html>
    );
}
