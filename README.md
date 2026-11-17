# PruebaDSagentico

El design system de **Faro**, una app de salud.

## Qué es Faro

Faro es una app para llevar el control de tu salud. Cada persona entra en su portal y ve en un solo sitio:

- **Recetas y medicación:** qué tiene que tomar y cuándo.
- **Análisis y chequeos:** los que se ha hecho a lo largo del año.
- **Citas:** las próximas, por ejemplo con el dentista.

Además, desde Faro puede:

- **Grabar sus consultas y tomar notas** para no perder nada de lo que le dicen.
- **Hablar con un agente de IA** sobre cómo se siente.
- **Ponerse objetivos de revisiones al año**, por ejemplo de vista, dientes o medicina general.
- **Seguirlo todo en un panel** de datos y métricas.

## Qué es PruebaDSagentico

PruebaDSagentico es el design system de Faro, es decir, la biblioteca de piezas con la que se construyen todas las pantallas de la app:

- **Fundamentos:** colores, tipografía, espaciados e iconos.
- **Componentes:** botones, formularios, tarjetas, gráficos y el resto de piezas de la interfaz.
- **Pautas:** cuándo y cómo usar cada pieza.

Así, Faro se ve y funciona igual en todas sus pantallas, y nadie tiene que construir dos veces la misma pieza.

Se construye con:

- **[React](https://react.dev/)** para los componentes.
- **[Vite](https://vite.dev/)** para el entorno de desarrollo.
- **[Storybook](https://storybook.js.org/)** como catálogo para ver y probar cada componente por separado.

## Para quién es

- **Diseño:** para tener una referencia común de cómo se ve y se comporta cada pieza de Faro.
- **Desarrollo:** para montar las pantallas de Faro con componentes que ya están hechos y probados.
- **Producto:** para revisar los componentes en Storybook sin tener que abrir la app.

La gente que usará Faro es cualquiera que quiera llevar el control de su salud. Por eso los componentes tienen que ser claros y fáciles de usar para todo el mundo.

## Qué vamos a construir

Primero, los **fundamentos** y los **componentes básicos** (botones, campos de formulario, tarjetas, navegación). Después, los componentes de cada parte de Faro:

| Parte de Faro | Componentes previstos |
| --- | --- |
| Recetas y medicación | Tarjeta de medicamento, recordatorio de toma |
| Análisis y chequeos | Lista de resultados, historial del año |
| Citas | Tarjeta de cita, calendario |
| Consultas | Grabadora de audio, editor de notas |
| Agente de IA | Ventana de conversación |
| Objetivos de revisiones | Objetivo con su progreso a lo largo del año |
| Panel de datos | Gráficos e indicadores |

Esta lista es un plan inicial y puede cambiar a medida que avance el proyecto.

## Estado

**Fase inicial.** El repositorio acaba de crearse y todavía no tiene código ni componentes.

Próximos pasos:

1. Crear el proyecto con React y Vite.
2. Configurar Storybook.
3. Definir los fundamentos: colores, tipografía, espaciados e iconos.
4. Construir los primeros componentes básicos.

## Requisitos

Para trabajar en el proyecto necesitas tener instalado:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) en su versión LTS, la 22.12 o una más reciente

Las instrucciones para instalar y arrancar el proyecto se añadirán aquí cuando el proyecto esté creado.
