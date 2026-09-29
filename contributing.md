# Guía de Contribución - CineScope 

Este documento establece las reglas de colaboración que deben seguir los integrantes del equipo durante el desarrollo de **CineScope**.

##  Reglas generales

- Cada integrante debe trabajar en la funcionalidad que tenga asignada.
- No modificar o eliminar el trabajo de otro integrante sin coordinación previa.
- Mantener una comunicación respetuosa entre los miembros del equipo.
- Verificar el funcionamiento de los cambios antes de publicarlos.
- No subir archivos innecesarios o incluidos en `.gitignore`.

##  Manejo de ramas

- No trabajar directamente sobre `main`.
- Las nuevas funcionalidades deben desarrollarse en ramas `feature/*` creadas desde `develop`.
- Mantener la rama actualizada antes de comenzar nuevos cambios.
- Utilizar nombres descriptivos para las ramas.

Ejemplos:

```text id="d9hftg"
feature/buscador
feature/favoritos
feature/tema-responsive
```

##  Commits

- Realizar commits pequeños y relacionados con una sola tarea.
- Utilizar mensajes claros y descriptivos.
- Seguir la estructura:

```text id="r95p0e"
tipo(alcance): descripción
```

Ejemplos:

```text id="1a5v2h"
feat(search): implementar buscador
fix(favorites): corregir favoritos duplicados
docs(project): actualizar documentación
```

##  Pull Requests

- Los cambios deben integrarse a `develop` mediante Pull Requests.
- Cada PR debe tener un título y una descripción clara de los cambios.
- No realizar el merge mientras existan conflictos o cambios solicitados.
- Comprobar que la funcionalidad trabaje correctamente antes de solicitar la integración.

##  Revisión de código

- Revisar los Pull Requests asignados de otros integrantes.
- Realizar comentarios claros y respetuosos.
- Solicitar cambios cuando se detecten errores.
- Aprobar únicamente cuando los cambios hayan sido revisados y funcionen correctamente.

##  Conflictos

- Revisar los cambios de ambas ramas antes de resolver un conflicto.
- No eliminar cambios de otro integrante sin verificarlos.
- Probar nuevamente la aplicación después de resolver un conflicto.

## Compromiso del equipo

Todos los integrantes deben respetar estas reglas para mantener un flujo de trabajo organizado, facilitar la integración de cambios y contribuir correctamente al desarrollo colaborativo de **CineScope**.