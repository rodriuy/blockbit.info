# ✅ BurgerStack - Checklist de Implementación

## 📋 Antes de Ir a Producción

Usa este checklist para asegurar que todo está listo antes de deployar.

---

## 🎯 FASE 1: CONFIGURACIÓN LOCAL

### ✓ Estructura de Archivos
- [ ] `index.html` creado ✓
- [ ] `styles.css` creado ✓
- [ ] `script.js` creado ✓
- [ ] `README.md` actualizado ✓
- [ ] `SETUP_EXTERNAL_SERVICES.md` leído ✓

### ✓ Pruebas Locales
- [ ] Abre `index.html` en el navegador
- [ ] Verifica que se cargan las 6 hamburguesas
- [ ] Prueba agregar hamburguesas al carrito
- [ ] Verifica que el total se calcula correctamente
- [ ] Prueba incrementar/decrementar cantidades
- [ ] Rellena el formulario y envía (debe simular envío)
- [ ] Abre la consola (F12) y verifica que no haya errores rojos

### ✓ Responsividad
- [ ] Abre DevTools (F12 → Dispositivo móvil)
- [ ] Prueba en móvil (375px ancho)
- [ ] Prueba en tablet (768px ancho)
- [ ] Prueba en desktop (1920px ancho)
- [ ] Todos los elementos son legibles
- [ ] El formulario es usable en móvil

---

## 🔧 FASE 2: SERVICIOS EXTERNOS

### ✓ Elije tu Estrategia
- [ ] Decidiste: **Supabase** / **Formspree** / **Otra**

### ✓ Si elegiste SUPABASE

