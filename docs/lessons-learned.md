# Lecciones aprendidas

Este documento registra las principales decisiones, aprendizajes, dificultades y oportunidades de mejora identificadas durante el desarrollo colaborativo de CineScope. El uso de Git, ramas independientes y pull requests permitió aplicar un flujo de trabajo organizado, pero también permitió identificar situaciones que pueden optimizarse en futuros proyectos.

## Ventajas

- Trabajar cada funcionalidad en su propia rama permitió que los integrantes desarrollaran diferentes partes del proyecto de manera paralela sin interferir directamente con el trabajo de los demás.

- El uso de pull requests permitió revisar los cambios antes de integrarlos a `develop`. Este proceso facilitó la detección de errores, conflictos y posibles mejoras antes de incorporar definitivamente una funcionalidad al proyecto.

- La asignación de revisores permitió que los cambios fueran verificados por otros integrantes del equipo, evitando que la integración dependiera únicamente de la persona responsable de desarrollar la funcionalidad.

- Git permitió conservar un historial de los cambios realizados por cada integrante. La utilización de la convención de commits `tipo(alcance): acción` facilitó la identificación del propósito de cada modificación dentro del historial del repositorio.

- La separación del proyecto en diferentes módulos y archivos permitió distribuir las responsabilidades entre los integrantes y mantener una estructura más organizada durante el desarrollo.

## Desventajas y dificultades encontradas

- Diferentes ramas modificaron simultáneamente secciones relacionadas de `index.html`, `app.js` y `css/main.css`. Los cambios correspondientes a la navegación, dashboard y sistema de temas provocaron un conflicto al actualizar `feature/tema-responsive` con los cambios existentes en `develop`. Este caso se encuentra documentado como Conflicto 1 en `docs/conflicts.md`.

- Las ramas relacionadas con los estilos generales y el tema agregaron variables nuevas en la misma sección de `assets/scss/abstracts/_variables.scss`. Aunque las variables eran diferentes, Git no pudo determinar automáticamente cómo integrar ambos bloques, lo que produjo el Conflicto 2 documentado en `docs/conflicts.md`.

- Varios integrantes necesitaron modificar `assets/js/app.js` para inicializar sus respectivos módulos. Esto convirtió al archivo en un punto compartido por diferentes funcionalidades y aumentó la posibilidad de generar conflictos durante las integraciones.

- El archivo `css/main.css` recibió cambios provenientes de la compilación de SCSS y también modificaciones directas. Esta situación dificultó la identificación del origen de algunos estilos y aumentó la complejidad de los conflictos relacionados con este archivo.

- Mantener una rama de trabajo sin incorporar periódicamente los últimos cambios de `develop` puede provocar que las diferencias entre ambas ramas aumenten. Esto hace que los conflictos sean más extensos cuando finalmente se intenta realizar la integración.

- El trabajo colaborativo requiere coordinación entre los integrantes, especialmente cuando diferentes funcionalidades dependen de archivos compartidos. La falta de coordinación previa sobre estos archivos puede ocasionar modificaciones incompatibles o repetidas.

## Soluciones aplicadas

- En el Conflicto 1 se analizaron los cambios de ambas ramas y se decidió conservar las funcionalidades de las dos. Se mantuvo el navbar de Bootstrap utilizado por el dashboard y se integró dentro de este el botón correspondiente al cambio de tema. También se combinaron los imports e inicializaciones necesarios en `app.js` y se conservaron los estilos requeridos por ambas funcionalidades.

- En el Conflicto 2 se verificó que las variables agregadas por las dos ramas fueran diferentes y no generaran duplicados. Debido a esto, se conservaron ambos bloques dentro de `_variables.scss`, manteniendo las variables generales junto con las correspondientes a los temas y breakpoints.

- Antes de confirmar una resolución de conflictos, se revisaron los archivos afectados para comprobar que no permanecieran marcadores de Git y que las funcionalidades desarrolladas por ambas ramas se conservaran correctamente.

- Los pull requests se utilizaron como punto de revisión antes de incorporar los cambios a `develop`, permitiendo realizar observaciones y solicitar correcciones cuando una funcionalidad presentaba conflictos o requería modificaciones adicionales.

## Mejoras para un próximo proyecto

- Definir previamente qué integrante será responsable de los archivos o secciones compartidas, especialmente componentes como el header, la navegación y los archivos principales de inicialización.

- Mantener las ramas de trabajo actualizadas frecuentemente con `develop`. Esto permite detectar conflictos cuando todavía existen pocas diferencias entre las ramas y facilita su resolución.

- Evitar que varios integrantes modifiquen directamente `app.js` para inicializar sus funcionalidades. Una alternativa sería establecer desde el inicio una estructura de inicialización modular que reduzca la cantidad de modificaciones necesarias sobre un único archivo.

- Mantener los estilos fuente exclusivamente dentro de los archivos SCSS y generar `css/main.css` mediante compilación. De esta manera, se evita que el archivo generado sea modificado manualmente por diferentes integrantes.

- Realizar commits pequeños y relacionados con una sola tarea. Esto facilita la revisión de los cambios, permite identificar con mayor precisión el origen de un problema y simplifica una posible reversión.


## Conclusión

El desarrollo de CineScope permitió aplicar un flujo de trabajo colaborativo basado en Git y GitHub, utilizando ramas independientes, commits estructurados, pull requests y revisiones entre integrantes. Además de facilitar la organización del proyecto, este proceso permitió experimentar situaciones reales de integración y resolución de conflictos.

Los principales aprendizajes estuvieron relacionados con la coordinación del trabajo sobre archivos compartidos, la importancia de mantener las ramas actualizadas y la necesidad de revisar los cambios antes de integrarlos. Estas experiencias permiten establecer mejores prácticas que pueden aplicarse en futuros proyectos para reducir conflictos y mejorar la organización del trabajo en equipo.