# AGENT.md - Reglas del Proyecto ui-playground

## 1. Stack Tecnológico
- React 19 + TypeScript + Vite
- Tailwind CSS (sin librerías de UI pesadas como MUI/Bootstrap)
- React Router DOM para navegación

## 2. Arquitectura (Estricta)
- `src/core/components/ui/`: Componentes tontos, reutilizables, sin lógica de negocio.
- `src/core/components/layout/`: Estructura global (Navbar, Footer).
- `src/core/components/sections/`: Bloques visuales que combinan UI.
- `src/core/components/features/`: Lógica compleja (formularios, integraciones).
- `src/templates/[nombre]/`: Plantillas específicas que consumen el `core`.

## 3. Reglas de Código
- NUNCA usar `any` en TypeScript. Definir interfaces claras.
- Usar Functional Components y Hooks.
- Prefiere `export default` para componentes principales.
- Nombres de archivos: PascalCase para componentes (`Button.tsx`), camelCase para utilidades.

## 4. Flujo de Trabajo
- Antes de refactorizar o mover archivos, propón un plan paso a paso (Plan Mode).
- Actualiza las rutas de importación automáticamente al mover archivos.
- Commits deben seguir Conventional Commits (ej: `feat: add gym template`, `chore: update tailwind config`).