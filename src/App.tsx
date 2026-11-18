import { useEffect, useSyncExternalStore, type ComponentType } from 'react'
import Tailwind from './Tailwind.tsx'

// Índice de la app: un menú arriba y, debajo, la página elegida.
//
// Cada archivo de src/screens/ es una pantalla y aparece sola en el menú.
// Su nombre de archivo es su dirección: src/screens/antes.tsx se abre en #/antes.

type Page = {
  slug: string
  label: string
  Component: ComponentType
}

const screenFiles = import.meta.glob<{ default: ComponentType }>(
  './screens/*.tsx',
  { eager: true },
)

const screens: Page[] = Object.entries(screenFiles)
  .map(([path, file]) => {
    const slug = path.replace('./screens/', '').replace(/\.tsx$/, '')
    return { slug, label: slug, Component: file.default }
  })
  .sort((a, b) => a.slug.localeCompare(b.slug))

const pages: Page[] = [
  { slug: 'tailwind', label: 'Tailwind', Component: Tailwind },
  ...screens,
]

// Sin dirección (o con #/), se abre la página Tailwind.
const defaultSlug = 'tailwind'

function subscribeToHash(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function readHash() {
  return window.location.hash
}

function App() {
  const hash = useSyncExternalStore(subscribeToHash, readHash)
  const slug = hash.replace(/^#\/?/, '') || defaultSlug
  const page = pages.find((p) => p.slug === slug)

  useEffect(() => {
    document.title = page
      ? `${page.label} · PruebaDSagentico`
      : 'Página no encontrada · PruebaDSagentico'
  }, [page])

  return (
    <div className="flex h-dvh flex-col bg-white text-slate-900">
      <header className="shrink-0 border-b border-slate-200">
        <nav
          aria-label="Páginas"
          className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2"
        >
          <span className="mr-3 text-sm font-semibold whitespace-nowrap">
            PruebaDSagentico
          </span>
          {pages.map((p) => (
            <a
              key={p.slug}
              href={`#/${p.slug}`}
              aria-current={p.slug === page?.slug ? 'page' : undefined}
              className="rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-slate-600 hover:bg-slate-100 hover:text-slate-900 aria-[current=page]:bg-teal-50 aria-[current=page]:text-teal-700"
            >
              {p.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {page ? (
          <page.Component />
        ) : (
          <main className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-2xl font-semibold">Página no encontrada</h1>
            <p className="mt-2 text-slate-600">
              No existe ninguna página en «#/{slug}». Elige una del menú.
            </p>
          </main>
        )}
      </div>
    </div>
  )
}

export default App
