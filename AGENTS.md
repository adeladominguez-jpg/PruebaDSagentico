# AGENTS.md

Lee este manual antes de empezar cualquier tarea en este repositorio.

## Qué es

PruebaDSagentico es el design system de **Faro**, una app de salud. Aquí se crean los fundamentos (colores, tipografía, espaciados, iconos) y los componentes con los que se construyen todas las pantallas de Faro.

En Faro, cada persona entra en su portal y ve sus recetas y la medicación que tiene que tomar, los análisis y chequeos que se ha hecho en el año y sus citas. Además puede grabar sus consultas y tomar notas, hablar con un agente de IA sobre cómo se siente y ponerse objetivos de revisiones al año, con un panel de datos y métricas para seguirlo todo.

Más contexto en el [README](README.md).

## Tecnología

- **React con TypeScript**, sobre **Vite**.
- **Tailwind** para los estilos.
- **Tabler Icons** para los iconos.
- **Ninguna librería de componentes.** Los componentes los creamos desde cero. No instales librerías como MUI, Chakra, shadcn/ui, Radix o similares.

## Cómo trabajamos

- **En español:** conversaciones, textos, documentación, mensajes de commit y descripciones de PR.
- **Siempre en una rama con PR:** nunca subas cambios directamente a `main`. Crea una rama para cada tarea y abre una PR para que se revise.
- **Sin jerga:** explica los cambios de forma que los entienda alguien que no programa. Cuenta qué has cambiado, por qué y cómo comprobarlo.
- **`package.json` y `package-lock.json` van juntos:** si cambias `package.json`, actualiza `package-lock.json` en la misma PR.
