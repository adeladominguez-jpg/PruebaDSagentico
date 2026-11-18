# Auditoría del design system

- **Fecha:** 18 de noviembre de 2026.
- **Versión revisada:** `main` en el commit `9f5aef5`.
- **Alcance:** los cuatro componentes de `src/components/` (Button, Input, Card y Badge). No entran la página de muestra de Tailwind (`src/App.tsx`) ni las historias de Storybook, salvo donde se indica.
- **Equivalencias:** en Tailwind, cada paso de espaciado vale 4 px. Por ejemplo, `px-3` son 12 px y `h-10` son 40 px.

## 1. Inventario de componentes

| Componente | Archivo | Variantes (`variant`) | Tamaños (`size`) | Otras opciones | Estados |
| --- | --- | --- | --- | --- | --- |
| Button | `src/components/Button.tsx` | `primary` (por defecto), `secondary`, `ghost`, `danger` | `sm` (32 px de alto), `md` (40 px, por defecto), `lg` (48 px). Si solo lleva icono, es un cuadrado de 32, 40 o 48 px | `icon`, `iconPosition` (`start` por defecto, o `end`), `fullWidth` | Normal, con el ratón encima, pulsado, foco con teclado y desactivado |
| Input | `src/components/Input.tsx` | No tiene | `sm` (32 px), `md` (40 px, por defecto), `lg` (48 px) | `label` (obligatoria), `hint`, `error`, `icon` | Normal, con el ratón encima, foco, con error y desactivado |
| Card | `src/components/Card.tsx` | `outlined` (por defecto, con borde), `elevated` (con sombra) | No tiene: el relleno es siempre de 20 px | `image`, `title`, `description`, `icon`, `footer` y el contenido de dentro | No tiene estados |
| Badge | `src/components/Badge.tsx` | `neutral` (por defecto), `info`, `success`, `warning`, `danger` | `sm` (20 px de alto), `md` (28 px, por defecto) | `icon` | No tiene estados |

- Los cuatro aceptan, además, las opciones normales de la pieza HTML en la que se basan: botón, campo de texto, bloque o texto en línea.
- Button e Input comparten la misma escala de alturas (32, 40 y 48 px), así que quedan alineados. Badge tiene su propia escala, con solo dos tamaños y sin `lg`. Card no tiene tamaños.
- Los cuatro tienen historia en Storybook, 32 en total: Button 10, Input 6, Card 8 y Badge 8. El estado de cada componente está en [`docs/componentes.md`](componentes.md).

## 2. Colores, espaciados y radios de Tailwind por componente

### Button

**Colores**

| Valor | Para qué |
| --- | --- |
| `teal-700` | Fondo de `primary`; texto de `ghost`; contorno de foco de `primary`, `secondary` y `ghost` |
| `teal-800` | Fondo de `primary` con el ratón encima |
| `teal-900` | Fondo de `primary` al pulsar |
| `teal-50` | Fondo de `ghost` con el ratón encima |
| `teal-100` | Fondo de `ghost` al pulsar |
| `red-700` | Fondo de `danger` y su contorno de foco |
| `red-800` | Fondo de `danger` con el ratón encima |
| `red-900` | Fondo de `danger` al pulsar |
| `white` | Texto de `primary` y `danger`; fondo de `secondary` |
| `slate-900` | Texto de `secondary` |
| `slate-300` | Borde de `secondary` |
| `slate-50` | Fondo de `secondary` con el ratón encima |
| `slate-100` | Fondo de `secondary` al pulsar |
| `transparent` | Fondo de `ghost` |

**Espaciados**

| Valor | Medida | Para qué |
| --- | --- | --- |
| `h-8` / `h-10` / `h-12` | 32 / 40 / 48 px | Alto en `sm` / `md` / `lg` |
| `px-3` / `px-4` / `px-5` | 12 / 16 / 20 px | Relleno a los lados en `sm` / `md` / `lg` |
| `gap-1.5` / `gap-2` / `gap-2` | 6 / 8 / 8 px | Separación entre icono y texto en `sm` / `md` / `lg` |
| `size-8` / `size-10` / `size-12` | 32 / 40 / 48 px | Botón con solo icono |
| `outline-offset-2` | 2 px | Separación entre el botón y su contorno de foco |
| `w-full` | Todo el ancho | Con `fullWidth` |

**Radios:** `rounded-lg` (8 px).

**Otros valores:** texto `text-sm` (14 px) en `sm` y `md`, y `text-base` (16 px) en `lg`; peso `font-medium`; contorno de foco `outline-2` (2 px); desactivado con `opacity-50` (50 %). Iconos de 16, 18 y 20 px.

