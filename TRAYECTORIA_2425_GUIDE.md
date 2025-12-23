# Trayectoria 2024-25: Guía de Personalización

## 📋 Descripción

Se ha creado una nueva página web: `trayectoria_2425.html` que documenta la historia y logros de Blockbit durante el año 2024-2025, con especial énfasis en el proyecto **Memora** y la transición hacia la autonomía técnica e impacto social.

## 🎨 Estructura de la Página

La página está organizada con:

### 1. **Header Sticky**
- Logo y nombre de Blockbit
- Navegación a Inicio, Memora y Trayectoria actual
- Botón "Sumate"

### 2. **Hero Section**
- Titular: "Transición, Autonomía y Impacto"
- Descripción principal del año
- Dos botones CTA:
  - "Explorar Historia" (enlace al timeline)
  - "Conocer Memora" (enlace a memora_prototipo.html)

### 3. **Quick Stats**
- 4 estadísticas clave (3 miembros, 5 equipos mentoreados, 1 proyecto, ∞ historias)

### 4. **Timeline Narrativo**
Consta de 12 secciones principales:

1. **Contexto y Oportunidad** - El año significativo
2. **El Cambio de Paradigma: STEAM Avanzado** - Por qué cambiar
3. **El Nacimiento de Memora** - Historia y concepto
4. **Dimensión Social: Repositorio de Memorias** - Impacto comunitario
5. **Proyección y Hoja de Ruta** - Plan de escalabilidad
6. **Desarrollo Técnico** - Hardware y software
7. **El Equipo: Estructura y Cambios** - Integrantes y roles
8. **Apoyo Comunitario** - Sponsors y respaldo local
9. **Mentoreo: Del "Otro Lado"** - Experiencia Entre Pares
10. **Encuentro con UTEC Rivera** - Visita universitaria
11. **Final Nacional: Antel Arena** - Cierre competitivo
12. **Reflexiones y El Camino Adelante** - Aprendizajes y futuro

### 5. **Galerías de Imágenes**
Cada sección incluye placeholders para fotos. Los placeholders muestran:
- "Foto del prototipo de Memora"
- "Equipo trabajando en el proyecto"
- "Pantalla táctil y componentes"
- etc.

### 6. **Footer**
- Navegación secundaria
- Enlace a todas las trayectorias (2021, 2022-23, 2023-24, 2024-25)
- Información de contacto

## 🖼️ Personalización de Imágenes

Para agregar fotos a las galerías, reemplaza los placeholders con código HTML real:

### Ejemplo de reemplazo:
```html
<!-- ANTES (Placeholder) -->
<div class="gallery-item">
    <div class="gallery-placeholder">
        Foto del prototipo de Memora
    </div>
</div>

<!-- DESPUÉS (Con imagen real) -->
<div class="gallery-item">
    <img src="memora_prototipo.jpg" alt="Prototipo de Memora funcional">
</div>
```

### Ubicaciones donde agregar fotos:
1. **Memora Origins** (línea ~350)
   - Foto del prototipo
   - Equipo trabajando
   - Componentes técnicos

2. **Technical Development** (línea ~550)
   - Construcción del prototipo
   - Raspberry Pi y componentes
   - Pruebas y ajustes

3. **Community Support** (línea ~750)
   - Laboratorio de Blockbit
   - Cobertura en medios
   - Reunión con autoridades

4. **UTEC Visit** (línea ~920)
   - Visita a instalaciones
   - Encuentro con académicos
   - Recorrida por laboratorios

5. **National Finals** (línea ~1050)
   - Presentación en Antel Arena
   - Equipo en la final
   - Momento de celebración

## 🎯 Estilos y Colores

La página usa la paleta de Blockbit:
- **Celeste Uruguayo**: #0038a8
- **Celeste Claro**: #55d6ff
- **Dorado**: #ffd700
- **Blanco**: #ffffff
- **Negro**: #000000

Todos los elementos están diseñados para mantener consistencia visual con el sitio principal.

## 📱 Responsive Design

La página es totalmente responsiva y se adapta a:
- Móviles (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🔗 Integración con el Sitio

### En `index.html` se agregó:
1. Un cuarto panel en el horizontal scroll de trayectorias
2. Se actualizó el ancho del contenedor de 300vw a 400vw
3. El panel incluye:
   - Imagen: `celebracion.png`
   - Título: "Transición y Autonomía 🌟"
   - Descripción corta del año
   - Enlace a `trayectoria_2425.html`

## 🎬 Características Especiales

- **Timeline Visual**: Línea visual conectando todas las secciones
- **Reveal on Scroll**: Animaciones suaves al hacer scroll
- **Sponsor Logos**: Grid de logos de sponsors con efectos hover
- **Quote Sections**: Secciones destacadas con citas importantes
- **Stat Boxes**: Cajas de estadísticas con números destacados
- **Efectos Gradient**: Textos con gradiente animado

## 🚀 Cómo Completar la Personalización

1. **Reúne las fotos** (mira la carpeta actual para imágenes disponibles)
2. **Reemplaza los placeholders** con `<img src="ruta/foto.jpg" alt="descripcion">`
3. **Ajusta las descripciones** si es necesario (aunque ya están completamente redactadas)
4. **Revisa en múltiples navegadores** para asegurar compatibilidad
5. **Sube los cambios** a git

### Imágenes disponibles en la carpeta:
- `celebracion.png` - Ya usada en el panel de index
- `celebrandin.png`
- `imprimiendo.jpg` - Buena para sección técnica
- `foto_felibuilding.png` - Construcción
- `foto_robot.png`
- `recuerdo1.JPG` a `recuerdo5(2).JPG` - Para sección de memorias

## ✅ Checklist de Finalización

- [x] Página HTML creada y estructurada
- [x] Estilos CSS aplicados (colores, tipografía, animaciones)
- [x] 12 secciones de timeline con contenido auténtico
- [x] Galerías de imagen preparadas para fotos
- [x] Header y Footer funcionales
- [x] Scripts para scroll reveal y animaciones
- [x] Enlace agregado en index.html
- [x] Panel horizontal scroll actualizado a 4 paneles
- [x] Logos de sponsors referenciados
- [ ] Fotos reales insertadas en las galerías
- [ ] Testing en móvil y desktop
- [ ] Push a repositorio

## 📞 Notas

- El contenido está completamente escrito en auténtico español
- Mantiene el tono de Blockbit: profesional, inspirador y comunitario
- Cada sección cuenta una parte de la historia sin repetición
- Las galerías de imagen pueden llenarse progresivamente
- El archivo es modular y fácil de mantener

---

Creado: Diciembre 22, 2025
Archivo: `/media/rodrigo/AKASO/blockbit.info/trayectoria_2425.html`
