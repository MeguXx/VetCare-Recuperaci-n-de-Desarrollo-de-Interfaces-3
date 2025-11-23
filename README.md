# VetCare - Sistema de Gestión Veterinaria

Aplicación web progresiva (SPA) desarrollada en **Angular** para la gestión digital de una clínica veterinaria. Permite el registro de pacientes, control de agenda y visualización de historial clínico.

## 🚀 Características Técnicas (Nivel Sobresaliente)

Este proyecto implementa una arquitectura escalable siguiendo las mejores prácticas de Angular:

### 1. Arquitectura Modular & Lazy Loading
- Se dividió la aplicación en módulos de dominio: **`MascotasModule`**, **`CitasModule`** e **`HistorialModule`**.
- Implementación de **Lazy Loading** en el Router para optimizar la carga inicial (los módulos se descargan solo cuando se necesitan).

### 2. Directivas Personalizadas (DOM Manipulation)
- **`[appHighlight]`**: Directiva estructural avanzada que inyecta `Renderer2` y `ElementRef` para manipular el DOM directamente.
- **Función:** Detecta automáticamente si una cita es "Hoy" o "Mañana" y cambia visualmente el borde de la tarjeta (Verde/Naranja) para alertar al veterinario.

### 3. Pipes Personalizados
- **`estadoCita`**: Pipe puro que transforma timestamps ISO en estados legibles ("Próxima" / "Pasada") sin ensuciar la lógica del componente.

### 4. Formularios Reactivos (ReactiveForms)
- Control total de inputs con `FormGroup` y `FormBuilder`.
- Validaciones síncronas (`Validators.required`, `min`, `pattern` para teléfonos) con feedback visual inmediato al usuario.

### 5. Servicios y Persistencia
- Servicios Tipados (`MascotaService`, `CitaService`) actuando como capa de datos.
- Persistencia de datos en **LocalStorage** simulando una API REST, manteniendo la información al recargar.
- Uso estricto de **Interfaces TypeScript** (`Mascota`, `Cita`) en `SharedModule` para garantizar la integridad de datos.

## 🛠️ Instalación y Ejecución

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
