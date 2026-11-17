import type { TablerIcon } from '@tabler/icons-react'
import type { ComponentProps, ReactNode } from 'react'

type CardVariant = 'outlined' | 'elevated'

export type CardProps = Omit<ComponentProps<'div'>, 'title'> & {
  /** Título de la tarjeta. */
  title?: string
  /** Texto corto debajo del título. */
  description?: string
  /** Icono de Tabler Icons junto al título. */
  icon?: TablerIcon
  /** Contenido de la parte de abajo, separado por una línea; por ejemplo, botones. */
  footer?: ReactNode
  /** Estilo de la tarjeta. Por defecto, 'outlined'. */
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  outlined: 'border border-slate-200 bg-white',
  elevated: 'bg-white shadow-md ring-1 ring-slate-900/5',
}

export function Card({
  title,
  description,
  icon: Icon,
  footer,
  variant = 'outlined',
  className,
  children,
  ...props
}: CardProps) {
  const hasHeader = Boolean(title || description || Icon)
  const hasChildren = children !== undefined && children !== null

  const classes = [
    'flex flex-col gap-4 rounded-xl p-5 text-slate-900',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {hasHeader && (
        <div className="flex items-start gap-3">
          {Icon && (
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
              <Icon size={20} aria-hidden="true" />
            </span>
          )}
          <div className="flex min-w-0 flex-col gap-1">
            {title && <h3 className="text-base font-semibold">{title}</h3>}
            {description && (
              <p className="text-sm text-slate-600">{description}</p>
            )}
          </div>
        </div>
      )}
      {hasChildren && <div>{children}</div>}
      {footer && (
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4">
          {footer}
        </div>
      )}
    </div>
  )
}