### Input

**Colores**

| Valor | Para qué |
| --- | --- |
| `white` | Fondo del campo |
| `slate-900` | Texto escrito y etiqueta |
| `slate-400` | Texto de ejemplo (`placeholder`); borde con el ratón encima |
| `slate-300` | Borde normal |
| `slate-500` | Icono; texto del campo desactivado |
| `slate-100` | Fondo del campo desactivado |
| `slate-600` | Texto de ayuda (`hint`) |
| `teal-700` y `teal-700/20` | Borde y anillo (al 20 %) con el foco |
| `red-600` y `red-600/20` | Borde y anillo (al 20 %) cuando hay error |
| `red-700` | Mensaje de error y su icono |

**Espaciados**

| Valor | Medida | Para qué |
| --- | --- | --- |
| `h-8` / `h-10` / `h-12` | 32 / 40 / 48 px | Alto en `sm` / `md` / `lg` |
| `pr-2.5` / `pr-3` / `pr-3.5` | 10 / 12 / 14 px | Relleno a la derecha |
| `pl-2.5` / `pl-3` / `pl-3.5` | 10 / 12 / 14 px | Relleno a la izquierda, sin icono |
| `pl-8` / `pl-9` / `pl-10` | 32 / 36 / 40 px | Relleno a la izquierda, con icono |
| `left-2.5` / `left-3` / `left-3.5` | 10 / 12 / 14 px | Distancia del icono al borde izquierdo |
| `gap-1.5` | 6 px | Separación entre etiqueta, campo y mensaje |
| `gap-1` | 4 px | Separación entre el icono de error y su texto |
| `w-full` | Todo el ancho | El campo ocupa todo su bloque |

**Radios:** `rounded-lg` (8 px).

**Otros valores:** borde de 1 px; anillo de foco `ring-3` (3 px); texto `text-sm` (14 px) en `sm` y `md`, y `text-base` (16 px) en `lg`; etiqueta en `text-sm` y `font-medium`; mensaje en `text-sm`. Iconos de 16, 18 y 20 px; el de error, de 16 px.

### Card

**Colores**

| Valor | Para qué |
| --- | --- |
| `white` | Fondo (las dos variantes) |
| `slate-200` | Borde de `outlined`; línea que separa el pie |
| `slate-900/5` | Anillo muy suave (al 5 %) de `elevated` |
| `slate-900` | Texto general y título |
| `slate-600` | Descripción |
| `slate-100` | Fondo del hueco de la imagen mientras carga |
| `teal-50` | Fondo del cuadrado del icono |
| `teal-700` | Icono |

**Espaciados**

| Valor | Medida | Para qué |
| --- | --- | --- |
| `p-5` | 20 px | Relleno de la tarjeta |
| `gap-4` | 16 px | Separación entre cabecera, contenido y pie |
| `gap-3` | 12 px | Separación entre icono y título |
| `gap-1` | 4 px | Separación entre título y descripción |
| `gap-2` | 8 px | Separación entre los elementos del pie |
| `pt-4` | 16 px | Espacio entre la línea del pie y su contenido |
| `size-10` | 40 px | Cuadrado del icono |

**Radios:** `rounded-xl` (12 px) en la tarjeta; `rounded-lg` (8 px) en el cuadrado del icono.

**Otros valores:** sombra `shadow-md` y anillo `ring-1` (1 px) en `elevated`; bordes de 1 px; imagen en formato 16:9 (`aspect-video`); título en `text-base` (16 px) y `font-semibold`; descripción en `text-sm` (14 px). Icono de 20 px.

### Badge

**Colores**

| Variante | Fondo | Texto |
| --- | --- | --- |
| `neutral` | `slate-100` | `slate-700` |
| `info` | `sky-100` | `sky-800` |
| `success` | `green-100` | `green-800` |
| `warning` | `amber-100` | `amber-800` |
| `danger` | `red-100` | `red-800` |

**Espaciados**

| Valor | Medida | Para qué |
| --- | --- | --- |
| `px-2` / `px-2.5` | 8 / 10 px | Relleno a los lados en `sm` / `md` |
| `py-0.5` / `py-1` | 2 / 4 px | Relleno arriba y abajo en `sm` / `md` |
| `gap-1` / `gap-1.5` | 4 / 6 px | Separación entre icono y texto en `sm` / `md` |

**Radios:** `rounded-full` (completamente redondeado).

