import type { TablerIcon } from '@tabler/icons-react'
import type { ComponentProps, ReactNode } from 'react'

type CardVariant = 'outlined' | 'elevated'

type CardImage = {
  /** Dirección de la imagen. */
  src: string
  /**
   * Qué muestra la imagen, para quien no la ve. Déjalo vacío ("") solo si
   * la imagen es decorativa y no aporta información.
   */
  alt: string
}

export type CardProps = Omit<ComponentProps<'div'>, 'title'> & {
  /**
   * Imagen en la parte de arriba, de borde a borde y en formato apaisado
   * (16:9). El hueco se reserva aunque la imagen tarde en cargar.
   */
  image?: CardImage
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
  image,
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
  const hasContent = hasHeader || hasChildren || Boolean(footer)

  const classes = [
    'flex flex-col rounded-xl text-slate-900',
    // Recorta las esquinas de la imagen para que sigan el redondeo de la tarjeta.
    image && 'overflow-hidden',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {image && (
        <div className="aspect-video bg-slate-100">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
      )}
      {(hasContent || !image) && (
        <div className="flex flex-col gap-4 p-5">
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
      )}
    </div>
  )
}
