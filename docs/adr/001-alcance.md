# ADR-001 · Alcance y principios

- **Creado por:** Adela
- **Fecha:** 18 de noviembre de 2026

Un ADR («registro de decisión de arquitectura») apunta una decisión importante del proyecto: por qué se tomó, qué se decidió y qué cambia a partir de ahora.

## Estado

**Aceptado.** Es la primera decisión del design system. Las siguientes la tendrán como punto de partida.

## Contexto

PruebaDSagentico es el design system de **Faro**, una app de salud. En Faro, cada persona consulta su medicación, sus análisis y sus citas, habla con un asistente de IA sobre cómo se siente y sigue sus objetivos en un **panel de datos y métricas**. Faro tiene **una marca** y es una app **web hecha con React**. Sus componentes son **propios, hechos desde cero**; los estilos se ponen con **Tailwind** y los iconos son de **Tabler Icons**.

Hasta ahora el design system ha crecido sin reglas. La auditoría (`docs/audit.md`) muestra lo que eso ha provocado:

- **No hay valores con nombre propio.** Los cuatro componentes (Button, Input, Card y Badge) usan colores, medidas y radios de Tailwind escritos a mano: 24 líneas con colores en los componentes y 14 más en la pantalla del asistente. El color principal, `teal-700`, aparece en 12 sitios.
- **Hay incoherencias.** Hay tres rojos distintos para «error», dos grises de borde, tres grises de texto secundario y dos formas de marcar el foco con el teclado. Además, el favicon usa un verde azulado algo distinto al de los botones.
- **Los nombres son difíciles de adivinar** y mezclan idiomas: `ghost`, `danger` frente a `error`, `iconPosition="start"`, `author: 'persona'`…
- **Prueba sin reglas.** Al hacer la pantalla del asistente sin reglas, se copiaron 5 piezas a mano en lugar de usar componentes, aparecieron valores fuera de la escala de Tailwind y se inventaron nombres nuevos.

La foto del design system antes de esta decisión está guardada en la rama `antes`, para compararla en los evals de la clase 15.

## Decisión

### Alcance

**Qué es el design system:** el conjunto de valores con nombre propio (los *tokens*), componentes y reglas con que se construyen todas las pantallas web de Faro.

- **Tecnología:** React con TypeScript sobre Vite, componentes propios hechos desde cero, Tailwind para los estilos y Tabler Icons para los iconos. No se usan librerías de componentes.
- **Tokens:** se definen en el tema de Tailwind, para que se usen como clases normales (por ejemplo, un token de color `principal` se usa como `bg-principal`). Hay tokens de color, espaciado, radio, tipografía, sombra y tamaño de icono.
- **Marca:**
  - El color principal es el verde azulado `teal-700` de Tailwind (`#00786f`).
  - La tipografía es la del sistema de cada dispositivo, la que Tailwind trae por defecto: San Francisco en Apple, Segoe UI en Windows y Roboto en Android.
- **Entra en la primera versión:**
  - los tokens;
  - los componentes base: botón, campo de texto, tarjeta y etiqueta;
  - los **gráficos del panel de datos y métricas**;
  - las **piezas del asistente**: burbuja de mensaje y avatar;
  - el **modo oscuro**;
  - que todo funcione igual de bien **en el móvil y en el ordenador**.
- **No entra:**
  - las apps nativas para iPhone o Android;
  - la lógica de la app: datos, cuentas y el agente de IA;
  - los textos de cada pantalla.
- **Accesibilidad:** todo cumple el nivel **AA de las pautas WCAG 2.2**.
- **Idioma:** todos los nombres propios del design system van en **español**: tokens, componentes, opciones (props), variantes y archivos.
  - Quedan en inglés solo los nombres que vienen de fuera y no se pueden cambiar: las opciones de HTML y React (`onClick`, `disabled`, `className`…), las clases de Tailwind y los nombres de los iconos de Tabler (`IconPill`…).

### Principios

Cada principio se puede comprobar: dice qué se mira y qué resultado tiene que salir.

**1. Todo valor visual sale de un token.**
Los componentes no escriben colores, medidas, radios, tamaños de texto, sombras ni tamaños de icono: usan siempre un token.
*Cómo se comprueba:* en `src/components/` y `src/screens/` hay **0 resultados** al buscar:
- colores de la paleta de Tailwind (como `teal-700` o `slate-100`);
- colores en hexadecimal;
- valores entre corchetes (como `max-w-[85%]`);
- tamaños de icono escritos como número.

