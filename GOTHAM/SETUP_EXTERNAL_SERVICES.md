# BurgerStack - Guía de Servicios Externos

## 📋 Resumen del Proyecto

BurgerStack es un sitio web Jamstack completamente estático que se puede desplegar en GitHub Pages. Sin embargo, para que el menú dinámico y los pedidos funcionen en producción, necesitas configurar servicios externos que actúen como backend.

---

## 🔧 Servicios Externos Necesarios

### 1. **Base de Datos de Menú (Supabase)**

**¿Por qué?** GitHub Pages es completamente estático. Para servir hamburguesas dinámicamente desde una "base de datos", necesitas una API externa.

**Opción Recomendada: Supabase** (PostgreSQL + REST API)

#### Pasos de Configuración:

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta gratuita
2. Crea un nuevo proyecto
3. En la sección **SQL Editor**, ejecuta este script para crear la tabla:

```sql
CREATE TABLE burgers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO burgers (name, description, price) VALUES
('Classic BurgerStack', 'Carne 100% de res, queso cheddar, tomate y lechuga', 8.99),
('Bacon BBQ', 'Carne con salsa BBQ, bacon crujiente y cebolla caramelizada', 10.99),
('Spicy Jalapeño', 'Carne picante, jalapeños, queso pepper jack y mayo jalapeño', 9.99),
('Doble Stack', 'Dos hamburguesas con queso derretido, tomate y lechuga', 14.99),
('Veggie Burger', 'Hamburguesa vegetariana con champiñones, aguacate y queso suizo', 9.49),
('Premium Mushroom', 'Carne premium con champiñones salteados, queso suizo y trufa', 12.99);
```

4. Ve a **Settings → API** y copia:
   - `Project URL`: ejemplo `https://abcdef123456.supabase.co`
   - `API Key` (anon key): necesaria para consultas públicas

5. **En `script.js`, reemplaza:**

```javascript
// Antes:
const BURGERS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Después:
const BURGERS_API_URL = 'https://your-project.supabase.co/rest/v1/burgers?select=*';
```

6. **En la función `loadBurgers()`, reemplaza los headers:**

```javascript
headers: {
    'Content-Type': 'application/json',
    'apikey': 'tu_anon_api_key_aqui',
    'Authorization': 'Bearer tu_anon_api_key_aqui'
}
```

---

### 2. **Manejo de Pedidos (Formspree o Supabase)**

**¿Por qué?** Necesitas un lugar donde se guarden los pedidos y se envíen confirmaciones al cliente.

#### **Opción A: Formspree (Más Simple)**

Ideal para pequeños volúmenes de pedidos, envía emails automáticamente.

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta gratuita con tu email
3. Crea un nuevo formulario y obtén el ID (algo como `f/xyzabc123`)
4. En `script.js`, reemplaza:

```javascript
// Antes:
const ORDERS_API_URL = 'https://formspree.io/f/xyzabc123';

// Después:
const ORDERS_API_URL = 'https://formspree.io/f/TU_ID_AQUI';
```

5. Y en `handleOrderSubmit()`, descomenta:

```javascript
const response = await fetch('https://formspree.io/f/TU_ID_AQUI', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
});
```

**Ventajas:**
- Gratuito y simple
- Recibe pedidos por email
- Panel básico de gestión

**Desventajas:**
- Limitado a emails
- No hay base de datos persistente
- Plan gratuito: 50 envíos/mes

---

#### **Opción B: Supabase (Recomendado)**

Mismo servicio que usas para el menú, guarda todo en una base de datos.

1. En el mismo proyecto de Supabase, crea otra tabla:

```sql
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
```

2. En `script.js`, reemplaza en `handleOrderSubmit()`:

```javascript
const response = await fetch(
    'https://your-project.supabase.co/rest/v1/orders',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'tu_anon_api_key_aqui',
            'Authorization': 'Bearer tu_anon_api_key_aqui'
        },
        body: JSON.stringify(orderData)
    }
);
```

**Ventajas:**
- Todos los datos en un lugar
- Panel administrativo para gestionar pedidos
- Escalable y profesional
- Plan gratuito muy generoso

---

### 3. **Email de Confirmación (SendGrid o Resend)**

