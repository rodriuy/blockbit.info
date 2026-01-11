# 🎯 BurgerStack - Casos de Uso y Soluciones

Elige tu caso de uso y sigue las instrucciones específicas.

---

## 📌 CASO 1: "Solo Quiero Probar Ahora"

**Tiempo:** 2 minutos
**Requisitos:** Navegador web

### Pasos

1. Abre el archivo `index.html` en tu navegador
2. ¡Listo! El sitio funciona completamente en modo demo

**Lo que verás:**
- ✓ 6 hamburguesas precargadas
- ✓ Sistema de carrito funcional
- ✓ Formulario de pedidos
- ✓ Todo sin necesidad de APIs externas

**Limitación:** Los pedidos no se guardan en ningún lado (es demo)

---

## 📌 CASO 2: "Voy a Deployar en GitHub Pages + Supabase"

**Tiempo:** 15-20 minutos
**Requisitos:** Cuenta de GitHub, Supabase

### Paso 1: Configura Supabase

```
1. Ve a supabase.com y crea una cuenta gratuita
2. Crea un nuevo proyecto
3. Espera a que se inicie (2-3 minutos)
4. En el sidebar, ve a "SQL Editor"
5. Copia y pega este SQL:
```

```sql
-- Crear tabla de hamburguesas
CREATE TABLE burgers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar hamburguesas
INSERT INTO burgers (name, description, price) VALUES
('Classic BurgerStack', 'Carne 100% de res, queso cheddar, tomate y lechuga', 8.99),
('Bacon BBQ', 'Carne con salsa BBQ, bacon crujiente y cebolla caramelizada', 10.99),
('Spicy Jalapeño', 'Carne picante, jalapeños, queso pepper jack y mayo jalapeño', 9.99),
('Doble Stack', 'Dos hamburguesas con queso derretido, tomate y lechuga', 14.99),
('Veggie Burger', 'Hamburguesa vegetariana con champiñones, aguacate y queso suizo', 9.49),
('Premium Mushroom', 'Carne premium con champiñones salteados, queso suizo y trufa', 12.99);

-- Crear tabla de pedidos
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  customer_email VARCHAR(100) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  customer_address TEXT NOT NULL,
  special_notes TEXT,
  items JSONB NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Habilitar acceso público
ALTER TABLE burgers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON burgers FOR SELECT USING (true);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON orders FOR INSERT WITH CHECK (true);
```

6. Click "Run" (Ctrl+Enter)
7. En el sidebar, ve a "Settings" → "API"
8. Copia:
   - `Project URL` (algo como `https://abcdef123456.supabase.co`)
   - `anon public` API Key

### Paso 2: Actualiza script.js

Abre `script.js` y modifica las primeras líneas:

```javascript
// LÍNEA 10-13 (ACTUALIZA ESTO):

const BURGERS_API_URL = 'https://your-project.supabase.co/rest/v1/burgers?select=*';
const ORDERS_API_URL = 'https://your-project.supabase.co/rest/v1/orders';

// Luego busca la función loadBurgers() (línea ~60)
// En los headers, agrega:

headers: {
    'Content-Type': 'application/json',
    'apikey': 'tu_anon_api_key_aqui',
    'Authorization': 'Bearer tu_anon_api_key_aqui'
}

// Y en handleOrderSubmit(), descomenta la sección OPCIÓN 2 (línea ~200)
```

### Paso 3: Prueba Localmente

```bash
# En tu terminal:
cd /media/rodrigo/AKASO/blockbit.info
python -m http.server 8000

# Abre en navegador:
http://localhost:8000/GOTHAM
```

Si ves las hamburguesas: **¡Funciona!**

### Paso 4: Deploy en GitHub Pages

```bash
git add .
git commit -m "Add BurgerStack with Supabase integration"
git push origin main
```

Luego en GitHub:
- Settings → Pages
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/GOTHAM`
- Save

Tu sitio estará en: `https://username.github.io/blockbit.info/GOTHAM/`

---

## 📌 CASO 3: "Solo Quiero Formularios → Email (Formspree)"

**Tiempo:** 5-10 minutos
**Requisitos:** Cuenta de Formspree

### Configuración

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta con tu email
3. Crea un nuevo formulario
4. Copia el ID (verás algo como `f/abcdef123`)

En `script.js`, línea 12:

```javascript
const ORDERS_API_URL = 'https://formspree.io/f/tu_id_aqui';
```

Luego en `handleOrderSubmit()`, busca el comentario `// TODO: Reemplazar` y descomenta el bloque de Formspree.

**Ventaja:** Los pedidos te llegan por email automáticamente
**Desventaja:** No hay base de datos, solo emails

---

## 📌 CASO 4: "Soy Principiante, Hazme un Paso a Paso"

**Para:** Aprender Jamstack desde cero

### Semana 1: Entiende el Código

1. Lee `README.md`
2. Abre `index.html` en un editor de texto
3. Lee los comentarios en el código
4. Modifica pequeñas cosas (colores, nombres)
5. Abre en navegador y ve los cambios

### Semana 2: Servicios Externos

1. Crea cuenta en Supabase (es gratuito)
2. Lee la guía en `SETUP_EXTERNAL_SERVICES.md`
3. Copia el SQL en Supabase
4. Obtén tu API key

### Semana 3: Conecta las APIs

1. Actualiza `script.js` con tus URLs
2. Prueba localmente con `python -m http.server`
3. Verifica que las hamburguesas carguen
4. Prueba que el formulario envíe datos

### Semana 4: Deploy

