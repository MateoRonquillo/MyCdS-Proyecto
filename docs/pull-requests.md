# Pull requests

En esta sección se presenta el registro de los pull requests realizados durante el desarrollo del proyecto CineScope. Se identifican las ramas involucradas, los responsables de cada funcionalidad, los revisores asignados y el estado final de las integraciones realizadas sobre la rama `develop`.

El uso de pull requests permitió establecer un proceso de revisión antes de incorporar los cambios al proyecto, facilitando la detección de observaciones, posibles errores y conflictos entre las diferentes ramas de trabajo.

## Pull requests registrados

| PR | Título | Autor (GitHub) | Rama origen | Destino | Estado |
|---|---|---|---|---|---|
| #1 | chore(structure): agrega la estructura básica del proyecto | Mateo Ronquillo (MateoRonquillo) | feature/estructura-base | develop | Fusionado |
| #2 | feat(home): agrega la página de inicio y navegación | Mateo Ronquillo (MateoRonquillo) | feature/pagina-inicio | develop | Fusionado |
| #3 | chore(gitignore): configurar archivos ignorados del proyecto | David Cundulli (davids123456) | feature/configuracion-gitignore | develop | Fusionado |
| #4 | style(ui): incorporar estilos generales de la interfaz | David Cundulli (davids123456) | feature/estilos-generales | develop | Fusionado (Conflicto 2 resuelto) |
| #5 | feat(catalog): implementa catálogo de películas y series | Estiven Chiluisa (Estiven453) | feature/catalogo-tarjetas | develop | Fusionado |
| #6 | feat(buscador): implementar búsqueda en tiempo real | David Rodriguez (Davu15) | feature/buscador | develop | Fusionado |
| #7 | feat(theme): implementar tema y diseño responsive | Lizbeth Ramos (Lizvgbhjn) | feature/tema-responsive | develop | Fusionado (Conflicto 1 resuelto) |
| #8 | feat(favorites): implementar gestión de favoritos | Jeampierre Ortiz (JeampyON) | feature/gestion-favorito | develop | Fusionado |
| #9 | feat(storage): implementar persistencia completa de favoritos | Jeampierre Ortiz (JeampyON) | feature/persistencia-favoritos | develop | Fusionado |
| #10 | feat(details): implementar vista detallada del contenido | Estiven Chiluisa (Estiven453) | feature/detalle-contenido | develop | Fusionado |
| #11 | feat(filters): implementar filtros y ordenamiento | David Rodriguez (Davu15) | feature/filtros-ordenamiento | develop | Fusionado |
| #12 | docs(project): completar documentación del proyecto | Lizbeth Ramos (Lizvgbhjn) | feature/documentacion-proyecto | develop | Fusionado |

## Revisiones

Para garantizar la correcta integración de los cambios, cada integrante tuvo asignados dos revisores encargados de verificar sus pull requests antes de ser fusionados con la rama `develop`.

| Integrante | Nombre | Revisores asignados |
|---|---|---|
| Integrante 1 | Mateo Ronquillo | David Rodriguez y Jeampierre Ortiz |
| Integrante 2 | David Cundulli | Lizbeth Ramos y Estiven Chiluisa |
| Integrante 3 | Estiven Chiluisa | Jeampierre Ortiz y David Cundulli |
| Integrante 4 | David Rodriguez | Mateo Ronquillo y Jeampierre Ortiz |
| Integrante 5 | Jeampierre Ortiz | David Rodriguez y Mateo Ronquillo |
| Integrante 6 | Lizbeth Ramos | David Cundulli y Estiven Chiluisa |

Los revisores verificaron los cambios realizados en cada pull request y realizaron las observaciones necesarias antes de aprobar su integración a `develop`. Este proceso permitió que los cambios fueran revisados por otros integrantes antes de formar parte de la versión compartida del proyecto.

Cuando se detectaron observaciones o conflictos con `develop`, estos debían resolverse antes de completar la integración correspondiente.

## Detalle de los pull requests con conflicto

Durante el proceso de integración se presentaron conflictos debido a que diferentes ramas realizaron modificaciones sobre archivos o secciones relacionadas. Estos casos requirieron una resolución manual antes de completar la fusión.

### #4 style(ui): incorporar estilos generales de la interfaz

- **Autor:** David Cundulli (davids123456).
- El conflicto ocurrió al actualizar la rama con `develop`, que ya incluía los cambios correspondientes a `feature/tema-responsive`.
- Ambas ramas agregaron variables nuevas en la misma sección de `assets/scss/abstracts/_variables.scss`.
- Después de verificar que las variables eran diferentes y necesarias para el proyecto, se conservaron ambos bloques sin descartar ninguna funcionalidad.
- La descripción completa del proceso de resolución se encuentra en `docs/conflicts.md` (Conflicto 2).

### #7 feat(theme): implementar tema y diseño responsive

- **Autor:** Lizbeth Ramos (Lizvgbhjn).
- Los principales commits de la funcionalidad correspondieron a `style(theme)` para las paletas y variables, `feat(theme)` para el selector y la persistencia, y `style(responsive)` para la navegación móvil.
- El conflicto ocurrió al actualizar la rama con `develop`, que ya incluía los cambios de `feature/pagina-inicio`.
- Ambas ramas modificaron el encabezado de `index.html`, la inicialización de `app.js` y diferentes estilos dentro de `css/main.css`.
- Para resolverlo, se conservó el navbar de Bootstrap utilizado por el dashboard y se integró el botón correspondiente al cambio de tema. También se combinaron los imports e inicializaciones de `app.js` y se conservaron los estilos necesarios de ambas ramas.
- La descripción completa del proceso de resolución se encuentra en `docs/conflicts.md` (Conflicto 1).

## Resultado

Todos los pull requests planificados fueron revisados y fusionados en la rama `develop`. De esta manera, las funcionalidades desarrolladas por los diferentes integrantes quedaron integradas en una única versión compartida del proyecto.

El uso de ramas independientes y pull requests permitió organizar el trabajo colaborativo, facilitar la revisión de los cambios antes de cada integración y mantener un registro de las funcionalidades desarrolladas. Asimismo, las revisiones realizadas por otros integrantes permitieron identificar observaciones y conflictos antes de incorporar definitivamente los cambios a `develop`.