**2. Las pantallas solo colocan componentes.**
Una pantalla decide dónde va cada componente (separaciones entre bloques, columnas y anchos), pero no le da estilo. Si a una pantalla le falta una pieza, no se copia a mano: se crea el componente en `src/components/`, con su historia en Storybook.
*Cómo se comprueba:* en `src/screens/` no aparece ninguna clase de color, borde, radio, sombra, tipografía ni tamaño de texto. Tampoco aparecen piezas HTML que ya existen como componente, como `<button>` o `<input>`.

**3. Todo cumple WCAG 2.2 AA.**
*Cómo se comprueba:*
- **Contraste:** el texto normal tiene al menos 4,5:1 con su fondo, y el texto grande (24 px, o 18,66 px en negrita) al menos 3:1. Los bordes que sirven para reconocer un control, los iconos que informan y la marca del foco tienen al menos 3:1.
- **Teclado:** todo se puede usar solo con el teclado, y el foco siempre se ve.
- **Nombres para lectores de pantalla:** cada campo y cada botón tiene un nombre que pueden leer, aunque no se vea.
- **Tamaño mínimo:** todo lo que se pulsa mide al menos 24 × 24 px.
- **Revisión automática:** cada historia de Storybook pasa una revisión automática de accesibilidad sin errores.

**4. Funciona en claro y en oscuro, y en móvil y en ordenador.**
Cada token de color tiene un valor para el modo claro y otro para el oscuro. Los componentes nunca eligen colores según el modo: el cambio viene de los tokens.
*Cómo se comprueba:*
- Cada token de color está definido dos veces, una para cada modo.
- En `src/components/` no aparece ninguna clase `dark:`.
- Cada historia se ve bien en los dos modos y a 390 px y 1280 px de ancho, sin desplazamiento lateral.

**5. Un nombre por idea, en español.**
Una misma idea se llama igual en todos los componentes: por ejemplo, un solo nombre para «peligro», y no `danger` en uno y `error` en otro. Cada nombre propio está apuntado en un glosario, `docs/glosario.md`, con lo que significa.
*Cómo se comprueba:* todos los tokens, componentes, opciones y variantes aparecen en el glosario y están en español. Las únicas palabras en inglés son las que vienen de HTML, React, Tailwind o Tabler.

## Consecuencias

**Lo que ganamos**

- **Cambiar el color de la marca** será cambiar un token, en lugar de buscarlo en 12 sitios.
- **Desaparecen las incoherencias:** habrá un solo rojo de peligro, un solo gris de borde y una sola forma de marcar el foco.
- **El modo oscuro sale de los tokens,** sin rehacer cada componente.
- **Un agente puede seguir las reglas y comprobar que las cumple** con búsquedas y revisiones automáticas, sin tener que adivinar nombres.

**El trabajo que hay que hacer**

- **Crear los tokens** en el tema de Tailwind, cada color con su valor claro y oscuro. Esto incluye elegir el valor oscuro del color de marca: `teal-700` vale como fondo de un botón con texto blanco (5,4:1), pero como color de texto sobre un fondo oscuro se queda en 3,3–3,8:1, por debajo del 4,5:1 que pide AA.
- **Rehacer los cuatro componentes** para que usen los tokens.
- **Renombrar todo a español:**
  - los componentes, sus opciones y sus variantes, por ejemplo `variant` y `size`;
  - las historias de Storybook y `docs/componentes.md`.
  - Antes hay que decidir cómo se escriben las tildes y la eñe en el código: por ejemplo, `tamaño` o `tamano`.
- **Escribir el glosario** `docs/glosario.md`.
- **Corregir lo que hoy no llega a WCAG 2.2 AA.** Por ejemplo, el borde de los campos (`slate-300` sobre blanco) da 1,5:1 y necesita 3:1. Además, Input tiene que permitir ocultar su etiqueta a la vista sin quitársela a los lectores de pantalla, como pide un chat.
- **Añadir a Storybook una revisión automática de accesibilidad.**
- **Crear los componentes nuevos:** los gráficos del panel, la burbuja de mensaje y el avatar. Después, rehacer la pantalla del asistente con ellos. Habrá que decidir en otro ADR si los gráficos se dibujan desde cero o con una librería que solo dibuje y use nuestros tokens.
- **Igualar el color del favicon** con el token de marca.
- **Añadir estos principios a `AGENTS.md`,** para que cualquier agente los lea antes de cada tarea.

**Lo que no cambia**

- Las opciones que vienen de HTML y React, las clases de Tailwind y los nombres de los iconos de Tabler siguen en inglés, así que la mezcla de idiomas no desaparece del todo: la regla se aplica a nuestros nombres.
- La rama `antes` no se toca: es la referencia para comparar en los evals de la clase 15.
