# Arquitectura de CineScope

CineScope es una aplicación web estática organizada por responsabilidades. Las vistas se implementan con HTML, la lógica se divide en módulos JavaScript ES, los estilos se mantienen en SCSS/CSS y `data/catalog.json` funciona como fuente de datos del catálogo.

## Organización del proyecto

La estructura lógica del repositorio se encuentra organizada de la siguiente manera:

```
assets/js/           Lógica modular de la aplicación
assets/scss/         Fuentes de estilos Sass
css/main.css         Estilos utilizados por el navegador
data/catalog.json    Datos del catálogo
docs/                Evidencias y documentación colaborativa
scripts/             Herramientas auxiliares en Python
tests/               Pruebas automáticas y manuales
index.html           Página principal
catalog.html         Catálogo
favorites.html       Favoritos
team.html            Información del equipo
```

La estructura completa de carpetas del repositorio es:

```
cinescope/
├── assets/
│   ├── images/
│   ├── js/              -> módulos de JavaScript
│   └── scss/            -> estilos fuente
├── css/
│   └── main.css         -> hoja de estilos
├── data/
│   └── catalog.json     -> fuente de datos del catálogo
├── docs/                -> documentación
├── scripts/
│   └── validate_catalog.py
├── tests/
├── index.html, catalog.html, favorites.html, team.html
└── package.json, .gitignore, LICENSE
```

Las funcionalidades se desarrollaron en ramas `feature/*` y se integraron en `develop` mediante pull requests. El historial de integraciones se encuentra en `docs/pull-requests.md`.

## Tecnologías

| Tecnología | Utilización |
|---|---|
| HTML5 | Estructura de las páginas |
| Sass / CSS | Estilos, temas y diseño adaptable |
| JavaScript (módulos ES) | Lógica principal: catálogo, filtros, favoritos y tema |
| Python | Validación del archivo de datos del catálogo |

Además, `index.html` incorpora **Bootstrap** mediante CSS y JavaScript vía CDN para determinados componentes de la interfaz, como el navbar y el panel de resumen o dashboard. Estos componentes se combinan con los estilos propios definidos en `css/main.css`.

## Páginas principales

- **`index.html`**: página de inicio o dashboard. Muestra un resumen del catálogo, incluyendo el número de títulos, películas, series y favoritos, además de contenido destacado. Utiliza un navbar de Bootstrap con el botón de cambio de tema integrado.
- **`catalog.html`**: presenta el catálogo completo de películas y series e integra las funcionalidades de búsqueda, filtros, ordenamiento y visualización de tarjetas.
- **`favorites.html`**: muestra los títulos marcados como favoritos y permite gestionar su eliminación.
- **`team.html`**: presenta la información correspondiente al equipo encargado del desarrollo del proyecto.

Las cuatro páginas comparten elementos de navegación y mantienen una estructura visual consistente. El selector de tema permite alternar entre los modos claro y oscuro, mientras que el menú adaptable facilita la navegación en dispositivos móviles.

Las páginas utilizan los estilos definidos en `css/main.css` y cargan la lógica principal de la aplicación desde `assets/js/app.js`.

## Módulos JavaScript

Los archivos ubicados dentro de `assets/js/` se organizan de acuerdo con las diferentes responsabilidades de la aplicación:

| Archivo | Responsabilidad |
|---|---|
| `app.js` | Punto de entrada encargado de importar e inicializar los módulos necesarios en cada página. |
| `catalog.js` | Carga el catálogo desde `data/catalog.json` y permite utilizar sus datos dentro de la aplicación. |
| `filters.js` | Gestiona la búsqueda por título, los filtros por tipo, género y año, además del ordenamiento. |
| `favorites.js` | Permite agregar, eliminar y consultar los elementos almacenados como favoritos. |
| `storage.js` | Gestiona la comunicación con `localStorage` para almacenar información persistente. |
| `modal.js` | Expone utilidades básicas para abrir y cerrar elementos `dialog`. |
| `theme.js` | Gestiona los temas claro y oscuro, su aplicación y el almacenamiento de la preferencia seleccionada. |
| `nav.js` | Controla el comportamiento del menú de navegación en dispositivos móviles. |
| `dashboard.js` | Realiza el cálculo y renderizado del resumen y las estadísticas mostradas en `index.html`. |
| `validation.js` | Contiene una validación auxiliar para comprobar títulos en objetos de catálogo. |

`app.js` funciona como punto principal de inicialización de la aplicación, debido a que desde este archivo se importan y ejecutan los diferentes módulos. Por esta razón, puede ser uno de los archivos con mayor posibilidad de presentar conflictos de fusión cuando diferentes ramas modifican simultáneamente la inicialización de nuevas funcionalidades.

## Gestión de datos

La información del catálogo se almacena en `data/catalog.json` dentro de la propiedad `items`, que contiene seis objetos. Cada registro utiliza campos como `id`, `titulo`, `tipo`, `anio`, `generos`, `director`, `reparto`, `duracion`, `temporadas`, `calificacion`, `sinopsis` e `imagen`.

El campo `tipo` permite identificar si el contenido corresponde a una `pelicula` o una `serie`, mientras que determinados campos, como `duracion` o `temporadas`, pueden utilizarse según el tipo de contenido almacenado.

El módulo `catalog.js` utiliza `fetch()` para cargar la información del archivo JSON cuando se inicia la página correspondiente. Posteriormente, `filters.js` trabaja con estos datos para realizar operaciones de búsqueda, filtrado y ordenamiento.

Por otra parte, `scripts/validate_catalog.py` comprueba que el archivo contenga una lista `items` válida y muestra la cantidad de registros disponibles.

## Estilos

Los archivos fuente utilizados para definir los estilos se encuentran dentro de `assets/scss/` y se organizan de acuerdo con su responsabilidad:

- `abstracts/`: contiene variables, como colores y breakpoints, además de mixins reutilizables.
- `themes/`: contiene la definición de las paletas correspondientes a los temas claro y oscuro mediante variables CSS.
- `components/`: contiene los estilos asociados a componentes reutilizables, como botones, tarjetas y ventanas modales.
- `layout/`: contiene los estilos relacionados con la estructura general de las páginas, como el header, catálogo y footer.
- `main.scss`: funciona como punto de entrada para integrar los diferentes archivos parciales de estilos.

Los archivos SCSS se compilan en `css/main.css`, que corresponde a la hoja de estilos utilizada por las páginas HTML del proyecto.

Además, `index.html` incorpora Bootstrap mediante CSS y JavaScript vía CDN. Debido a esto, `css/main.css` también puede incluir ajustes específicos sobre determinadas clases de Bootstrap para mantener una apariencia consistente con el diseño general y los temas claro y oscuro de CineScope.

## Persistencia

La persistencia de información se realiza en el navegador mediante `localStorage`, permitiendo conservar determinados datos incluso después de recargar o cerrar la página.

El módulo `storage.js` centraliza las operaciones relacionadas con el almacenamiento y recuperación de esta información.

- **Tema seleccionado:** la preferencia del tema se almacena para aplicarla nuevamente al cargar las páginas. Si no existe una selección previa, la aplicación puede utilizar la preferencia establecida en el sistema del usuario.
- **Favoritos:** los títulos seleccionados como favoritos se almacenan para conservar la lista entre diferentes sesiones y evitar registros duplicados.
- **Filtros y orden:** se mantienen en el estado de la página y se aplican sobre la colección cargada; no se almacenan actualmente.

El uso de `localStorage` permite implementar persistencia sin necesidad de una base de datos o servidor, manteniendo la arquitectura estática de la aplicación.