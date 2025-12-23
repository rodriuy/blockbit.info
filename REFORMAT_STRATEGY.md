# 🎨 Guía de Reformateo - Blockbit Tema Apple Dark Mode

## Contexto
Se ha completado la reformatización de `trayectoria_2425.html` con un tema Apple Dark Mode elegante y minimalista. Ahora necesitamos aplicar el **mismo diseño a todas las páginas del sitio**.

## 📋 Páginas a Reformar

1. ✅ `trayectoria_2425.html` - **COMPLETADA**
2. ⏳ `index.html` - En progreso
3. ⏳ `proyecto2021.html`
4. ⏳ `proyecto2022-23.html`
5. ⏳ `trayectoria_2021.html`
6. ⏳ `trayectoria_2223.html`
7. ⏳ `trayectoria_2324.html`
8. ⏳ `memora_prototipo.html`
9. ⏳ `sumate.html`

## 🎯 Cambios Principales por Archivo

### Colores: Migración
```
ANTIGUO (Vibrant)           NUEVO (Apple Dark)
--celeste-uruguayo #0038a8 → --primary #0071e3
--celeste-claro #55d6ff    → --primary #0071e3
--dorado #ffd700           → --text-secondary #a1a1a6
rgba(85, 214, 255, ...)    → rgba(0, 113, 227, ...)
rgba(0, 56, 168, ...)      → rgba(0, 113, 227, ...)
```

### CSS: Estructura
```
ANTIGUO                          NUEVO
.gradient-text (animated)     → Texto simple con color
.cta-button (gradient)        → .button-primary (sólido)
.secondary-button (gradient)  → .button-secondary (outline)
.stat-card (gradient border)  → .stat-box (simple border)
.card-style (dark gradient)   → .card (light border)
```

### Variables Globales
```css
:root {
    --primary: #0071e3;              /* Azul profesional Apple */
    --secondary: #1d1d1f;            /* Gris muy oscuro */
    --text-primary: #f5f5f7;         /* Texto blanco suave */
    --text-secondary: #a1a1a6;       /* Texto gris */
    --border: #424245;               /* Bordes oscuros */
    --bg-light: #000000;             /* Fondo negro */
    --bg-secondary: #1d1d1f;         /* Fondo secundario */
}
```

## 📐 Patrones CSS a Aplicar

### 1. Header/Navbar
```css
.header-glass {
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
}

.header-glass.scrolled {
    background: rgba(0, 0, 0, 0.98);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
```

### 2. Botones
```css
.button-primary {
    background: var(--primary);
    color: white;
    padding: 12px 32px;
    border-radius: 980px;
    transition: all 0.3s ease;
}

.button-primary:hover {
    background: #0059B3;
}

.button-secondary {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--primary);
}

.button-secondary:hover {
    border-color: var(--primary);
    background: var(--bg-secondary);
}
```

### 3. Tarjetas (Cards)
```css
.card {
    background: var(--bg-light);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 40px;
    transition: all 0.3s ease;
}

.card:hover {
    border-color: var(--primary);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}
```

### 4. Elementos Decorativos (Nuevos)
```css
.accent-line {
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    margin: 30px 0;
    animation: slide-in 1.2s ease-out;
}

.highlight-box {
    background: rgba(0, 113, 227, 0.05);
    border-left: 4px solid var(--primary);
    padding: 24px;
}

.icon-circle {
    width: 40px;
    height: 40px;
    background: rgba(0, 113, 227, 0.1);
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
}
```

## 🔧 Proceso de Reformateo

### Para Cada Página:

1. **Reemplazar CSS Variables**
   - Buscar y reemplazar bloques `:root { }`
   - Cambiar todas las referencias de colores antiguos

2. **Actualizar Clases de Botones**
   - `.cta-button` → `.button-primary`
   - `.secondary-button` → `.button-secondary`
   - Revisar efectos hover/active

3. **Reemplazar Tarjetas**
   - `.card-style` → `.card`
   - Simplificar estilos de borde y sombra
   - Remover gradientes complejos

4. **Actualizar Componentes**
   - `.stat-card` → `.stat-box`
   - `.gradient-text` → texto simple
   - Remover animaciones de gradiente (`:keyframes gradientShift`)

5. **Agregar Elementos Decorativos**
   - Agregar `.accent-line` donde sea apropiado
   - Agregar `.highlight-box` para contenido importante
   - Considerar `.icon-circle` para listas de características

6. **Revisar HTML**
   - Actualizar colores en etiquetas `style=""` inline
   - Cambiar `color: #55d6ff;` → `style="color: var(--primary);"`
   - Cambiar `background: linear-gradient(...)` → solid colors

## 📝 Cambios HTML Comunes

```html
<!-- ANTIGUO -->
<h1 class="gradient-text">Blockbit</h1>
<button class="cta-button">Explorar</button>
<div class="card-style p-8">...</div>
<div class="stat-card">...</div>

<!-- NUEVO -->
<h1 style="color: var(--text-primary);">Blockbit</h1>
<button class="button-primary">Explorar</button>
<div class="card">...</div>
<div class="stat-box">...</div>
```

## 🎬 Animaciones a Mantener

- `reveal-on-scroll`: Entrada suave de elementos
- `header-glass.scrolled`: Cambio de opacity al scroll
- `float`: Animación sutil de flotación
- `pulse-dot`: Pulso suave de puntos decorativos

## ❌ Elementos a Remover

- `@keyframes gradientShift` (gradientes animados)
- `::before` pseudo-elementos con gradientes complejos
- `text-shadow: 0 0 80px rgba(85, 214, 255, 0.3);`
- Efectos de "shine" o "shimmer"
- Bordes de colores vibrantes

## ✨ Resultado Final

Todas las páginas compartirán:
- **Paleta de colores consistente**: Apple Dark Mode
- **Tipografía**: Inter font, pesos 400-900
- **Componentes**: Cards, botones, galerías consistentes
- **Animaciones**: Suaves y no disruptivas
- **Accesibilidad**: Alto contraste, fuentes legibles

## 📊 Estimación de Tiempo

- `index.html`: 1-2 horas (muy complejo)
- Cada página de proyecto: 30-45 min
- Cada página de trayectoria: 30-45 min
- Testing final: 30 min

**Total estimado**: 4-5 horas de trabajo manual preciso

---

**Nota**: Este cambio es visual/estético. No afecta la funcionalidad JavaScript, 
las galerías, los videos o cualquier comportamiento interactivo existente.