**Otros valores:** texto `text-xs` (12 px) en `sm` y `text-sm` (14 px) en `md`; peso `font-medium`. Iconos de 12 y 14 px.

### Resumen de lo que se usa

| Familia | Tonos | Dónde |
| --- | --- | --- |
| `teal` | 50, 100, 700, 800, 900 | Button, Input (foco) y Card (icono) |
| `slate` | 50, 100, 200, 300, 400, 500, 600, 700, 900 | Los cuatro componentes |
| `red` | 100, 600, 700, 800, 900 | Button `danger`, Input con error y Badge `danger` |
| `sky` | 100, 800 | Badge `info` |
| `green` | 100, 800 | Badge `success` |
| `amber` | 100, 800 | Badge `warning` |
| `white` y `transparent` | — | Button, Input y Card |

- **Radios:** `rounded-lg` (Button, Input y el icono de Card), `rounded-xl` (Card) y `rounded-full` (Badge).
- **Pasos de espaciado usados:** 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 8, 9, 10 y 12, es decir, de 2 a 48 px.

Diferencias entre componentes que conviene revisar:

- **Tres rojos para «error» o «peligro»:** `red-600` (borde del campo con error), `red-700` (botón `danger` y mensaje de error) y `red-800` (texto de Badge `danger`).
- **Dos grises de borde:** `slate-300` en Button e Input, y `slate-200` en Card.
- **Tres grises de texto secundario:** `slate-500` (icono de Input y texto desactivado), `slate-600` (ayuda de Input y descripción de Card) y `slate-700` (Badge `neutral`).
- **Dos formas de marcar el foco con el teclado:** Button usa un contorno de 2 px separado 2 px, e Input un anillo de 3 px al 20 % pegado al borde.

## 3. Valores escritos a mano dentro de los componentes

Ningún componente usa colores, medidas ni radios con nombre propio del design system: todos los valores están escritos directamente.

### Colores en hexadecimal

No hay ninguno dentro de los componentes.

Fuera de los componentes sí hay. Son copias de colores de Tailwind, de una versión anterior:

| Archivo y línea | Valor | Color de Tailwind al que corresponde |
| --- | --- | --- |
| `public/favicon.svg:2` y `:6` | `#0f766e` | `teal-700`, que en Tailwind v4 es `#00786f`: ligeramente distinto al de los botones |
| `public/favicon.svg:3` y `:5` | `#ffffff` | `white` |
| `public/favicon.svg:4` | `#fcd34d` | `amber-300`, que en Tailwind v4 es `#ffd230` |
| `src/stories/assets/revision-medica.svg:4` | `#f0fdfa` | `teal-50` |
| `src/stories/assets/revision-medica.svg:5` | `#e0f2fe` | `sky-100` |
| `src/stories/assets/revision-medica.svg:9` | `#ccfbf1` | `teal-100` |
| `src/stories/assets/revision-medica.svg:10` | `#bae6fd` | `sky-200` |
| `src/stories/assets/revision-medica.svg:11` | `#ffffff` | `white` |
| `src/stories/assets/revision-medica.svg:13` | `#0f766e` | `teal-700` (igual que en el favicon) |

### Píxeles

No hay valores en px escritos como texto, ni valores entre corchetes. Lo que sí hay son **tamaños de icono escritos como números**, que Tabler Icons interpreta como píxeles:

| Archivo y línea | Valor | Para qué |
| --- | --- | --- |
| `src/components/Button.tsx:49-51` | 16, 18, 20 | Icono del botón en `sm`, `md` y `lg` |
| `src/components/Input.tsx:50-52` | 16, 18, 20 | Icono del campo en `sm`, `md` y `lg`: los mismos valores que Button, repetidos |
| `src/components/Input.tsx:112` | 16 | Icono del mensaje de error |
| `src/components/Card.tsx:82` | 20 | Icono junto al título |
| `src/components/Badge.tsx:30-31` | 12, 14 | Icono de la etiqueta en `sm` y `md` |

### Colores de Tailwind

Hay 24 líneas con colores de Tailwind escritos directamente. El color principal, `teal-700`, aparece 8 veces en 5 líneas de 3 archivos; si algún día cambia, habría que cambiarlo en todos esos sitios.