**Base de Datos de Menú:**
- [ ] Cuenta creada en [supabase.com](https://supabase.com)
- [ ] Proyecto creado
- [ ] Tabla `burgers` creada con estructura:
  ```sql
  id (serial pk)
  name (varchar)
  description (text)
  price (decimal)
  created_at (timestamp)
  ```
- [ ] 6 hamburguesas insertadas
- [ ] Tabla tiene RLS con lectura pública
- [ ] Copiaste: `Project URL`
- [ ] Copiaste: `Anon API Key`

**Base de Datos de Pedidos:**
- [ ] Tabla `orders` creada con estructura:
  ```sql
  id (serial pk)
  customer_name (varchar)
  customer_email (varchar)
  customer_phone (varchar)
  customer_address (text)
  special_notes (text)
  items (jsonb)
  total (decimal)
  status (varchar)
  created_at (timestamp)
  ```
- [ ] Tabla tiene RLS con inserción pública
- [ ] RLS está correctamente configurado

**Actualizar script.js:**
```javascript
const BURGERS_API_URL = 'https://your-project.supabase.co/rest/v1/burgers?select=*';
const ORDERS_API_URL = 'https://your-project.supabase.co/rest/v1/orders';
const SUPABASE_KEY = 'eyJhbGciOi...'; // Tu anon key aquí
```

### ✓ Si elegiste FORMSPREE

**Formulario:**
- [ ] Cuenta creada en [formspree.io](https://formspree.io)
- [ ] Nuevo formulario creado
- [ ] Tu ID de formulario es: `f/your_id_here`

**Actualizar script.js:**
```javascript
const ORDERS_API_URL = 'https://formspree.io/f/your_id_here';
```

### ✓ Alternativa: Sin Servicios Externos (Demo)
- [ ] Entiendes que es solo para demostración
- [ ] Sabes que no guarda datos reales
- [ ] Lo usarás solo para testing

---

## ✅ FASE 3: TESTING DE APIS

### ✓ Prueba con Postman o cURL

**Test GET (Cargar hamburguesas):**
```bash
curl "https://your-project.supabase.co/rest/v1/burgers?select=*" \
  -H "apikey: your-anon-key" \
  -H "Authorization: Bearer your-anon-key"
```

Debe devolver: `[{ id: 1, name: "Classic BurgerStack", ... }]`

**Test POST (Guardar pedido):**
```bash
curl -X POST "https://your-project.supabase.co/rest/v1/orders" \
  -H "apikey: your-anon-key" \
  -H "Authorization: Bearer your-anon-key" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "Juan",
    "customer_email": "juan@test.com",
    "customer_phone": "+598 99 123 456",
    "customer_address": "Calle 1",
    "items": [{"name": "Classic", "quantity": 1}],
    "total": 8.99,
    "special_notes": ""
  }'
```

Debe devolver: `{ id: 1, customer_name: "Juan", ... }`

---

## 🚀 FASE 4: DEPLOY EN GITHUB PAGES

### ✓ Preparar Repositorio
- [ ] Los archivos están en `/GOTHAM/` directorio
- [ ] Todo commiteado en `main` branch
- [ ] No hay archivos no versionados (.env si los usas)

### ✓ Configurar GitHub Pages
1. [ ] Ve a tu repo en GitHub
2. [ ] Settings → Pages
3. [ ] Source: Deploy from a branch
4. [ ] Branch: `main`
5. [ ] Folder: `/GOTHAM` (si es carpeta) o `/` (si es raíz)
6. [ ] Click "Save"
7. [ ] Espera a que aparezca el link azul con tu URL

### ✓ Verificar Deploy
- [ ] Tu sitio está en `https://username.github.io/blockbit.info/GOTHAM/`
- [ ] Carga correctamente
- [ ] Las hamburguesas aparecen
- [ ] El carrito funciona
- [ ] El formulario se envía sin errores

---

## 🔐 FASE 5: SEGURIDAD

### ✓ Verificaciones de Seguridad

- [ ] **APIs públicas:** Usas `anon` key, NO `service_role`
- [ ] **RLS activo:** Row Level Security habilitado en Supabase
- [ ] **CORS:** Tu API permite requests desde GitHub Pages
- [ ] **Validación:** El formulario valida datos básicos
- [ ] **No sensible:** No hay credenciales de servidor en el código

### ✓ Checklist de URLs
- [ ] `BURGERS_API_URL` es la URL correcta sin typos
- [ ] `ORDERS_API_URL` es la URL correcta sin typos
- [ ] Las URLs no contienen credenciales de servidor
- [ ] Los headers tienen la `anon` key apropiada

---

## 📊 FASE 6: MONITOREO

### ✓ Después del Deploy

**Primera Semana:**
- [ ] Revisa la consola del navegador (F12)
- [ ] Busca errores en la sección "Console"
- [ ] Prueba agregar varias hamburguesas
- [ ] Prueba enviar pedidos reales
- [ ] Verifica que los pedidos se guardan en Supabase

**Configurar Alertas (opcional):**
- [ ] Si usas Supabase: Settings → Notifications
- [ ] Recibe alertas de uso alto
- [ ] Configura límites de tasa

---

## 🎨 FASE 7: PERSONALIZACIÓN (Opcional)

### ✓ Customizaciones Simples
- [ ] Cambió los colores en `styles.css`
- [ ] Actualizó el nombre de "BurgerStack"
- [ ] Modificó el texto del hero
- [ ] Añadió/removió hamburguesas en la BD

### ✓ Customizaciones Avanzadas
- [ ] Agregar Google Analytics
- [ ] Integrar chat (Intercom, Drift)
- [ ] Agregar reviews de clientes
- [ ] Sistema de cupones/descuentos
- [ ] Integración de pagos (Stripe)

---

## 📝 FASE 8: DOCUMENTACIÓN

### ✓ Documentación del Proyecto

- [ ] README.md actualizado con tu información
- [ ] SETUP_EXTERNAL_SERVICES.md adaptado a tu caso
- [ ] Instrucciones claras para futuras ediciones
- [ ] Passwords/keys guardados de forma segura (1Password, etc.)

---

## 🚨 PROBLEMAS COMUNES Y SOLUCIONES

### Problema: "CORS Error"
```
Access to fetch at 'https://...' from origin 'https://...' 
has been blocked by CORS policy
```
**Solución:** 
- Verifica que tu API permite CORS
- Supabase lo permite por defecto ✓
- Si usas tu propio servidor, configura headers CORS

### Problema: "API Key Invalid"
```
Error: Invalid API Key
```
**Solución:**
- Copia la **anon key**, no la **service role key**
- Verifica que sea de tu proyecto correcto
- Revisa que el dominio esté autorizado

### Problema: "404 Not Found"
```
Failed to fetch ... 404 Not Found
```
**Solución:**
- Verifica la URL exacta de tu API
- Supabase: `https://project.supabase.co/rest/v1/table_name`
- Verifica que la tabla existe en la BD

### Problema: "Tabla no existe"
```
Relation "public.orders" does not exist
```
**Solución:**
- Ve a Supabase y crea la tabla
- Copia exactamente el nombre en script.js
- Verifica que los campos coinciden

---

## ✨ CHECKLIST FINAL

Cuando todo está ✓, tu sitio está listo para producción:

- [ ] Local: todo funciona sin errores
- [ ] APIs configuradas correctamente
- [ ] Deploy en GitHub Pages exitoso
- [ ] URLs correctas en producción
- [ ] Prueba completa (agregar, enviar pedido)
- [ ] Verificó seguridad (anon key, RLS)
- [ ] Documentación actualizada
- [ ] Equipoentiende cómo mantener el sitio

---

## 📞 Soporte

Si algo no funciona:

1. Abre DevTools: `F12`
2. Ve a "Console"
3. Busca el mensaje de error rojo
4. Cópialo completo
5. Búscalo en [Stack Overflow](https://stackoverflow.com)
6. Si es de Supabase, ve a [Supabase Docs](https://supabase.com/docs)

---

## 🎉 ¡Listo!

Si completaste todos los checkmarks, **¡tu sitio de BurgerStack está en vivo!**

Comparte el link con tus amigos y disfruta. 🍔

---

**Última actualización:** Enero 2025
