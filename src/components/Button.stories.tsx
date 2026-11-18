import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  IconArrowRight,
  IconCheck,
  IconPlus,
  IconTrash,
  IconX,
} from '@tabler/icons-react'
import { fn } from 'storybook/test'
import { Button } from './Button'

// Iconos que se pueden elegir desde el panel de controles.
const icons = {
  Ninguno: undefined,
  IconPlus,
  IconCheck,
  IconArrowRight,
  IconTrash,
  IconX,
}

const meta = {
  title: 'Componentes/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Guardar',
    variant: 'primary',
    size: 'md',
    iconPosition: 'start',
    fullWidth: false,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    iconPosition: { control: 'inline-radio', options: ['start', 'end'] },
    icon: { control: 'select', options: Object.keys(icons), mapping: icons },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Variantes

export const Principal: Story = {}

export const Secundario: Story = {
  args: { variant: 'secondary', children: 'Cancelar' },
}

export const SoloTexto: Story = {
  name: 'Solo texto',
  args: { variant: 'ghost', children: 'Ver más' },
}

export const Peligro: Story = {
  args: { variant: 'danger', children: 'Borrar', icon: IconTrash },
}

// Tamaños

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="sm">
        Pequeño
      </Button>
      <Button {...args} size="md">
        Mediano
      </Button>
      <Button {...args} size="lg">
        Grande
      </Button>
    </div>
  ),
}

// Iconos

export const ConIcono: Story = {
  name: 'Con icono',
  args: { icon: IconPlus, children: 'Añadir' },
}

export const IconoDetras: Story = {
  name: 'Icono detrás',
  args: { icon: IconArrowRight, iconPosition: 'end', children: 'Siguiente' },
}

export const SoloIcono: Story = {
  name: 'Solo icono',
  args: { icon: IconX, children: undefined, 'aria-label': 'Cerrar' },
}

// Estados

export const Desactivado: Story = {
  args: { disabled: true },
}

export const AnchoCompleto: Story = {
  name: 'Ancho completo',
  args: { fullWidth: true },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
}
