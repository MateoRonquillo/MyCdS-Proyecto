#  CineScope

Aplicación web colaborativa para consultar, buscar y organizar películas y series, desarrollada aplicando Git, GitHub, ramas, pull requests, revisión de código y resolución de conflictos.

---

##  Índice

1. [Descripción](#-descripción)
2. [Objetivos](#-objetivos)
3. [Funcionalidades](#-funcionalidades)
4. [Tecnologías](#-tecnologías)
5. [Ejecución](#-ejecución)
6. [Estructura del proyecto](#-estructura-del-proyecto)
7. [Flujo de trabajo](#-flujo-de-trabajo)
8. [Convenciones](#-convenciones)
9. [Integrantes y responsabilidades](#-integrantes-y-responsabilidades)
10. [Pull requests](#-pull-requests)
11. [Conflictos resueltos](#️-conflictos-resueltos)
12. [Lecciones aprendidas](#-lecciones-aprendidas)
13. [Mejoras futuras](#-mejoras-futuras)
14. [Licencia](#-licencia)

---

##  Descripción

**CineScope** es una aplicación web que permite consultar y organizar un catálogo de películas y series. El proyecto incorpora diferentes funcionalidades como búsqueda, filtros, favoritos, persistencia de información, visualización de detalles y selección de tema.

El proyecto fue desarrollado con fines académicos. Para organizar el trabajo se utilizaron Git y GitHub, permitiendo que cada funcionalidad fuera desarrollada en una rama independiente y posteriormente integrada mediante pull requests.

---

##  Objetivos

### Objetivo general

Desarrollar una aplicación web colaborativa para consultar y organizar un catálogo de películas y series, aplicando un flujo de trabajo basado en Git y GitHub.

### Objetivos específicos

- Diseñar una interfaz adaptable a diferentes dispositivos.
- Implementar un catálogo de películas y series.
- Incorporar herramientas de búsqueda, filtrado y ordenamiento.
- Permitir la gestión y persistencia de contenidos favoritos.
- Implementar temas claro y oscuro.
- Distribuir el desarrollo entre seis integrantes.
- Utilizar ramas independientes para desarrollar cada funcionalidad.
- Integrar los cambios mediante pull requests y revisiones.
- Documentar los conflictos y aprendizajes obtenidos durante el desarrollo.

---

##  Funcionalidades

-  Página principal con información general del catálogo.
-  Catálogo de películas y series.
-  Búsqueda de contenido.
-  Filtros y ordenamiento.
-  Visualización detallada del contenido.
-  Gestión de favoritos.
-  Persistencia mediante `localStorage`.
-  Tema claro y oscuro.
-  Diseño responsive.
-  Página de información del equipo.

---

##  Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de las páginas |
| Sass / CSS | Estilos, temas y diseño responsive |
| JavaScript | Lógica y funcionalidades de la aplicación |
| JSON | Datos del catálogo |
| Python | Validación de los datos del catálogo |
| Bootstrap | Componentes utilizados en la interfaz |
| Git | Control de versiones |
| GitHub | Repositorio, pull requests y revisión de cambios |

---

##  Ejecución

### Requisitos

Para trabajar con el proyecto se recomienda disponer de:

- Git
- Node.js
- Python
- Un navegador web moderno

### Pasos

Clonar el repositorio:

```bash
git clone https://github.com/MateoRonquillo/MyCdS-Proyecto.git
```

Ingresar al proyecto:

```bash
cd MyCdS-Proyecto
```

Cambiar a la rama de desarrollo:

```bash
git switch develop
```

Instalar las dependencias:

```bash
npm install
```

Para ejecutar el proyecto mediante un servidor local (Live Server) se puede utilizar:

```bash
python -m http.server 5500
```

### Compilar Sass

Después de modificar los archivos `.scss`:

```bash
npx sass assets/scss/main.scss css/main.css --style=expanded
```

### Pruebas y validación

```bash
npm test
npm run validate
```

---

##  Estructura del proyecto

```text
MyCdS-Proyecto/
├── assets/
│   ├── images/
│   ├── js/
│   └── scss/
├── css/
│   └── main.css
├── data/
│   └── catalog.json
├── docs/
│   ├── architecture.md
│   ├── conflicts.md
│   ├── lessons-learned.md
│   └── pull-requests.md
├── scripts/
│   └── validate_catalog.py
├── tests/
├── index.html
├── catalog.html
├── favorites.html
├── team.html
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```
---

##  Flujo de trabajo

El proyecto utiliza las siguientes ramas:

| Rama | Propósito |
|---|---|
| `main` | Mantener la versión estable del proyecto |
| `develop` | Integrar las funcionalidades desarrolladas |
| `feature/*` | Desarrollar funcionalidades específicas |
| `hotfix/*` | Realizar correcciones urgentes |

El flujo utilizado para las funcionalidades es:

```text
feature/* ──────► develop ──────► main
                     ▲
                     │
               Pull Request
                 + revisión
```

### Flujo de trabajo de cada integrante

```bash
git switch develop
git pull origin develop
git switch -c feature/nombre-funcionalidad
```

Después de realizar los cambios:

```bash
git add .
git commit -m "tipo(alcance): descripción del cambio"
git push -u origin feature/nombre-funcionalidad
```

Finalmente, se crea un pull request:

```text
feature/nombre-funcionalidad → develop
```

Antes de completar el merge, los cambios deben ser revisados por los integrantes asignados.

---

##  Convenciones

### Ramas

Las funcionalidades se desarrollan utilizando ramas con nombres descriptivos:

```text
feature/nombre-funcionalidad
```

Ejemplos:

```text
feature/tema-responsive
feature/buscador
feature/gestion-favorito
feature/documentacion-proyecto
```

### Commits

Se utiliza el formato:

```text
tipo(alcance): descripción breve
```

Tipos utilizados:

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de errores |
| `docs` | Documentación |
| `style` | Cambios relacionados con estilos |
| `refactor` | Reorganización del código |
| `test` | Pruebas |
| `chore` | Configuración o mantenimiento |
| `release` | Integración de versiones |

Ejemplos:

```text
feat(theme): implementar tema y diseño responsive
feat(favorites): implementar gestión de favoritos
fix(favorites): evitar registros favoritos duplicados
style(ui): incorporar estilos generales de la interfaz
docs(project): completar documentación del proyecto
```

---

##  Integrantes y responsabilidades

| Integrante | GitHub | Responsabilidad | Pull requests |
|---|---|---|---|
| Mateo Ronquillo | `MateoRonquillo` | Estructura y página principal | #1, #2 |
| David Cundulli | `davids123456` | Configuración y estilos generales | #3, #4 |
| Estiven Chiluisa | `Estiven453` | Catálogo y detalle del contenido | #5, #10 |
| David Rodriguez | `Davu15` | Búsqueda, filtros y ordenamiento | #6, #11 |
| Jeampierre Ortiz | `JeampyON` | Favoritos y persistencia | #8, #9 |
| Lizbeth Ramos | `Lizvgbhjn` | Tema, diseño responsive y documentación | #7, #12 |

---

##  Pull requests

Las funcionalidades desarrolladas por cada integrante fueron integradas mediante pull requests hacia la rama `develop`.

| PR | Funcionalidad | Rama |
|---|---|---|
| #1 | Estructura base | `feature/estructura-base` |
| #2 | Página principal | `feature/pagina-inicio` |
| #3 | Configuración de `.gitignore` | `feature/configuracion-gitignore` |
| #4 | Estilos generales | `feature/estilos-generales` |
| #5 | Catálogo de películas y series | `feature/catalogo-tarjetas` |
| #6 | Búsqueda en tiempo real | `feature/buscador` |
| #7 | Tema y diseño responsive | `feature/tema-responsive` |
| #8 | Gestión de favoritos | `feature/gestion-favorito` |
| #9 | Persistencia de favoritos | `feature/persistencia-favoritos` |
| #10 | Vista detallada del contenido | `feature/detalle-contenido` |
| #11 | Filtros y ordenamiento | `feature/filtros-ordenamiento` |
| #12 | Documentación del proyecto | `feature/documentacion-proyecto` |

El registro completo de los pull requests, responsables y revisiones se encuentra disponible en [`docs/pull-requests.md`](docs/pull-requests.md).

---

##  Conflictos resueltos

Durante el desarrollo colaborativo se presentaron conflictos cuando diferentes ramas modificaron archivos o secciones relacionadas.

Los conflictos fueron analizados y resueltos manualmente antes de integrar las funcionalidades correspondientes.

El registro completo, incluyendo las ramas involucradas, archivos afectados, causas, comandos utilizados y soluciones aplicadas, se encuentra disponible en [`docs/conflicts.md`](docs/conflicts.md).

---

##  Lecciones aprendidas

### Ventajas

- El uso de ramas permitió desarrollar funcionalidades de manera paralela.
- Los pull requests facilitaron la revisión antes de integrar los cambios.
- Git permitió mantener un historial de las contribuciones realizadas.
- Las revisiones permitieron detectar problemas antes de realizar los merges.

### Dificultades

- Se presentaron conflictos al modificar archivos compartidos.
- `app.js` fue utilizado por diferentes funcionalidades y se convirtió en un punto frecuente de modificación.
- La integración de estilos requirió coordinación entre diferentes ramas.
- Mantener una rama desactualizada respecto a `develop` aumentó la posibilidad de conflictos.

### Soluciones aplicadas

- Mantener las ramas actualizadas con `develop`.
- Revisar los cambios antes de completar los merges.
- Resolver manualmente los conflictos conservando las funcionalidades necesarias.
- Utilizar commits pequeños y descriptivos.
- Coordinar las modificaciones realizadas sobre archivos compartidos.

El detalle completo se encuentra disponible en [`docs/lessons-learned.md`](docs/lessons-learned.md).

---

##  Mejoras futuras

Como posibles mejoras para futuras versiones del proyecto se pueden considerar:

- Incorporar un sistema de autenticación de usuarios.
- Utilizar una API externa para ampliar el catálogo.
- Implementar una base de datos para almacenar información.
- Incorporar comentarios y valoraciones de usuarios.
- Mejorar las opciones de personalización del catálogo.

---

##  Licencia

La información correspondiente a la licencia del proyecto se encuentra disponible en el archivo [`LICENSE`](LICENSE).

---