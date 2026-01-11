# 🍔 BurgerStack - Jamstack Website

Un sitio web moderno y completamente estático para una hamburguesería, construido con arquitectura **Jamstack** (JavaScript, APIs, Markup) listo para desplegar en GitHub Pages.

## ✨ Características

- ✅ **100% Estático** - Compatible con GitHub Pages sin servidor
- ✅ **Menú Dinámico** - Carga hamburguesas desde una API externa
- ✅ **Sistema de Pedidos** - Formulario con carrito en tiempo real
- ✅ **Diseño Responsivo** - Mobile-first, funciona en cualquier dispositivo
- ✅ **Sin Dependencias** - Vanilla JavaScript, sin frameworks
- ✅ **Moderno y Profesional** - CSS Grid, Flexbox, animaciones
- ✅ **Listo para Producción** - Comentarios y guía de integración incluidos

## 📁 Estructura del Proyecto

```
GOTHAM/
├── index.html                      # Estructura HTML principal
├── styles.css                      # Estilos (6 secciones principales)
├── script.js                       # Lógica JavaScript (menú, carrito, pedidos)
├── README.md                       # Este archivo
└── SETUP_EXTERNAL_SERVICES.md      # Guía detallada de servicios externos
```

## 🚀 Inicio Rápido

### Sin Configuración (Demo Funcional)

1. Abre `index.html` en tu navegador
2. ¡Listo! El sitio funciona con datos locales

```bash
# Opción 1: Con Python
python -m http.server 8000
# Luego abre: http://localhost:8000/GOTHAM

# Opción 2: Con Node.js
npx http-server
# Luego abre: http://localhost:8000/GOTHAM

# Opción 3: Abre directamente
open GOTHAM/index.html
```

### Con Servicios Externos (Producción)

Sigue la guía: [`SETUP_EXTERNAL_SERVICES.md`](SETUP_EXTERNAL_SERVICES.md)

## 📖 Secciones del Sitio

### 1. Navegación Sticky
- Logo de BurgerStack
- Links de navegación (Inicio, Menú, Ordena Ahora)
- Se queda fija al hacer scroll

### 2. Sección Hero
- Imagen de fondo con gradiente
- Título atractivo
- Call-to-action (CTA) principal
- Altura completa de pantalla

### 3. Menú Dinámico
- Grid responsivo de 6 hamburguesas
- Cada carta muestra: nombre, descripción, precio
- Botón "Agregar al Pedido"
- Carga desde API externa (simulada)

### 4. Sistema de Pedidos
- **Carrito persistente** en memoria
- Incrementar/decrementar cantidades
- Eliminar items
- Total automático
- **Formulario de cliente:**
  - Nombre, email, teléfono, dirección
  - Notas especiales (sin cebolla, etc.)
  - Envío simulado (real con servicios externos)

### 5. Footer
- Información de copyright
- Mensaje Jamstack

## 🛠️ Tecnologías Usadas

| Tecnología | Propósito |
|-----------|-----------|
| **HTML5** | Semántica y estructura |
| **CSS3** | Diseño, grid, flexbox, animaciones |
| **Vanilla JavaScript** | Interactividad sin dependencias |
| **Fetch API** | Comunicación con APIs externas |
| **GitHub Pages** | Hosting gratuito y estático |

## 📝 Código Principal

### Cargar Menú (script.js)

```javascript
// Obtiene hamburguesas desde API externa
async function loadBurgers() {
    const response = await fetch(BURGERS_API_URL, {
        headers: {
            'Content-Type': 'application/json',
            // TODO: Agregar tu API key aquí
        }
    });
    const burgers = await response.json();
    displayBurgers(burgers);
}
```

### Agregar al Carrito

```javascript
// Agrega una hamburguesa al carrito
function addToOrder(id, name, price) {
    const existingItem = orderCart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        orderCart.push({ id, name, price, quantity: 1 });
    }
    
    updateOrderDisplay();
}
```

