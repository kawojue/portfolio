import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Portfolio</h1>
    </main>
  )
}
