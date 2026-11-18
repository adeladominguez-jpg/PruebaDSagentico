import { IconAlertCircle, type TablerIcon } from '@tabler/icons-react'
import { useId, type ComponentProps } from 'react'

type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = Omit<ComponentProps<'input'>, 'size'> & {
  /** Texto que dice qué hay que escribir. Siempre se ve encima del campo. */
  label: string
  /** Texto de ayuda debajo del campo. */
  hint?: string
  /**
   * Mensaje de error. Si lo hay, el campo se pone en rojo y el mensaje
   * aparece debajo en lugar de la ayuda.
   */
  error?: string
  /** Icono de Tabler Icons dentro del campo, a la izquierda. */
  icon?: TablerIcon
  /** Tamaño del campo. Por defecto, 'md'. */
  size?: InputSize
  /** Clases para el bloque completo (etiqueta, campo y mensaje). */
  className?: string
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-8 pr-2.5 text-sm',
  md: 'h-10 pr-3 text-sm',
  lg: 'h-12 pr-3.5 text-base',
}

// Espacio a la izquierda del texto: más grande si hay icono, para no taparlo.
const paddingLeftClasses: Record<InputSize, string> = {
  sm: 'pl-2.5',
  md: 'pl-3',
  lg: 'pl-3.5',
}

const paddingLeftWithIconClasses: Record<InputSize, string> = {
  sm: 'pl-8',
  md: 'pl-9',
  lg: 'pl-10',
}

const iconPositionClasses: Record<InputSize, string> = {
  sm: 'left-2.5',
  md: 'left-3',
  lg: 'left-3.5',
}

const iconSizes: Record<InputSize, number> = {
  sm: 16,
  md: 18,
  lg: 20,
}

export function Input({
  label,
  hint,
  error,
  icon: Icon,
  size = 'md',
  id,
  className,
  ...props
}: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const messageId = `${inputId}-mensaje`
  const message = error ?? hint

  const inputClasses = [
    'w-full rounded-lg border bg-white text-slate-900 transition-colors placeholder:text-slate-400',
    'focus:ring-3 focus:outline-hidden',
    'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500',
    error
      ? 'border-red-600 focus:border-red-600 focus:ring-red-600/20'
      : 'border-slate-300 enabled:hover:border-slate-400 focus:border-teal-700 focus:ring-teal-700/20',
    sizeClasses[size],
    Icon ? paddingLeftWithIconClasses[size] : paddingLeftClasses[size],
  ].join(' ')

  return (
    <div className={['flex flex-col gap-1.5', className].filter(Boolean).join(' ')}>
      <label htmlFor={inputId} className="text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={iconSizes[size]}
            aria-hidden="true"
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-500 ${iconPositionClasses[size]}`}
          />
        )}
        <input
          {...props}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          className={inputClasses}
        />
      </div>
      {message && (
        <p
          id={messageId}
          className={
            error
              ? 'flex items-center gap-1 text-sm text-red-700'
              : 'text-sm text-slate-600'
          }
        >
          {error && (
            <IconAlertCircle size={16} aria-hidden="true" className="shrink-0" />
          )}
          {message}
        </p>
      )}
    </div>
  )
}
