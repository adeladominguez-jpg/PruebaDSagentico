import {
  IconCalendarEvent,
  IconChartBar,
  IconMessageChatbot,
  IconMicrophone,
  IconNotes,
  IconPill,
  IconStethoscope,
  IconTarget,
} from '@tabler/icons-react'
import type { ReactNode } from 'react'

// Esta página enseña los valores que trae Tailwind por defecto.
// No son los valores de nuestro design system.
//
// Tailwind solo crea los estilos de las clases que encuentra escritas
// enteras en el código (por ejemplo, 'bg-red-500'). Por eso cada clase
// está escrita completa y no se monta a trozos.

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

const colors = [
  {
    name: 'red',
    swatches: [
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
    ],
  },
  {
    name: 'orange',
    swatches: [
      'bg-orange-50',
      'bg-orange-100',
      'bg-orange-200',
      'bg-orange-300',
      'bg-orange-400',
      'bg-orange-500',
      'bg-orange-600',
      'bg-orange-700',
      'bg-orange-800',
      'bg-orange-900',
      'bg-orange-950',
    ],
  },
  {
    name: 'amber',
    swatches: [
      'bg-amber-50',
      'bg-amber-100',
      'bg-amber-200',
      'bg-amber-300',
      'bg-amber-400',
      'bg-amber-500',
      'bg-amber-600',
      'bg-amber-700',
      'bg-amber-800',
      'bg-amber-900',
      'bg-amber-950',
    ],
  },
  {
    name: 'yellow',
    swatches: [
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  {
    name: 'lime',
    swatches: [
      'bg-lime-50',
      'bg-lime-100',
      'bg-lime-200',
      'bg-lime-300',
      'bg-lime-400',
      'bg-lime-500',
      'bg-lime-600',
      'bg-lime-700',
      'bg-lime-800',
      'bg-lime-900',
      'bg-lime-950',
    ],
  },
  {
    name: 'green',
    swatches: [
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
      'bg-green-950',
    ],
  },
  {
    name: 'emerald',
    swatches: [
      'bg-emerald-50',
      'bg-emerald-100',
      'bg-emerald-200',
      'bg-emerald-300',
      'bg-emerald-400',
      'bg-emerald-500',
      'bg-emerald-600',
      'bg-emerald-700',
      'bg-emerald-800',
      'bg-emerald-900',
      'bg-emerald-950',
    ],
  },
  {
    name: 'teal',
    swatches: [
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ],
  },
  {
    name: 'cyan',
    swatches: [
      'bg-cyan-50',
      'bg-cyan-100',
      'bg-cyan-200',
      'bg-cyan-300',
      'bg-cyan-400',
      'bg-cyan-500',
      'bg-cyan-600',
      'bg-cyan-700',
      'bg-cyan-800',
      'bg-cyan-900',
      'bg-cyan-950',
    ],
  },
  {
    name: 'sky',
    swatches: [
      'bg-sky-50',
      'bg-sky-100',
      'bg-sky-200',
      'bg-sky-300',
      'bg-sky-400',
      'bg-sky-500',
      'bg-sky-600',
      'bg-sky-700',
      'bg-sky-800',
      'bg-sky-900',
      'bg-sky-950',
    ],
  },
  {
    name: 'blue',
    swatches: [
      'bg-blue-50',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-blue-950',
    ],
  },
  {
    name: 'indigo',
    swatches: [
      'bg-indigo-50',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-indigo-950',
    ],
  },
  {
    name: 'violet',
    swatches: [
      'bg-violet-50',
      'bg-violet-100',
      'bg-violet-200',
      'bg-violet-300',
      'bg-violet-400',
      'bg-violet-500',
      'bg-violet-600',
      'bg-violet-700',
      'bg-violet-800',
      'bg-violet-900',
      'bg-violet-950',
    ],
  },
  {
    name: 'purple',
    swatches: [
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
      'bg-purple-950',
    ],
  },
  {
    name: 'fuchsia',
    swatches: [
      'bg-fuchsia-50',
      'bg-fuchsia-100',
      'bg-fuchsia-200',
      'bg-fuchsia-300',
      'bg-fuchsia-400',
      'bg-fuchsia-500',
      'bg-fuchsia-600',
      'bg-fuchsia-700',
      'bg-fuchsia-800',
      'bg-fuchsia-900',
      'bg-fuchsia-950',
    ],
  },
  {
    name: 'pink',
    swatches: [
      'bg-pink-50',
      'bg-pink-100',
      'bg-pink-200',
      'bg-pink-300',
      'bg-pink-400',
      'bg-pink-500',
      'bg-pink-600',
      'bg-pink-700',
      'bg-pink-800',
      'bg-pink-900',
      'bg-pink-950',
    ],
  },
  {
    name: 'rose',
    swatches: [
      'bg-rose-50',
      'bg-rose-100',
      'bg-rose-200',
      'bg-rose-300',
      'bg-rose-400',
      'bg-rose-500',
      'bg-rose-600',
      'bg-rose-700',
      'bg-rose-800',
      'bg-rose-900',
      'bg-rose-950',
    ],
  },
  {
    name: 'slate',
    swatches: [
      'bg-slate-50',
      'bg-slate-100',
      'bg-slate-200',
      'bg-slate-300',
      'bg-slate-400',
      'bg-slate-500',
      'bg-slate-600',
      'bg-slate-700',
      'bg-slate-800',
      'bg-slate-900',
      'bg-slate-950',
    ],
  },
  {
    name: 'gray',
    swatches: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
  },
  {
    name: 'zinc',
    swatches: [
      'bg-zinc-50',
      'bg-zinc-100',
      'bg-zinc-200',
      'bg-zinc-300',
      'bg-zinc-400',
      'bg-zinc-500',
      'bg-zinc-600',
      'bg-zinc-700',
      'bg-zinc-800',
      'bg-zinc-900',
      'bg-zinc-950',
    ],
  },
  {
    name: 'neutral',
    swatches: [
      'bg-neutral-50',
      'bg-neutral-100',
      'bg-neutral-200',
      'bg-neutral-300',
      'bg-neutral-400',
      'bg-neutral-500',
      'bg-neutral-600',
      'bg-neutral-700',
      'bg-neutral-800',
      'bg-neutral-900',
      'bg-neutral-950',
    ],
  },
  {
    name: 'stone',
    swatches: [
      'bg-stone-50',
      'bg-stone-100',
      'bg-stone-200',
      'bg-stone-300',
      'bg-stone-400',
      'bg-stone-500',
      'bg-stone-600',
      'bg-stone-700',
      'bg-stone-800',
      'bg-stone-900',
      'bg-stone-950',
    ],
  },
  {
    name: 'mauve',
    swatches: [
      'bg-mauve-50',
      'bg-mauve-100',
      'bg-mauve-200',
      'bg-mauve-300',
      'bg-mauve-400',
      'bg-mauve-500',
      'bg-mauve-600',
      'bg-mauve-700',
      'bg-mauve-800',
      'bg-mauve-900',
      'bg-mauve-950',
    ],
  },
  {
    name: 'olive',
    swatches: [
      'bg-olive-50',
      'bg-olive-100',
      'bg-olive-200',
      'bg-olive-300',
      'bg-olive-400',
      'bg-olive-500',
      'bg-olive-600',
      'bg-olive-700',
      'bg-olive-800',
      'bg-olive-900',
      'bg-olive-950',
    ],
  },
  {
    name: 'mist',
    swatches: [
      'bg-mist-50',
      'bg-mist-100',
      'bg-mist-200',
      'bg-mist-300',
      'bg-mist-400',
      'bg-mist-500',
      'bg-mist-600',
      'bg-mist-700',
      'bg-mist-800',
      'bg-mist-900',
      'bg-mist-950',
    ],
  },
  {
    name: 'taupe',
    swatches: [
      'bg-taupe-50',
      'bg-taupe-100',
      'bg-taupe-200',
      'bg-taupe-300',
      'bg-taupe-400',
      'bg-taupe-500',
      'bg-taupe-600',
      'bg-taupe-700',
      'bg-taupe-800',
      'bg-taupe-900',
      'bg-taupe-950',
    ],
  },
]

// Cada paso vale 0.25rem (4 px).
const spacing = [
  { step: 0, className: 'w-0' },
  { step: 0.5, className: 'w-0.5' },
  { step: 1, className: 'w-1' },
  { step: 1.5, className: 'w-1.5' },
  { step: 2, className: 'w-2' },
  { step: 2.5, className: 'w-2.5' },
  { step: 3, className: 'w-3' },
  { step: 3.5, className: 'w-3.5' },
  { step: 4, className: 'w-4' },
  { step: 5, className: 'w-5' },
  { step: 6, className: 'w-6' },
  { step: 7, className: 'w-7' },
  { step: 8, className: 'w-8' },
  { step: 9, className: 'w-9' },
  { step: 10, className: 'w-10' },
  { step: 11, className: 'w-11' },
  { step: 12, className: 'w-12' },
  { step: 14, className: 'w-14' },
  { step: 16, className: 'w-16' },
  { step: 20, className: 'w-20' },
  { step: 24, className: 'w-24' },
  { step: 28, className: 'w-28' },
  { step: 32, className: 'w-32' },
  { step: 36, className: 'w-36' },
  { step: 40, className: 'w-40' },
  { step: 44, className: 'w-44' },
  { step: 48, className: 'w-48' },
  { step: 52, className: 'w-52' },
  { step: 56, className: 'w-56' },
  { step: 60, className: 'w-60' },
  { step: 64, className: 'w-64' },
  { step: 72, className: 'w-72' },
  { step: 80, className: 'w-80' },
  { step: 96, className: 'w-96' },
]

const radii = [
  { className: 'rounded-none', value: '0' },
  { className: 'rounded-xs', value: '0.125rem · 2 px' },
  { className: 'rounded-sm', value: '0.25rem · 4 px' },
  { className: 'rounded-md', value: '0.375rem · 6 px' },
  { className: 'rounded-lg', value: '0.5rem · 8 px' },
  { className: 'rounded-xl', value: '0.75rem · 12 px' },
  { className: 'rounded-2xl', value: '1rem · 16 px' },
  { className: 'rounded-3xl', value: '1.5rem · 24 px' },
  { className: 'rounded-4xl', value: '2rem · 32 px' },
  { className: 'rounded-full', value: 'Redondo del todo' },
]

const textSizes = [
  { className: 'text-xs', value: '0.75rem · 12 px' },
  { className: 'text-sm', value: '0.875rem · 14 px' },
  { className: 'text-base', value: '1rem · 16 px' },
  { className: 'text-lg', value: '1.125rem · 18 px' },
  { className: 'text-xl', value: '1.25rem · 20 px' },
  { className: 'text-2xl', value: '1.5rem · 24 px' },
  { className: 'text-3xl', value: '1.875rem · 30 px' },
  { className: 'text-4xl', value: '2.25rem · 36 px' },
  { className: 'text-5xl', value: '3rem · 48 px' },
  { className: 'text-6xl', value: '3.75rem · 60 px' },
  { className: 'text-7xl', value: '4.5rem · 72 px' },
  { className: 'text-8xl', value: '6rem · 96 px' },
  { className: 'text-9xl', value: '8rem · 128 px' },
]

const icons = [
  { name: 'IconPill', Icon: IconPill },
  { name: 'IconStethoscope', Icon: IconStethoscope },
  { name: 'IconCalendarEvent', Icon: IconCalendarEvent },
  { name: 'IconMicrophone', Icon: IconMicrophone },
  { name: 'IconNotes', Icon: IconNotes },
  { name: 'IconMessageChatbot', Icon: IconMessageChatbot },
  { name: 'IconTarget', Icon: IconTarget },
  { name: 'IconChartBar', Icon: IconChartBar },
]

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-1 max-w-2xl text-sm text-neutral-600">{description}</p>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Tailwind() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-neutral-900">
      <h1 className="text-4xl font-bold">Tailwind</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">
        Estos son los valores que trae Tailwind CSS por defecto. No son los de
        nuestro design system: nos sirven de punto de partida hasta que
        definamos los de Faro.
      </p>

      <Section
        title="Paleta de color"
        description={`${colors.length} colores, cada uno en 11 tonos: del 50, el más claro, al 950, el más oscuro.`}
      >
        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="flex items-end gap-3 pb-2">
              <div className="w-20 shrink-0" />
              <div className="grid flex-1 grid-cols-11 gap-1">
                {shades.map((shade) => (
                  <span
                    key={shade}
                    className="text-center text-xs text-neutral-500"
                  >
                    {shade}
                  </span>
                ))}
              </div>
            </div>
            {colors.map((color) => (
              <div key={color.name} className="flex items-center gap-3 py-0.5">
                <span className="w-20 shrink-0 text-sm font-medium">
                  {color.name}
                </span>
                <div className="grid flex-1 grid-cols-11 gap-1">
                  {color.swatches.map((swatch, index) => (
                    <div
                      key={swatch}
                      title={`${color.name}-${shades[index]}`}
                      className={`h-10 rounded-md border border-black/5 ${swatch}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Espaciado"
        description="Cada paso vale 0.25rem (4 px): el paso 4 son 1rem (16 px). Se usa para márgenes, rellenos, separaciones y tamaños. Tailwind admite cualquier número; aquí están los pasos más habituales."
      >
        <div className="space-y-1.5 overflow-x-auto">
          {spacing.map(({ step, className }) => (
            <div key={step} className="flex items-center gap-4">
              <span className="w-10 shrink-0 text-right font-mono text-sm">
                {step}
              </span>
              <span className="w-32 shrink-0 text-xs text-neutral-500">
                {step * 0.25}rem · {step * 4} px
              </span>
              <div className={`h-4 shrink-0 rounded-sm bg-sky-500 ${className}`} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Radios"
        description="Cuánto se redondean las esquinas."
      >
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {radii.map(({ className, value }) => (
            <div
              key={className}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div
                className={`size-20 border-2 border-sky-500 bg-sky-100 ${className}`}
              />
              <span className="font-mono text-sm">{className}</span>
              <span className="text-xs text-neutral-500">{value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tamaños de texto" description="De más pequeño a más grande.">
        <div className="divide-y divide-neutral-200 overflow-x-auto">
          {textSizes.map(({ className, value }) => (
            <div key={className} className="flex items-baseline gap-6 py-3">
              <div className="w-36 shrink-0">
                <p className="font-mono text-sm">{className}</p>
                <p className="text-xs text-neutral-500">{value}</p>
              </div>
              <p className={`whitespace-nowrap ${className}`}>Faro</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Iconos"
        description="Ocho iconos de Tabler Icons con su nombre. La librería tiene miles."
      >
        <div className="flex flex-wrap gap-3">
          {icons.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-neutral-200 px-3 py-4"
            >
              <Icon size={32} stroke={1.5} aria-hidden />
              <span className="font-mono text-xs whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}

export default Tailwind
