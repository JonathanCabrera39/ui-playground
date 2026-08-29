# React + TypeScript + Vite + Tailwind CSS

este repositorio proporciona una configuración mínima para que react funcione en vite con typescript y tailwind css. el objetivo principal es mostrar cómo desarrollar una aplicación que muestre videojuegos utilizando estas tecnologías, **siguiendo las mejores prácticas de tailwind css para un código limpio, reutilizable y mantenible.**

---

## Instalación

seguí estos pasos para empezar:

1. clona este repositorio:

   ```sh
   git clone <url_del_repositorio>
   ```

2. instalá las dependencias:

   ```sh
   bun install
   ```

3. ejecutá el servidor de desarrollo:

   ```sh
   bun run dev
   ```

---

## Mejores prácticas

este proyecto implementa **tailwind css** siguiendo las mejores prácticas para mantener un diseño consistente, reutilizable y fácil de mantener. a continuación, algunos principios clave aplicados en esta configuración:

### **1. Clases reutilizables con `@apply` (usadas moderadamente)**

centralizamos estilos comunes, como botones y tarjetas, en un archivo CSS base para evitar duplicación.

```css
.btn-primary {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600;
}
.card {
  @apply bg-gray-800 rounded-lg shadow-md p-4;
}
```

### **2. Orden lógico de clases**

seguimos un orden coherente en las clases para facilitar la lectura:  
**layout > display > spacing > border > color > text**.

```tsx
<div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-lg shadow">
```

### **3. Uso del tema personalizado**

configuramos colores y tamaños personalizados en `tailwind.config.js` para mantener un diseño consistente.

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#9333EA",
      },
    },
  },
};
```

esto asegura que los colores y estilos sean reutilizables y fáciles de ajustar.

### **4. Variantes para estilos dinámicos**

usamos variantes como `hover:`, `focus:`, `sm:` para controlar estilos según el estado o el tamaño de pantalla.

```tsx
<button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
  Click Me
</button>
```

### **5. Clases comunes en componentes padres**

para estilos compartidos por múltiples elementos hijos, aplicamos las clases en el contenedor padre para evitar redundancia.

```tsx
<div className="text-white bg-gray-900 p-4">
  <h1 className="text-xl">Title</h1>
  <p className="text-sm">Description</p>
</div>
```

### **6. Evitamos clases en línea**

los estilos complejos se mueven a clases CSS reutilizables o al padre.

### **7. Diseño inline-first**

priorizamos utilidades de tailwind directamente en el JSX, aprovechando su filosofía inline-first.

### **8. Utilidades responsivas**

se usan prefijos como `sm:`, `md:`, `lg:` para manejar diseños adaptativos.

```tsx
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive Text
</div>
```

### **9. Limpieza en producción**

el archivo CSS final elimina automáticamente las clases no utilizadas para mantenerlo ligero.

---

## Contribuciones

todas las contribuciones son bienvenidas. para colaborar:

1. abrí un **issue** para discutir tu idea.
2. creá un **pull request** con tu cambio.

**por favor, asegurate de seguir las mejores prácticas mencionadas para mantener la calidad del código.**

---

## Licencia

este proyecto está licenciado bajo la **licencia MIT**, permitiendo su uso y modificación para cualquier propósito.
# my-landingPage
# my-landingPage
