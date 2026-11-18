import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  // Storybook busca historias en todos los archivos .stories.tsx y .mdx de src/.
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  core: {
    // No enviar datos de uso a Storybook.
    disableTelemetry: true,
  },
  features: {
    // Quita del menú lateral el recuadro de bienvenida «Get started».
    sidebarOnboardingChecklist: false,
  },
}

export default config
