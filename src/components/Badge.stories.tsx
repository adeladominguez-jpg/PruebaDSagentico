import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  IconAlertTriangle,
  IconCheck,
  IconClock,
  IconInfoCircle,
  IconX,
} from '@tabler/icons-react'
import { Badge } from './Badge'

// Iconos que se pueden elegir desde el panel de controles.
const icons = {
  Ninguno: undefined,
  IconCheck,
  IconClock,
  IconInfoCircle,
  IconAlertTriangle,
  IconX,
}

const meta = {
  title: 'Componentes/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Etiqueta',
    variant: 'neutral',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    icon: { control: 'select', options: Object.keys(icons), mapping: icons },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Variantes

export const Neutral: Story = {
  args: { children: 'Borrador' },
}

export const Info: Story = {
  args: { variant: 'info', children: 'Nuevo' },
}

export const Exito: Story = {
  name: 'Éxito',
  args: { variant: 'success', children: 'Al día' },
}

export const Aviso: Story = {
  args: { variant: 'warning', children: 'Pendiente' },
}

export const Peligro: Story = {
  args: { variant: 'danger', children: 'Caducado' },
}

export const TodasLasVariantes: Story = {
  name: 'Todas las variantes',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} variant="neutral">
        Borrador
      </Badge>
      <Badge {...args} variant="info">
        Nuevo
      </Badge>
      <Badge {...args} variant="success">
        Al día
      </Badge>
      <Badge {...args} variant="warning">
        Pendiente
      </Badge>
      <Badge {...args} variant="danger">
        Caducado
      </Badge>
    </div>
  ),
}

// Tamaños e icono

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} size="sm">
        Pequeña
      </Badge>
      <Badge {...args} size="md">
        Mediana
      </Badge>
    </div>
  ),
}

export const ConIcono: Story = {
  name: 'Con icono',
  args: { variant: 'success', icon: IconCheck, children: 'Al día' },
}
