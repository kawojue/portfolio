# Portfolio

Blank [TanStack Start](https://tanstack.com/start) app with React, TypeScript, Tailwind CSS, and file-based routing.

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `pnpm dev`             | Start the Vite dev server on port 3000                |
| `pnpm build`           | Build for production                                  |
| `pnpm preview`         | Preview the production build                          |
| `pnpm test`            | Run Vitest                                            |
| `pnpm generate-routes` | Regenerate `src/routeTree.gen.ts` after route changes |

## Project layout

```text
src/
  routes/          File-based routes
  router.tsx       Router factory
  routeTree.gen.ts Generated route tree (do not edit)
  styles.css       Tailwind entry
public/            Static assets
```

Add routes by creating files under `src/routes/`, then run `pnpm generate-routes` if the route tree does not update automatically during dev.

## Learn more

- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router docs](https://tanstack.com/router)
