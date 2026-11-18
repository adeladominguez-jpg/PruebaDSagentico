import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconMail, IconPill, IconSearch } from '@tabler/icons-react'
import { Input } from './Input'

// Iconos que se pueden elegir desde el panel de controles.
const icons = { Ninguno: undefined, IconSearch, IconMail, IconPill }

const meta = {
  title: 'Componentes/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icon: { control: 'select', options: Object.keys(icons), mapping: icons },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const ConAyuda: Story = {
  name: 'Con ayuda',
  args: {
    label: 'Correo',
    type: 'email',
    placeholder: 'tu@correo.com',
    hint: 'Te enviaremos los recordatorios aquí.',
  },
}

export const ConIcono: Story = {
  name: 'Con icono',
  args: { label: 'Buscar', icon: IconSearch, placeholder: 'Medicamento, cita…' },
}

export const ConError: Story = {
  name: 'Con error',
  args: {
    label: 'Medicamento',
    icon: IconPill,
    defaultValue: 'Ibuprofeno 600',
    hint: 'Escribe el nombre y la dosis.',
    error: 'Este medicamento ya está en tu lista.',
  },
}

export const Desactivado: Story = {
  args: { defaultValue: 'No se puede cambiar', disabled: true },
}

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} size="sm" label="Pequeño" />
      <Input {...args} size="md" label="Mediano" />
      <Input {...args} size="lg" label="Grande" />
    </div>
  ),
  args: { icon: IconSearch, placeholder: 'Buscar' },
}