| Archivo y línea | Clases | Para qué |
| --- | --- | --- |
| `src/components/Button.tsx:26` | `bg-teal-700` `text-white` `enabled:hover:bg-teal-800` `enabled:active:bg-teal-900` `focus-visible:outline-teal-700` | Variante `primary` |
| `src/components/Button.tsx:28` | `border-slate-300` `bg-white` `text-slate-900` `enabled:hover:bg-slate-50` `enabled:active:bg-slate-100` `focus-visible:outline-teal-700` | Variante `secondary` |
| `src/components/Button.tsx:30` | `bg-transparent` `text-teal-700` `enabled:hover:bg-teal-50` `enabled:active:bg-teal-100` `focus-visible:outline-teal-700` | Variante `ghost` |
| `src/components/Button.tsx:32` | `bg-red-700` `text-white` `enabled:hover:bg-red-800` `enabled:active:bg-red-900` `focus-visible:outline-red-700` | Variante `danger` |
| `src/components/Input.tsx:71` | `bg-white` `text-slate-900` `placeholder:text-slate-400` | Campo |
| `src/components/Input.tsx:73` | `disabled:bg-slate-100` `disabled:text-slate-500` | Campo desactivado |
| `src/components/Input.tsx:75` | `border-red-600` `focus:border-red-600` `focus:ring-red-600/20` | Campo con error |
| `src/components/Input.tsx:76` | `border-slate-300` `enabled:hover:border-slate-400` `focus:border-teal-700` `focus:ring-teal-700/20` | Campo normal |
| `src/components/Input.tsx:83` | `text-slate-900` | Etiqueta |
| `src/components/Input.tsx:91` | `text-slate-500` | Icono |
| `src/components/Input.tsx:107` | `text-red-700` | Mensaje de error |
| `src/components/Input.tsx:108` | `text-slate-600` | Texto de ayuda |
| `src/components/Card.tsx:35` | `border-slate-200` `bg-white` | Variante `outlined` |
| `src/components/Card.tsx:36` | `bg-white` `ring-slate-900/5` | Variante `elevated` |
| `src/components/Card.tsx:55` | `text-slate-900` | Texto de la tarjeta |
| `src/components/Card.tsx:67` | `bg-slate-100` | Hueco de la imagen |
| `src/components/Card.tsx:81` | `bg-teal-50` `text-teal-700` | Cuadrado del icono |
| `src/components/Card.tsx:88` | `text-slate-600` | Descripción |
| `src/components/Card.tsx:95` | `border-slate-200` | Línea del pie |
| `src/components/Badge.tsx:17` | `bg-slate-100` `text-slate-700` | Variante `neutral` |
| `src/components/Badge.tsx:18` | `bg-sky-100` `text-sky-800` | Variante `info` |
| `src/components/Badge.tsx:19` | `bg-green-100` `text-green-800` | Variante `success` |
| `src/components/Badge.tsx:20` | `bg-amber-100` `text-amber-800` | Variante `warning` |
| `src/components/Badge.tsx:21` | `bg-red-100` `text-red-800` | Variante `danger` |

### Otros valores fijos

Son valores de la escala de Tailwind, pero están escritos a mano en cada componente y serían candidatos a tener nombre propio:

| Archivo y línea | Valor | Para qué |
| --- | --- | --- |
| `src/components/Button.tsx:36-38` | `h-8` `h-10` `h-12` | Alturas de botón |
| `src/components/Input.tsx:25-27` | `h-8` `h-10` `h-12` | Alturas de campo: las mismas que Button, repetidas |
| `src/components/Button.tsx:68` | `rounded-lg` | Radio del botón |
| `src/components/Input.tsx:71` | `rounded-lg` | Radio del campo |
| `src/components/Card.tsx:55` | `rounded-xl` | Radio de la tarjeta |
| `src/components/Card.tsx:81` | `rounded-lg` | Radio del cuadrado del icono |
| `src/components/Badge.tsx:43` | `rounded-full` | Radio de la etiqueta |
| `src/components/Button.tsx:69` | `outline-2` `outline-offset-2` | Contorno de foco |
| `src/components/Button.tsx:70` | `opacity-50` | Botón desactivado |
| `src/components/Input.tsx:72` | `ring-3` | Anillo de foco |
| `src/components/Card.tsx:36` | `shadow-md` `ring-1` | Sombra de `elevated` |
| `src/components/Card.tsx:67` | `aspect-video` | Proporción 16:9 de la imagen |
| `src/components/Card.tsx:77` | `p-5` `gap-4` | Relleno y separaciones de la tarjeta |

Las historias de Storybook también tienen algunos valores, que solo sirven para presentar los componentes: `max-w-sm` en `src/components/Button.stories.tsx:113` y `src/components/Input.stories.tsx:24`, `max-w-md` en `src/components/Card.stories.tsx:34`, y `text-slate-700` en `src/components/Card.stories.tsx:133`.

