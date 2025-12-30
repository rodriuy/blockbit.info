# 🚀 GUÍA DE DESPLIEGUE SEGURO - Chatbot Caborteada

## ✅ Lo que ya está hecho:
- ✅ API Key removida del código frontend
- ✅ Endpoint protegido en backend
- ✅ Variables de entorno configuradas
- ✅ Optimizado para móvil
- ✅ Icono mejorado

## 🔒 PASO 1: Proteger tu API Key

### Opción A: Vercel (RECOMENDADO - gratis)

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Frontend chatbot seguro - API key protegida"
   git push origin main
   ```

2. **Conecta a Vercel:**
   - Ve a https://vercel.com/new
   - Importa el repo de GitHub
   - Selecciona la carpeta raíz del proyecto

3. **Agrega variables de entorno:**
   - En Settings → Environment Variables
   - Nombre: `OPENAI_API_KEY`
   - Valor: Tu API Key de OpenAI (https://platform.openai.com/api-keys)
   - Selecciona: Production + Preview

4. **Deploy automático:**
   - Vercel desplegará automáticamente
   - Tu chatbot funcionará en: `https://tu-dominio.vercel.app/api/chat`

### Opción B: Netlify

1. En Netlify:
   - Conecta el repo
   - Agrega BUILD COMMAND: `echo "Chatbot ready"`
   - Site settings → Environment → Edit variables
   - Agrega `OPENAI_API_KEY`

2. Publica el sitio

### Opción C: Heroku (tiene costo después del free tier)

1. Heroku CLI: `heroku create tu-app-name`
2. `heroku config:set OPENAI_API_KEY=sk-proj-...`
3. Deploy automático con GitHub

## 🌐 PASO 2: Actualiza el endpoint en tu frontend

En `caborteada/index.html`, el endpoint ya está configurado como:
```javascript
const API_ENDPOINT = '/api/chat'; // Relativo = usa tu dominio
```

Si usas Vercel/Netlify, quedaría:
```javascript
const API_ENDPOINT = 'https://tu-dominio.vercel.app/api/chat';
```

O si está en el mismo dominio: `/api/chat` funciona perfectamente.

## ✅ PASO 3: Verifica que funciona

1. Abre tu sitio en móvil
2. Haz clic en el icono del chat
3. Pregunta algo: "¿Cuándo es Caborteada?"
4. La respuesta debe venir del backend (sin exponer tu API Key)

## 🔍 PASO 4: Revisa que tu API Key esté segura

**En GitHub NO debe verse:**
- Ninguna línea con `sk-proj-...`
- Ningún archivo `.env`

**En Vercel/Netlify SÍ debe estar (variable de entorno):**
- Protegida por contraseña
- No visible en el código
- Accesible solo al servidor

## 🚨 ¿Qué pasa si alguien consigue tu API Key?

1. Ve a https://platform.openai.com/api-keys
2. Elimina la key comprometida
3. Crea una nueva
4. Actualiza en Vercel/Netlify
5. GitHub no tiene la key, así que está seguro

## 📊 Monitoreo (Opcional)

- Vercel: Dashboard → Logs → puedes ver cada request
- OpenAI: https://platform.openai.com/account/billing/limits → ve los usos

## 🆘 Troubleshooting

### Error 405 (Method not allowed)
- Tu backend no está en `/api/chat`
- Verifica la URL en `API_ENDPOINT`

### Error 500 (Server error)
- `OPENAI_API_KEY` no está configurada en variables de entorno
- Verifica que la variables exista en Vercel/Netlify settings

### CORS error
- El backend ya tiene headers CORS
- Si persiste, agrega a tu URL: `https://tu-dominio.vercel.app`

---

**¿Tienes dudas?** Revisa:
- Docs de Vercel: https://vercel.com/docs/concepts/functions/serverless-functions
- OpenAI API: https://platform.openai.com/docs/api-reference/chat/create
