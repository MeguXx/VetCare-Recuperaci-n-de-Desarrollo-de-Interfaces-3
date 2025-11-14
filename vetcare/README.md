# VetCare - Parcia l

Proyecto parcial: aplicación Angular para una clínica veterinaria.

Características implementadas (estado actual):
- Registro de mascotas (formulario con validaciones, persistencia en localStorage).
- Agendamiento de citas (servicio `CitaService`, persistencia en localStorage, control de franjas horarias disponibles).
- Listado de citas y vista de historial de citas por mascota.
- Arquitectura modular: módulos `mascotas`, `citas`, `historial` con lazy-loading.
- Página de inicio (Home) con accesos rápidos a las secciones.

Cómo ejecutar
1. Clonar el repositorio y situarse en la carpeta del proyecto:

```powershell
cd <ruta-al-proyecto>
npm install
npm run start
```

2. Abrir en el navegador: http://localhost:4200/

Flujos para probar (guion corto para demo de 5 minutos)
1. Registrar mascota
   - Ir a Inicio → Registrar mascota
   - Completar nombre, especie y datos del dueño y enviar.
2. Agendar cita
   - Ir a Inicio → Agendar cita
   - Seleccionar la mascota creada, elegir fecha y hora disponible y confirmar.
# VetCare — Aplicación parcial (Entrega)

Esta es una aplicación demo desarrollada en Angular para digitalizar el proceso de atención de una clínica veterinaria.
El objetivo es demostrar los flujos mínimos requeridos por el parcial: registro de mascotas, agendamiento de citas, y consulta de historial.

Contenido de este README
- Requisitos y cómo ejecutar
- Flujo rápido para probar la aplicación (guion de demo de 5 minutos)
- Estructura del proyecto y decisiones técnicas
- Qué falta / recomendaciones para mejorar la nota

Requisitos y cómo ejecutar

1) Instalar dependencias

```powershell
cd <ruta-al-proyecto>
npm install
```

2) Ejecutar la aplicación en modo desarrollo

```powershell
npm run start
# o (si usas angular cli)
ng serve
```

Luego abrir http://localhost:4200/ en tu navegador.

Flujo rápido (guion para demo de 5 minutos)

1) Inicio (30s)
   - Muestra la página Inicio (VetCare) con botones claros: Registrar mascota, Agendar cita, Ver historial.

2) Registrar mascota (1:30)
   - Click en "Registrar mascota".
   - Completa nombre, especie y datos del dueño. Enviar.
   - Comenta que los datos se guardan en localStorage y se usan para seleccionar mascota al agendar.

3) Agendar cita (1:30)
   - Click en "Agendar cita".
   - Selecciona la mascota creada, elige fecha y hora (la app calcula franjas disponibles) y guarda.
   - Muestra la cita creada en la Agenda.

4) Ver historial (1:00)
   - Click en "Ver historial" y muestra las citas pasadas (si las fechas lo permiten) o comenta cómo se verían.

Estructura y decisiones técnicas (breve)

- Angular con módulos por dominio: `mascotas`, `citas`, `historial`.
- Lazy-loading de módulos desde `AppRoutingModule`.
- Persistencia simple en `localStorage` para demo (claves: `vetcare_mascotas_v1`, `vetcare_citas_v1`).
- Tipos centralizados en `src/app/shared/models.ts` (interfaces `Mascota` y `Cita`).
- Formularios con ReactiveForms y validaciones básicas.

Qué falta y recomendaciones para la máxima puntuación

- Mejorar tipado y POO: aplicar clases/servicios con responsabilidades claras y tests unitarios.
- Implementar una vista de agenda más visual (calendario) o mejorar la UI con Bootstrap/Material.
- Añadir directiva para resaltar citas próximas y pipes adicionales para formateo de fecha/estado.
- Documentación extendida y capturas para el README.

Notas finales

Este repositorio contiene una versión funcional mínima que cumple los flujos solicitados. Si querés que haga alguna de las mejoras listadas (calendario, tests, docs extendidas), decímelo y lo implemento.


To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
