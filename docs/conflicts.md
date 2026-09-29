# Conflictos

Este documento registra los conflictos de merge ocurridos en el repositorio **MyCdS-Proyecto (CineScope)** durante el desarrollo colaborativo. Los conflictos se produjeron cuando diferentes ramas modificaron simultáneamente archivos o secciones relacionadas del proyecto, lo que impidió que Git realizara la integración de forma automática.

Durante el desarrollo se identificaron **2 merges con conflicto**, los cuales fueron revisados y resueltos manualmente antes de integrar las funcionalidades correspondientes a la rama `develop`.

| # | Commit de resolución | Rama origen → rama destino | Archivos en conflicto |
|---|---|---|---|
| 1 | `a6d4b80` | `develop` (página-inicio) → `feature/tema-responsive` | `assets/js/app.js`, `css/main.css`, `index.html` |
| 2 | `a898f0e` | `develop` (tema-responsive) → `feature/estilos-generales` | `assets/scss/abstracts/_variables.scss` |

---

## Conflicto 1: navegación, tema e inicialización de `app.js`

### Ramas involucradas

- `feature/tema-responsive` (rama de trabajo, último commit `a10ee86`).
- `develop`, que ya incluía la fusión de `feature/pagina-inicio` (PR #2, commit `3538e70`).
- Ancestro común: `65a99bd` (estructura base).

### Archivos afectados

- `assets/js/app.js`
- `css/main.css`
- `index.html`

### Causa

El conflicto se produjo debido a que ambas ramas partieron de la estructura base del proyecto y posteriormente realizaron modificaciones sobre los mismos archivos y bloques de código de manera independiente.

La rama `feature/tema-responsive` incorporó un encabezado propio mediante `.site-header`, junto con un menú hamburguesa y un selector de tema. Por otra parte, la rama `feature/pagina-inicio`, que ya se encontraba integrada en `develop`, incorporó un dashboard con una barra de navegación de Bootstrap mediante `.navbar`, un hero y tarjetas de resumen.

Como consecuencia, ambas ramas modificaron el mismo encabezado de `index.html`, el bloque de inicialización de `app.js` y diferentes reglas ubicadas en las mismas secciones de `css/main.css`. Git no pudo determinar automáticamente cuáles cambios debían conservarse, por lo que fue necesaria una resolución manual.

### Cambios realizados por cada rama

| Archivo | `feature/tema-responsive` | `develop` (página-inicio) |
|---|---|---|
| `app.js` | Importa `loadTheme`, `initThemeToggle`, `initMobileNav` y los ejecuta antes de `loadCatalog()` | Importa `getFavorites` y `loadDashboard`; llama `loadCatalog().then(... loadDashboard ...)` |
| `index.html` | `<header class="site-header">` con botón hamburguesa, enlaces y `theme-toggle` | `<nav class="navbar navbar-expand-lg dashboard-nav">` de Bootstrap y `<main class="dashboard-shell">` |
| `css/main.css` | Variables `[data-theme=light/dark]` y estilos `.site-header*` | Variables `:root` correspondientes a la paleta y estilos del dashboard |

### Resolución

Para resolver el conflicto se decidió conservar los aportes de ambas ramas, debido a que las funcionalidades desarrolladas eran necesarias y podían integrarse entre sí.

- **`app.js`:** se combinaron los imports de ambas ramas y se organizó la inicialización de las funcionalidades. Primero se configuraron el tema y la navegación móvil y posteriormente se mantuvo la carga del catálogo y del dashboard.
- **`index.html`:** se conservó la barra de navegación de Bootstrap utilizada por el dashboard y se integró dentro de ella el botón `theme-toggle`, permitiendo mantener disponible el selector de tema.
- **`css/main.css`:** se conservaron las variables relacionadas con los temas y los estilos correspondientes al dashboard. Finalmente, se eliminaron los marcadores generados por Git durante el conflicto.

De esta manera, ninguna de las funcionalidades principales fue descartada durante la resolución.

### Comandos utilizados

```bash
git checkout feature/tema-responsive
git pull origin develop
git status
git add assets/js/app.js css/main.css index.html
git commit -m "merge: resolver conflicto de navegacion, tema e inicializacion de app.js"
git push origin feature/tema-responsive
```

### Resultado

El merge fue completado en el commit `a6d4b80` y posteriormente integrado a `develop` mediante el PR #7.

Como resultado de la resolución, el dashboard mantuvo la navegación de Bootstrap junto con el selector de tema, mientras que las funcionalidades correspondientes al tema y la navegación móvil continuaron siendo inicializadas desde `app.js`.

### Aprendizaje

Este conflicto permitió identificar la importancia de coordinar las modificaciones realizadas sobre archivos compartidos. Cuando diferentes integrantes trabajan simultáneamente sobre elementos centrales, como el encabezado o `app.js`, existe una mayor posibilidad de generar conflictos.

También se comprobó que resolver un conflicto no necesariamente significa seleccionar los cambios de una sola rama. En este caso fue necesario analizar ambos aportes y combinarlos para conservar todas las funcionalidades.

Además, mantener las ramas de trabajo actualizadas periódicamente con `develop` permite detectar los conflictos con anticipación y facilita su resolución.

---

## Conflicto 2: variables de Sass en `_variables.scss`

### Ramas involucradas

- `feature/estilos-generales` (commit `aae33d8`).
- `develop`, con `feature/tema-responsive` ya fusionada (PR #7, commit `14e1725`).
- Ancestro común: `ac7713f`.

### Archivos afectados

- `assets/scss/abstracts/_variables.scss`

### Causa

El conflicto ocurrió porque ambas ramas agregaron nuevas variables en la misma sección de `_variables.scss`, específicamente después de `$color-text`.

La rama `feature/estilos-generales` incorporó variables relacionadas con colores, tipografías y propiedades generales de la interfaz. Por otra parte, `feature/tema-responsive`, que ya se encontraba integrada en `develop`, incorporó variables correspondientes a las paletas de los temas claro y oscuro y a los puntos de quiebre utilizados para el diseño responsive.

Aunque las variables agregadas eran diferentes, fueron insertadas en la misma posición del archivo. Por esta razón, Git no pudo determinar automáticamente el orden en el que debían mantenerse los cambios.

### Cambios realizados por cada rama

| Rama | Variables agregadas |
|---|---|
| `feature/estilos-generales` | `$color-text-secondary`, `$color-border`, `$font-primary`, `$font-size-small/base/large/title`, `$border-radius`, `$transition` |
| `develop` (tema-responsive) | `$color-light-*`, `$color-dark-*`, `$breakpoint-mobile`, `$breakpoint-tablet`, `$breakpoint-desktop` |

### Resolución

Se verificó que los bloques de variables agregados por las dos ramas fueran independientes y que no existieran nombres duplicados.

Debido a que ambos grupos de variables eran necesarios para el funcionamiento de los estilos, se decidió conservarlos. Primero se mantuvieron las variables generales de la interfaz y posteriormente las relacionadas con los temas y los breakpoints, separándolas para conservar una estructura organizada dentro del archivo.

No fue necesario descartar variables de ninguna de las ramas.

### Comandos utilizados

```bash
git checkout feature/estilos-generales
git merge develop
git status
git add assets/scss/abstracts/_variables.scss
git commit -m "merge: resuelve conflicto de estilos con develop"
git push origin feature/estilos-generales
```

### Resultado

El merge fue completado en el commit `a898f0e` y posteriormente fusionado a `develop` mediante el PR #4 (`ef912b1`).

Como resultado, `_variables.scss` conservó tanto las variables generales utilizadas por los estilos de la interfaz como las variables correspondientes a los temas y al diseño responsive.

### Aprendizaje

Este conflicto permitió comprobar que, cuando dos ramas únicamente agregan código independiente en una misma sección, una solución adecuada puede ser conservar ambos aportes después de verificar que no existan elementos duplicados o incompatibles.

También se identificó la importancia de revisar los nombres de las variables antes de completar la resolución y comprobar posteriormente la compilación de Sass, con el objetivo de verificar que las modificaciones realizadas no generen errores en los estilos.

---

## Conclusión

Los conflictos encontrados durante el desarrollo fueron consecuencia del trabajo simultáneo realizado sobre archivos compartidos. Su resolución requirió analizar los cambios de cada rama y determinar la forma adecuada de conservar las funcionalidades desarrolladas por los diferentes integrantes.

La resolución manual permitió integrar correctamente los cambios sin eliminar funcionalidades necesarias. Además, estos casos permitieron establecer la importancia de mantener las ramas actualizadas con `develop`, coordinar las modificaciones sobre archivos comunes y verificar el funcionamiento del proyecto después de resolver cada conflicto.