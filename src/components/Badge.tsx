import type { TablerIcon } from '@tabler/icons-react'
import type { ComponentProps } from 'react'

type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger'
type BadgeSize = 'sm' | 'md'

export type BadgeProps = ComponentProps<'span'> & {
  /** Qué comunica la etiqueta. Por defecto, 'neutral'. */
  variant?: BadgeVariant
  /** Tamaño de la etiqueta. Por defecto, 'md'. */
  size?: BadgeSize
  /** Icono de Tabler Icons delante del texto. */
  icon?: TablerIcon
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-slate-100 text-slate-700',
  info: 'bg-sky-100 text-sky-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-amber-100 text-amber-800',
  danger: 'bg-red-100 text-red-800',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'gap-1 px-2 py-0.5 text-xs',
  md: 'gap-1.5 px-2.5 py-1 text-sm',
}

const iconSizes: Record<BadgeSize, number> = {
  sm: 12,
  md: 14,
}

export function Badge({
  variant = 'neutral',
  size = 'md',
  icon: Icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const classes = [
    'inline-flex items-center rounded-full font-medium whitespace-nowrap',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {Icon && (
        <Icon size={iconSizes[size]} aria-hidden="true" className="shrink-0" />
      )}
      {children}
    </span>
  )
}