## 4. Nombres de props y variantes que un agente no adivinaría

| Componente | Un agente probaría… | Lo que hay que usar | Por qué confunde |
| --- | --- | --- | --- |
| Button | `variant="outline"` o `"outlined"` | `variant="secondary"` | El botón blanco con borde se llama `secondary`. Además, `outlined` sí existe, pero en Card. |
| Button | `variant="text"`, `"link"` o `"tertiary"` | `variant="ghost"` | En Storybook su historia se llama «Solo texto». |
| Button | `variant="destructive"` o `"error"` | `variant="danger"` | Cada librería lo llama de una forma. |
| Button | `iconPosition="left"` / `"right"`, `iconRight` o `trailingIcon` | `iconPosition="start"` / `"end"` | Se usa «inicio» y «final» en lugar de izquierda y derecha. |
| Button | `block` o `width="full"` | `fullWidth` | — |
| Button | `iconOnly` | No existe | Un botón es cuadrado solo si lleva `icon` y no lleva texto. Necesita `aria-label`. Un texto vacío (`""`) cuenta como texto. |
| Button | Que dentro de un formulario lo envíe | `type="submit"` | Por defecto es `type="button"` y no envía el formulario, al revés que un botón HTML normal. |
| Todos | `icon={<IconPlus />}` o `icon="plus"` | `icon={IconPlus}` | Se pasa el icono de Tabler sin los símbolos `< />`: ni un elemento ya dibujado ni el nombre en texto. |
| Input | `helperText`, `helper` o `description` | `hint` | — |
| Input | `error={true}`, `invalid` o `status="error"` | `error="Texto del error"` | `error` es el mensaje, no un sí o no. Con `true` da error de tipos. |
| Input | `size={20}`, el tamaño de HTML (número de caracteres) | `size="sm"` / `"md"` / `"lg"` | Sustituye a la opción `size` normal de los campos HTML. |
| Input | `className` para la caja de texto | `className` va al bloque entero | Se aplica a la etiqueta, el campo y el mensaje juntos. No hay forma de dar clases solo a la caja. |
| Input | Sin `label`, o con solo `placeholder` o `aria-label` | `label` | Es obligatoria y siempre se ve. No se puede ocultar. |
| Input | `variant` | No existe | Input no tiene variantes, solo tamaños. |
| Card | `variant="bordered"`, `"shadow"`, `"raised"` o `"default"` | `variant="outlined"` / `"elevated"` | — |
| Card | `variant="image"` | `image` | La imagen es una opción aparte, no una variante, para poder combinarla con borde o con sombra. |
| Card | `image="foto.jpg"`, `imageSrc`, `imageAlt`, `media` o `cover` | `image={{ src: '…', alt: '…' }}` | Es un objeto con dos datos, y `alt` es obligatorio. |
| Card | `subtitle` o `subheading` | `description` | — |
| Card | `actions` | `footer` | — |
| Card | `title` como texto de ayuda al pasar el ratón | `title` es el título visible | Sustituye a la opción `title` normal de HTML. |
| Card | `as="h2"` o `headingLevel` | No existe | El título siempre es un encabezado de nivel 3 (`h3`). |
| Card | `size` o `padding` | No existe | El relleno es siempre de 20 px. |
| Badge | `color="green"`, `tone`, `status` o `type` | `variant` | El color se elige por su significado, con `variant`. |
| Badge | `variant="error"`, `"default"`, `"primary"`, `"secondary"` o `"positive"` | `danger`, `neutral`, `info`, `success` o `warning` | — |
| Badge | `size="lg"` | Solo `sm` y `md` | Button e Input tienen tres tamaños; Badge, dos. |
| Varios | `error` en Button o Badge, o `danger` en Input | `danger` en Button y Badge; `error` (texto) en Input | Lo mismo se llama de dos formas según el componente. |
| Todos | `import Button from './components/Button'` o `from './components'` | `import { Button } from './components/Button'` | Se importan por su nombre, entre llaves, y no hay un archivo que los reúna todos. |
| Todos | Clases como `bg-primary`, `text-danger` o `border-default` | Colores de Tailwind directos (`bg-teal-700`, `text-red-700`…) | Esos nombres no existen en el tema. Tailwind no da error: simplemente no pinta nada. |
| Storybook | Buscar la historia por el valor de `variant` | Nombres en español | Las historias se llaman en español y los valores están en inglés: «Solo texto» es `ghost`, «Peligro» es `danger`, «Con borde» es `outlined`, «Con sombra» es `elevated`, «Éxito» es `success` y «Aviso» es `warning`. |