Para enviar confirmaciones automáticas al cliente:

#### **SendGrid:**
1. Crea cuenta en [sendgrid.com](https://sendgrid.com)
2. Verifica tu dominio
3. Obtén una API key
4. Usa un backend (Node.js, Python) para enviar emails

#### **Resend:**
1. Crea cuenta en [resend.com](https://resend.com)
2. Más simple para Next.js, pero requiere un servidor

**Alternativa más simple:** Usa Formspree que ya te envía emails sin código adicional.

---

## 📊 Arquitectura Recomendada

```
┌─────────────────────────────────────┐
│   GitHub Pages (estático)           │
│   - index.html                      │
│   - styles.css                      │
│   - script.js                       │
└────────┬────────────────────────────┘
         │
         ├─→ Fetch GET /rest/v1/burgers
         │   └─→ Supabase (Base de datos)
         │
         └─→ Fetch POST /rest/v1/orders
             └─→ Supabase (Guardar pedidos)
```

---

## 🚀 Pasos para Deployar en Producción

### 1. Configurar Supabase:

```bash
# En tu terminal, después de crear proyecto en Supabase:
1. Copia tu Project URL
2. Copia tu anon API key (no uses service_role)
```

### 2. Actualizar `script.js`:

```javascript
// Reemplaza estas URLs y keys
const BURGERS_API_URL = 'https://YOUR-PROJECT.supabase.co/rest/v1/burgers?select=*';
const ORDERS_API_URL = 'https://YOUR-PROJECT.supabase.co/rest/v1/orders';
const SUPABASE_KEY = 'YOUR-ANON-API-KEY';
```

### 3. Subir a GitHub:

```bash
git add .
git commit -m "Add BurgerStack production config"
git push origin main
```

### 4. Habilitar GitHub Pages:

- Ve a Settings → Pages
- Selecciona "Deploy from a branch"
- Branch: `main`, carpeta: `/GOTHAM`

---

## 🔒 Seguridad

**⚠️ IMPORTANTE:**
- Nunca uses `service_role` key en el frontend (es solo para servidores)
- En Supabase, usa `anon` key y configura RLS (Row Level Security)
- Las URLs de API están públicas, ¡esto es normal!
- Supabase tiene protecciones contra abuso

### Configurar RLS en Supabase:

1. En el editor SQL, ejecuta:

```sql
-- Permitir lectura pública de hamburguesas
ALTER TABLE burgers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON burgers 
FOR SELECT USING (true);

-- Permitir que cualquiera inserte pedidos
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON orders 
FOR INSERT WITH CHECK (true);
```

---

## 📝 Resumen de Cambios Necesarios

| Servicio | Cambio | Ubicación |
|----------|--------|-----------|
| Supabase | Reemplazar URL y key | `script.js` líneas 10-13 |
| Formspree | Reemplazar URL | `script.js` línea 12 |
| Ninguno | Demo funcionando | Tal como está ahora |

---

## 🧪 Pruebas Locales

Ahora mismo, el sitio funciona en modo **demo**:
- Las hamburguesas se cargan desde datos locales
- Los pedidos se simulan sin enviar a ningún lado

Para probar:
```bash
# Si tienes Python 3
python -m http.server 8000

# Si tienes Node.js
npx http-server

# Luego abre: http://localhost:8000/GOTHAM
```

---

## 💡 Próximos Pasos Opcionales

1. **Agregar autenticación** (login de admin)
2. **Panel de administración** para gestionar pedidos
3. **Notificaciones en tiempo real** (WhatsApp, SMS)
4. **Integración de pagos** (Stripe, PayPal)
5. **Análisis** (Google Analytics)

---

## ❓ Preguntas Frecuentes

**¿Es gratuito?**
Sí, Supabase tiene plan gratuito muy generoso. Formspree también.

**¿Qué pasa si se acaba el límite gratuito?**
Los planes de pago comienzan desde $9-25/mes dependiendo del servicio.

**¿Necesito saber backend?**
No, este proyecto es puramente frontend. Los servicios externos manejan el backend.

**¿Es seguro poner mi API key en el código?**
Sí, mientras uses la `anon` key y configures RLS correctamente.

---

Hecho con 🍔 por BurgerStack
