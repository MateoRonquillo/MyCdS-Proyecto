# Pruebas manuales

## Criterios de aceptación

1. Abrir `index.html`, `catalog.html`, `favorites.html` y `team.html` mediante un servidor local. Todas las páginas deben cargar sin errores en la consola.
2. Confirmar que `catalog.html` muestra seis títulos y que el contador coincide con la cantidad renderizada.
3. Buscar `Stranger` y comprobar que el resultado se reduce a un título.
4. Combinar filtros de tipo, género y año; verificar que solo se muestran registros que cumplen todos los criterios.
5. Cambiar el ordenamiento entre título, calificación y año; confirmar que la secuencia se actualiza.
6. Abrir el detalle de un título y comprobar que se muestran director, reparto y sinopsis.
7. Agregar un título a favoritos, recargar la página y comprobar que el estado se conserva.
8. Abrir `favorites.html`, quitar el favorito y verificar que la lista se actualiza y muestra el estado vacío cuando corresponde.
9. Cambiar el tema en Catálogo y navegar a Favoritos y Equipo. El tema y el estado del selector deben conservarse.
10. Repetir las comprobaciones principales en una ventana de escritorio y en una vista móvil.

## Validaciones automatizadas

```bash
npm test
npm run validate
```