### Enviar Pedido

```javascript
// Envía el pedido a un servicio externo
async function handleOrderSubmit(event) {
    event.preventDefault();
    
    const orderData = {
        customer: { /* datos del cliente */ },
        items: orderCart,
        total: calculateTotal(),
        timestamp: new Date().toISOString()
    };
    
    // TODO: Reemplazar con tu URL real
    const response = await fetch(ORDERS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    });
}
```

## 🔌 Servicios Externos Recomendados

### Base de Datos (Menú)
- **Supabase** (recomendado) - PostgreSQL + REST API
- **Firebase** - Alternativa de Google
- **MongoDB Atlas** - NoSQL con REST

### Manejo de Pedidos
- **Supabase** (recomendado) - Mismo servicio que menú
- **Formspree** - Formularios → Email
- **AWS Lambda** - Serverless functions

### Emails
- **SendGrid** - Transaccionales
- **Resend** - Modern email API
- **Formspree** - Incluido en el formulario

## 📊 Diagrama de Flujo

```
Cliente (GitHub Pages)
    ↓
Fetch GET /burgers  →  Supabase (BD de menú)
    ↓
Muestra Hamburguesas
    ↓
Usuario selecciona + rellena formulario
    ↓
Fetch POST /orders  →  Supabase (guarda pedidos)
    ↓
Confirmación al usuario
```

## 🎨 Personalización

### Cambiar Colores
En `styles.css`, actualiza las variables:

```css
:root {
    --primary-color: #FF6B35;      /* Naranja actual */
    --secondary-color: #004E89;    /* Azul actual */
    --accent-color: #F7B801;       /* Amarillo actual */
}
```

### Agregar Hamburguesas (sin API)
En `script.js`, modifica `LOCAL_BURGERS`:

```javascript
const LOCAL_BURGERS = [
    {
        id: 7,
        name: 'Mi Nueva Hamburguesa',
        description: 'Con mis ingredientes favoritos',
        price: 11.99
    }
];
```

### Cambiar URLs de APIs
En `script.js`, reemplaza al principio:

```javascript
const BURGERS_API_URL = 'TU_URL_AQUI';
const ORDERS_API_URL = 'TU_URL_AQUI';
```

## 📱 Responsive Design

El sitio es completamente responsivo:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1919px)
- ✅ Móvil (320px - 767px)

Prueba con DevTools (F12 → Dispositivo móvil)

## ⚡ Performance

- Carga rápida (sin bundler, sin transpilación)
- Imágenes optimizadas (gradientes CSS)
- Cero dependencias externas
- Cache de GitHub Pages

## 🔒 Seguridad

- ✅ No hay credenciales hardcodeadas
- ✅ Usar `anon` key en Supabase (no `service_role`)
- ✅ RLS activado en tablas
- ✅ Validación en cliente y servidor

## 🐛 Troubleshooting

### "CORS Error"
- Necesitas que tu API externe permita CORS
- Supabase y Formspree lo hacen por defecto

### "Hamburguesas no cargan"
- Checa la consola (F12 → Console)
- Verifica que BURGERS_API_URL sea correcta
- Fallback a datos locales funciona igual

### "Pedido no se envía"
- Checa que haya hamburguesas en el carrito
- Verifica que ORDERS_API_URL sea correcta
- Mira los errores en la consola del navegador

## 📚 Recursos

- [Supabase Docs](https://supabase.com/docs)
- [Formspree Docs](https://formspree.io/docs)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [GitHub Pages](https://pages.github.com/)

## 📄 Licencia

Libre para usar, modificar y distribuir. Hecho con 🍔 y amor.

## 👨‍💻 Autor

Desarrollado como ejemplo de arquitectura Jamstack moderna.

---

**¿Necesitas ayuda?** Lee [`SETUP_EXTERNAL_SERVICES.md`](SETUP_EXTERNAL_SERVICES.md) para la configuración completa.
