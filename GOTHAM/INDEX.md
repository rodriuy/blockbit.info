# 📚 BurgerStack - Índice de Documentación

Bienvenido a BurgerStack. Este directorio contiene todo lo que necesitas para un sitio web de hamburguería profesional en arquitectura Jamstack.

---

## 🚀 COMIENZA AQUÍ

### Para Principiantes
1. **Leer primero:** [`QUICKSTART.md`](#quickstartmd) (5 minutos)
2. **Luego:** [`README.md`](#readmemd) (entender el proyecto)
3. **Finalmente:** [`USE_CASES.md`](#use_casesmd) (elegir tu camino)

### Para Desarrolladores Experimentados
1. **Ir directo a:** [`SETUP_EXTERNAL_SERVICES.md`](#setup_external_servicesmd)
2. **Revisar:** [`CONFIG_EXAMPLES.js`](#config_examplesjs) (ejemplos de código)
3. **Ir a:** [`IMPLEMENTATION_CHECKLIST.md`](#implementation_checklistmd) (deployment)

---

## 📁 Archivos Incluidos

### `index.html`
**Descripción:** Archivo HTML principal con estructura completa.

**Contiene:**
- Navegación sticky
- Sección hero (460x viewport)
- Grid de menú dinámico
- Formulario de pedidos
- Footer

**Cuándo usarlo:** Siempre es la base de tu sitio.

**Modificaciones comunes:**
- Cambiar nombre de "BurgerStack"
- Agregar/remover secciones
- Personalizar textos

---

### `styles.css`
**Descripción:** Estilos CSS modernos con diseño responsivo.

**Características:**
- 520 líneas de CSS puro (sin frameworks)
- CSS Grid y Flexbox
- Animaciones suaves
- Variables CSS para temas
- Responsive (móvil, tablet, desktop)

**Secciones:**
1. Variables globales
2. Navegación
3. Hero
4. Menú
5. Pedidos
6. Footer

**Cuándo modificarlo:**
- Cambiar colores (actualiza `:root`)
- Ajustar espacios/padding
- Agregar nuevos componentes
- Cambiar fuentes

---

### `script.js`
**Descripción:** Lógica JavaScript con fetch API.

**Funcionalidades:**
- Cargar hamburguesas desde API
- Gestionar carrito de compras
- Validar y enviar formularios
- Manejo de errores
- Fallback a datos locales

**Secciones principales:**
```
1. Configuración (URLs de APIs)
2. Datos locales (fallback)
3. Carga de menú
4. Gestión de carrito
5. Envío de formulario
6. Funciones auxiliares
7. Inicialización
```

**Cuándo modificarlo:**
- Reemplazar URLs de APIs
- Agregar nuevas hamburguesas
- Cambiar validaciones
- Agregar nuevas funciones

---

### `README.md` ⭐ IMPORTANTE
**Descripción:** Documentación general del proyecto.

**Contiene:**
- Visión general del proyecto
- Características
- Estructura del proyecto
- Tecnologías usadas
- Guía de personalización
- Troubleshooting
- Recursos útiles

**Leer si:** Necesitas entender qué es BurgerStack.

**Tiempo de lectura:** 10 minutos

---

### `QUICKSTART.md` ⭐ EMPIEZA AQUÍ
**Descripción:** Guía rápida de inicio en 5 minutos.

**Contiene:**
- Cómo ver el sitio AHORA
- Pasos rápidos para producción
- Características implementadas
- Servicios externos (tabla)
- Arquitectura Jamstack
- FAQ rápidas

**Leer si:** Quieres comenzar en 5 minutos.

**Tiempo de lectura:** 5 minutos

---

### `SETUP_EXTERNAL_SERVICES.md` ⭐ MÁS IMPORTANTE
**Descripción:** Guía detallada para configurar servicios externos.

**Contiene:**
- Por qué necesitas servicios externos
- Comparativa de 5 servicios
- Pasos de configuración para cada uno:
  - Supabase (recomendado)
  - Formspree
  - Firebase
  - SendGrid
  - Google Sheets
- Seguridad (RLS, keys)
- Troubleshooting
- Próximos pasos

**Leer si:** Vas a ir a producción.

**Tiempo de lectura:** 20 minutos

**Secciones claves:**
- Supabase setup (recomendado)
- Formspree setup (simple)
- Seguridad
- Arquitectura

---

### `CONFIG_EXAMPLES.js`
**Descripción:** Ejemplos de código para diferentes servicios.

**Contiene:**
- Código listo para Supabase
- Código para Formspree
- Código para Firebase
- Código para Airtable
- Código para Google Sheets

**Uso:** Copiar y pegar el que necesites en `script.js`.

**Ejemplo:**
```javascript
// Si necesitas Supabase, busca:
// "OPCIÓN 1: SUPABASE (RECOMENDADO)"
// Y copia el código exactamente
```

---

### `IMPLEMENTATION_CHECKLIST.md`
**Descripción:** Checklist paso a paso para ir a producción.

**Fases:**
1. **Fase 1:** Configuración local
2. **Fase 2:** Servicios externos
3. **Fase 3:** Testing de APIs
4. **Fase 4:** Deploy en GitHub Pages
5. **Fase 5:** Seguridad
6. **Fase 6:** Monitoreo
7. **Fase 7:** Personalización
8. **Fase 8:** Documentación

**Uso:** Marca cada checkbox mientras avanzas.

**Tiempo estimado:** 1-2 horas

---

### `USE_CASES.md`
**Descripción:** Soluciones para 10 casos de uso diferentes.

**Casos incluidos:**
1. Solo quiero probar ahora
2. Deploy en GitHub Pages + Supabase
3. Solo formularios (Formspree)
4. Soy principiante, paso a paso
5. Necesito pagos (Stripe)
6. Quiero agregar más funciones
7. Necesito análisis
8. Voy a vender mi sitio
9. Hosting alternativo
10. API personalizada

**Uso:** Encuentra tu caso y sigue los pasos exactos.

---

## 🗺️ Mapa de Lectura Recomendado

### Para Copiar y Usar (10 minutos)
```
QUICKSTART.md
    ↓
index.html (ejecutar en navegador)
    ↓
¡LISTO! Funciona.
```

### Para Entender el Proyecto (30 minutos)
```
README.md
    ↓
index.html (leer código)
    ↓
styles.css (entender estilos)
    ↓
script.js (entender lógica)
```

### Para Ir a Producción (1-2 horas)
```
SETUP_EXTERNAL_SERVICES.md
    ↓
CONFIG_EXAMPLES.js (copiar tu caso)
    ↓
IMPLEMENTATION_CHECKLIST.md
    ↓
GitHub Pages
    ↓
¡EN VIVO!
```

### Para Casos Específicos (variable)
```
USE_CASES.md
    ↓
Encontrar tu caso
    ↓
Seguir pasos exactos
    ↓
SETUP_EXTERNAL_SERVICES.md (si es necesario)
```

---

## 🎯 Matriz de Decisión

**Si quieres...**

| Quiero... | Lee... | Tiempo |
|-----------|--------|--------|
| Probarlo rápido | QUICKSTART | 5 min |
| Entender todo | README | 10 min |
| Ir a producción | SETUP_EXTERNAL_SERVICES | 20 min |
| Copiar código | CONFIG_EXAMPLES | 10 min |
| Checklist completo | IMPLEMENTATION_CHECKLIST | 1-2 horas |
| Caso específico | USE_CASES | Variable |

---

## 📞 Flujo de Preguntas

**Pregunta:** "¿Cómo empiezo?"
→ Lee: `QUICKSTART.md`

**Pregunta:** "¿Qué es esto?"
→ Lee: `README.md`

**Pregunta:** "¿Cómo configuro Supabase?"
→ Lee: `SETUP_EXTERNAL_SERVICES.md` → Sección Supabase

**Pregunta:** "¿Cuál es el código exacto?"
→ Lee: `CONFIG_EXAMPLES.js` → Busca tu servicio

**Pregunta:** "¿Cómo verifico que funciona?"
→ Lee: `IMPLEMENTATION_CHECKLIST.md` → Fase 3

**Pregunta:** "Tengo un caso especial"
→ Lee: `USE_CASES.md` → Encuentra tu caso

**Pregunta:** "No entiendo el código"
→ Lee: `README.md` → Sección "Código Principal"

---

## 💾 Resumen de Cambios Necesarios

### Para Demo (Cero cambios)
- ✅ Todo funciona de inmediato
- ✅ Solo abre `index.html`

### Para Producción con Supabase (3 cambios)
1. Copia SQL en Supabase
2. Obtén URLs y API key
3. Pega en `script.js` líneas 10-13

### Para Producción con Formspree (2 cambios)
1. Obtén tu ID de formulario
2. Pega en `script.js` línea 12

---

## 🔒 Seguridad - Checklist Rápido

- ✅ ¿Usaste `anon` key? (no `service_role`)
- ✅ ¿Habilitaste RLS en Supabase?
- ✅ ¿Las URLs no tienen secretos?
- ✅ ¿Validaste el formulario?

Si todo es "sí", estás seguro. 🔐

---

## 📈 Próximos Pasos Después de Deploy

### Semana 1-2
- [ ] Recibe primeros pedidos
- [ ] Verifica que los datos se guardan
- [ ] Prueba el sistema completo
- [ ] Ajusta detalles menores

### Semana 3-4
- [ ] Agrega Google Analytics
- [ ] Configura emails de confirmación
- [ ] Personaliza más (colores, fotos)
- [ ] Comparte en redes sociales

### Mes 2
- [ ] Agrega sistema de pagos
- [ ] Crea admin panel
- [ ] Amplía el menú
- [ ] Mejora el SEO

---

## 🆘 Soporte Rápido

**Problema:** No cargan las hamburguesas
→ F12 → Console → ¿Hay error rojo?
→ Copia el error → Búscalo en Google

**Problema:** CORS Error
→ Tu API debe permitir CORS
→ Supabase: Ya lo permite
→ Tu servidor: Agrega headers CORS

**Problema:** API Key inválida
→ Copia la `anon` key, no `service_role`
→ Verifica que sea del proyecto correcto

**Problema:** Pedido no se envía
→ ¿Hay hamburguesas en el carrito?
→ ¿Formulario está completo?
→ ¿La URL de API es correcta?

---

## 📚 Tabla de Contenidos Completa

```
BurgerStack/
├── index.html                    (Tu sitio web)
├── styles.css                    (Diseño y estilos)
├── script.js                     (Lógica interactiva)
│
├── DOCUMENTACIÓN:
├── README.md                     ← Empieza aquí (general)
├── QUICKSTART.md                 ← Empieza aquí (rápido)
├── SETUP_EXTERNAL_SERVICES.md    ← Empieza aquí (APIs)
├── CONFIG_EXAMPLES.js            ← Ejemplos de código
├── IMPLEMENTATION_CHECKLIST.md   ← Deployment
├── USE_CASES.md                  ← 10 casos diferentes
├── INDEX.md                      ← Este archivo
│
└── GUÍA VISUAL:
    Sección Hero → Menú → Carrito → Formulario → Footer
```

---

## ✨ Resumen Ejecutivo

**BurgerStack es:**
- ✅ Un sitio web Jamstack moderno
- ✅ 100% HTML/CSS/JavaScript
- ✅ Listo para GitHub Pages
- ✅ Completamente personalizable
- ✅ Con documentación profesional

**Está listo para:**
- ✅ Producción inmediata
- ✅ Aprendizaje (principiantes)
- ✅ Venta como template
- ✅ Escalabilidad

**Siguiente paso:**
- Principiante: Lee `QUICKSTART.md`
- Desarrollador: Ve a `SETUP_EXTERNAL_SERVICES.md`
- Caso especial: Revisa `USE_CASES.md`

---

**¡Bienvenido a BurgerStack! 🍔**

Cualquier pregunta, consulta la documentación correspondiente.

*Última actualización: Enero 2025*
