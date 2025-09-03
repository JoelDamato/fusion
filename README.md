# FUSION Coworking - Sitio Web

Sitio web moderno y responsivo para FUSION Coworking, desarrollado con React, Tailwind CSS y Vite.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Colores Personalizados**: Paleta de colores específica de FUSION
- **Componentes Interactivos**: Botones, formularios y elementos con hover effects
- **Tipografía Optimizada**: Fuente Inter para mejor legibilidad

## 🎨 Paleta de Colores

- **Amarillo FUSION**: `#FFD700` - Elementos principales y CTAs
- **Naranja FUSION**: `#FF8C00` - Acentos y hover states
- **Gris Oscuro**: `#2C3E50` - Textos principales
- **Gris Medio**: `#6C757D` - Textos secundarios
- **Gris Claro**: `#F8F9FA` - Fondos de secciones

## 📱 Secciones del Sitio

1. **Header**: Logo, navegación y contacto
2. **Hero**: Sección principal con mensaje de bienvenida
3. **Why Fusion**: Beneficios del coworking
4. **Nuestros Espacios**: Tipos de espacios disponibles
5. **Membresías**: Planes y precios
6. **Servicios**: Lista de servicios incluidos
7. **Contacto**: Formulario de contacto
8. **Footer**: Información legal

## 🖼️ Cómo Agregar Imágenes

### 1. Hero Section - Imagen de Fondo
**Ubicación**: `src/App.jsx` línea ~60
```jsx
<div className="absolute inset-0 bg-gray-300 z-0">
  {/* Reemplazar este div con tu imagen */}
  <img 
    src="/ruta-a-tu-imagen.jpg" 
    alt="FUSION Coworking - Espacio de trabajo"
    className="w-full h-full object-cover"
  />
</div>
```

### 2. Imagen Derecha del Hero
**Ubicación**: `src/App.jsx` línea ~85
```jsx
<div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
  {/* Reemplazar con tu imagen */}
  <img 
    src="/ruta-a-tu-imagen-hero.jpg" 
    alt="FUSION WORKING logo y espacio"
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

### 3. Sección "Why Fusion"
**Ubicación**: `src/App.jsx` línea ~120
```jsx
<div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
  {/* Reemplazar con tu imagen */}
  <img 
    src="/ruta-a-tu-imagen-oficina.jpg" 
    alt="Oficina privada con TV"
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

### 4. Sección "Nuestros Espacios"
**Ubicación**: `src/App.jsx` línea ~150
```jsx
<div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
  {/* Reemplazar con tu imagen */}
  <img 
    src="/ruta-a-tu-imagen-espacios.jpg" 
    alt="Área compartida de coworking"
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

### 5. Sección de Contacto
**Ubicación**: `src/App.jsx` línea ~320
```jsx
<div className="absolute inset-0 bg-gray-300 z-0">
  {/* Reemplazar con tu imagen */}
  <img 
    src="/ruta-a-tu-imagen-contacto.jpg" 
    alt="Fondo del formulario de contacto"
    className="w-full h-full object-cover"
  />
</div>
```

## 🎥 Cómo Agregar Videos

### 1. Video de Fondo en Hero
**Ubicación**: `src/App.jsx` línea ~60
```jsx
<div className="absolute inset-0 bg-gray-300 z-0">
  <video 
    autoPlay 
    muted 
    loop 
    className="w-full h-full object-cover"
  >
    <source src="/ruta-a-tu-video.mp4" type="video/mp4" />
    Tu navegador no soporta videos.
  </video>
</div>
```

### 2. Video Promocional
Puedes agregar un video en cualquier sección:
```jsx
<div className="w-full h-96 rounded-lg overflow-hidden">
  <video 
    controls 
    className="w-full h-full object-cover"
  >
    <source src="/ruta-a-tu-video-promocional.mp4" type="video/mp4" />
    Tu navegador no soporta videos.
  </video>
</div>
```

## 📁 Estructura de Archivos Recomendada

```
public/
├── images/
│   ├── hero-bg.jpg
│   ├── hero-right.jpg
│   ├── why-fusion.jpg
│   ├── espacios.jpg
│   └── contacto-bg.jpg
├── videos/
│   ├── hero-bg.mp4
│   └── promocional.mp4
└── index.html
```

## 🚀 Instalación y Ejecución

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar build**:
   ```bash
   npm run preview
   ```

## 🎯 Personalización

### Cambiar Colores
Edita `tailwind.config.js` para modificar la paleta de colores:
```js
colors: {
  'fusion-yellow': '#TU_COLOR_AMARILLO',
  'fusion-orange': '#TU_COLOR_NARANJA',
  // ... más colores
}
```

### Cambiar Textos
Todos los textos están en español en `src/App.jsx`. Puedes editarlos directamente.

### Agregar Nuevas Secciones
Copia la estructura de una sección existente y modifícala según tus necesidades.

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Tecnologías Utilizadas

- **React 19**: Framework principal
- **Tailwind CSS 4**: Framework de CSS
- **Vite**: Build tool y dev server
- **PostCSS**: Procesamiento de CSS
- **ESLint**: Linting de código

## 📞 Contacto

Para soporte técnico o consultas sobre el desarrollo:
- **Desarrollador**: [Tu nombre]
- **Email**: [tu-email@ejemplo.com]

---

© 2024 FUSION Coworking. Todos los derechos reservados.
