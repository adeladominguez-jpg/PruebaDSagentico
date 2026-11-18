import type { Preview } from '@storybook/react-vite'
// Carga Tailwind para que los componentes se vean igual que en la app.
import '../src/index.css'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    options: {
      // Orden del menú lateral: primero Status y después los componentes.
      storySort: { order: ['Status', 'Componentes'] },
    },
  },
}

export default preview