1. Sube todo a GitHub
2. Activa GitHub Pages
3. Tu sitio estará vivo en internet
4. Comparte con amigos

---

## 📌 CASO 5: "Necesito Pagos (Stripe)"

**Complejidad:** Media
**Requisitos:** Conocimiento de backend

### Resumen de Implementación

Para agregar pagos, necesitas un backend (no puro Jamstack):

**Opción A: Netlify Functions**
```javascript
// En netlify/functions/create-payment.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { amount, email } = JSON.parse(event.body);
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'BurgerStack Order' },
        unit_amount: amount * 100
      },
      quantity: 1
    }],
    success_url: 'https://yoursite.com/success',
    cancel_url: 'https://yoursite.com/cancel'
  });

  return { statusCode: 200, body: JSON.stringify({ id: session.id }) };
};
```

**Opción B: Supabase Edge Functions**
Similar a Netlify Functions pero en Supabase.

**Opción C: Vercel Functions**
Si deployas en Vercel en lugar de GitHub Pages.

---

## 📌 CASO 6: "Quiero Agregar Más Funciones"

### Notificaciones por Email

Usa SendGrid + Supabase Functions:

```sql
-- En Supabase SQL Editor:
CREATE TRIGGER send_email_on_order
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION send_order_confirmation();
```

### Admin Panel

Crea una página `/admin.html` que muestre los pedidos:

```html
<!-- admin.html -->
<h1>Admin - Gestionar Pedidos</h1>
<div id="orders"></div>

<script>
async function loadOrders() {
  const response = await fetch(
    'https://your-project.supabase.co/rest/v1/orders',
    {
      headers: { 'apikey': 'tu_key' }
    }
  );
  const orders = await response.json();
  // Mostrar pedidos en una tabla
}
</script>
```

### Validación Avanzada

En `script.js`, expande la validación:

```javascript
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  const regex = /^\+?[0-9]{9,15}$/;
  return regex.test(phone);
}
```

### Sistema de Categorías

Agrega una columna a la tabla `burgers`:

```sql
ALTER TABLE burgers ADD COLUMN category VARCHAR(50);

UPDATE burgers SET category = 'Classic' WHERE id IN (1);
UPDATE burgers SET category = 'Premium' WHERE id IN (6);
```

Luego filtra en JavaScript:

```javascript
function filterByCategory(category) {
  return burgers.filter(b => b.category === category);
}
```

---

## 📌 CASO 7: "Necesito Análisis de Datos"

### Google Analytics

Agrega a `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Tracking de Eventos

En `script.js`:

```javascript
function addToOrder(id, name, price) {
  // ... código existente ...
  
  // Track evento
  if (window.gtag) {
    gtag('event', 'add_to_cart', {
      value: price,
      currency: 'USD',
      items: [{ name: name }]
    });
  }
}
```

---

## 📌 CASO 8: "Quiero Vender Mi Sitio"

### Qué Incluir

1. ✅ Código HTML/CSS/JS limpio
2. ✅ Documentación completa
3. ✅ Instrucciones de instalación
4. ✅ Guía de configuración de APIs
5. ✅ Licencia de uso

### Dónde Vender

- **Gumroad:** Para archivos digitales
- **Envato:** Para templates
- **Fiverr:** Como servicio personalizado
- **Tu blog:** Venta directa

### Precio Recomendado

- Template básico: $19-49
- Con documentación: $49-99
- Con soporte: $99-199

---

## 📌 CASO 9: "Quiero Hosting Alternativo a GitHub Pages"

### Opciones

| Hosting | Ventajas | Costo |
|---------|----------|-------|
| **Netlify** | Deploy automático | Gratis |
| **Vercel** | Optimizado para JS | Gratis |
| **AWS S3** | Escalable | $1-5/mes |
| **Cloudflare Pages** | Rápido global | Gratis |

### Deploy en Netlify

```bash
# 1. Instala Netlify CLI
npm install -g netlify-cli

# 2. En tu proyecto
netlify deploy --dir=GOTHAM

# 3. Sigue las instrucciones
```

---

## 📌 CASO 10: "Necesito API Personalizada"

Si los servicios existentes no son suficientes, crea tu propia API:

### Con Node.js + Express

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// GET /api/burgers
app.get('/api/burgers', (req, res) => {
  res.json(LOCAL_BURGERS);
});

// POST /api/orders
app.post('/api/orders', (req, res) => {
  const order = req.body;
  // Guardar en BD
  res.json({ id: 123, status: 'saved' });
});

app.listen(3000);
```

### Deploy

- **Heroku:** Hosting gratuito (requiere tarjeta)
- **Railway:** Alternativa a Heroku
- **Render:** Fácil de usar

---

## 🎯 Resumen de Decisiones

```
¿Cuál es tu caso?

┌─ SOLO DEMOSTRACIÓN
│  └─ Abre index.html
│
├─ PRODUCCIÓN COMPLETA
│  └─ Supabase + GitHub Pages (RECOMENDADO)
│
├─ SOLO FORMULARIOS
│  └─ Formspree
│
├─ MÁXIMO CONTROL
│  └─ Crea tu API con Node.js
│
└─ COMERCIO ELECTRÓNICO
   └─ Stripe + Supabase
```

---

## 📞 Soporte Rápido

Si algo no funciona:

1. **Abre DevTools:** F12
2. **Ve a Console:** Tab "Console"
3. **Busca el error rojo**
4. **Cópialo y búscalo en Google**
5. **Si es de Supabase:** Lee su documentación oficial

---

**Elige tu caso y comienza. ¡Mucho éxito!** 🚀

