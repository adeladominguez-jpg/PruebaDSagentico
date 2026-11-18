import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  IconAlertTriangle,
  IconCalendarEvent,
  IconCheck,
  IconPill,
  IconStethoscope,
} from '@tabler/icons-react'
import { Badge } from './Badge'
import { Button } from './Button'
import { Card } from './Card'

// Iconos que se pueden elegir desde el panel de controles.
const icons = { Ninguno: undefined, IconPill, IconCalendarEvent, IconStethoscope }

const meta = {
  title: 'Componentes/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Ibuprofeno 600 mg',
    description: '1 comprimido cada 8 horas',
    variant: 'outlined',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['outlined', 'elevated'] },
    icon: { control: 'select', options: Object.keys(icons), mapping: icons },
    footer: { control: false },
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Variantes

export const ConBorde: Story = {
  name: 'Con borde',
}

export const ConSombra: Story = {
  name: 'Con sombra',
  args: { variant: 'elevated' },
}

// Partes de la tarjeta

export const ConIcono: Story = {
  name: 'Con icono',
  args: { icon: IconPill },
}

export const ConPie: Story = {
  name: 'Con pie',
  args: {
    icon: IconPill,
    footer: (
      <>
        <Button size="sm" icon={IconCheck}>
          Tomado
        </Button>
        <Button size="sm" variant="ghost">
          Ver receta
        </Button>
      </>
    ),
  },
}

export const Completa: Story = {
  args: {
    icon: IconPill,
    children: (
      <Badge variant="warning" size="sm" icon={IconAlertTriangle}>
        Quedan 3 comprimidos
      </Badge>
    ),
    footer: (
      <>
        <Button size="sm" icon={IconCheck}>
          Tomado
        </Button>
        <Button size="sm" variant="ghost">
          Ver receta
        </Button>
      </>
    ),
  },
}

export const SoloContenido: Story = {
  name: 'Solo contenido',
  args: {
    title: undefined,
    description: undefined,
    children: (
      <p className="text-sm text-slate-700">
        Tarjeta sin título: solo con el contenido que se pone dentro.
      </p>
    ),
  },
}
