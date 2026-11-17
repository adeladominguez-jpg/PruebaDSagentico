import type { TablerIcon } from '@tabler/icons-react'
import type { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ComponentProps<'button'> & {
  /** Estilo del botón. Por defecto, 'primary'. */
  variant?: ButtonVariant
  /** Tamaño del botón. Por defecto, 'md'. */
  size?: ButtonSize
  /**
   * Icono de Tabler Icons, por ejemplo IconPlus.
   * Si el botón solo lleva icono (sin texto), añade aria-label para
   * que los lectores de pantalla sepan qué hace.
   */
  icon?: TablerIcon
  /** Lado del texto en el que va el icono. Por defecto, 'start' (delante). */
  iconPosition?: 'start' | 'end'
  /** Si es true, el botón ocupa todo el ancho disponible. */
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-teal-700 text-white enabled:hover:bg-teal-800 enabled:active:bg-teal-900 focus-visible:outline-teal-700',
  secondary:
    'border border-slate-300 bg-white text-slate-900 enabled:hover:bg-slate-50 enabled:active:bg-slate-100 focus-visible:outline-teal-700',
  ghost:
    'bg-transparent text-teal-700 enabled:hover:bg-teal-50 enabled:active:bg-teal-100 focus-visible:outline-teal-700',
  danger:
    'bg-red-700 text-white enabled:hover:bg-red-800 enabled:active:bg-red-900 focus-visible:outline-red-700',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 gap-1.5 px-3 text-sm',
  md: 'h-10 gap-2 px-4 text-sm',
  lg: 'h-12 gap-2 px-5 text-base',
}

// Botón cuadrado, para cuando solo lleva icono.
const iconOnlySizeClasses: Record<ButtonSize, string> = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
}

const iconSizes: Record<ButtonSize, number> = {
  sm: 16,
  md: 18,
  lg: 20,
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'start',
  fullWidth = false,
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  const iconOnly = Icon !== undefined && (children === undefined || children === null)

  const classes = [
    'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg font-medium whitespace-nowrap transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variantClasses[variant],
    iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
    fullWidth && 'w-full',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const icon = Icon && (
    <Icon size={iconSizes[size]} aria-hidden="true" className="shrink-0" />
  )

  return (
    <button type={type} className={classes} {...props}>
      {iconPosition === 'start' && icon}
      {children}
      {iconPosition === 'end' && icon}
    </button>
  )
}
