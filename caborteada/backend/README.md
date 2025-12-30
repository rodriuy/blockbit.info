# 🤖 Backend API Chat - Caborteada

## Descripción
Este endpoint maneja las solicitudes del chatbot de forma segura.
La API Key de OpenAI **NUNCA se expone** en el frontend.

## Archivo: `api/chat.js`

### ¿Cómo funciona?

1. **Frontend** (index.html) envía un mensaje:
```javascript
fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message, context })
})
```

2. **Backend** (chat.js) recibe la solicitud
3. Lee `OPENAI_API_KEY` desde variables de entorno (seguro)
4. Hace la llamada a OpenAI con la API Key protegida
5. Devuelve la respuesta al frontend

### Variables de Entorno Requeridas

```env
OPENAI_API_KEY=sk-proj-... (Tu API Key real, NUNCA en código)
```

### Despliegue

#### Vercel (recomendado)
```bash
vercel deploy
```
Luego agrega `OPENAI_API_KEY` en Settings → Environment Variables

#### Netlify
1. Conecta el repo
2. Deploy a producción
3. Agrega variable de entorno en Netlify UI

#### Node.js local (para testing)
```bash
npm install
OPENAI_API_KEY=sk-proj-... node api/chat.js
```

### Seguridad

✅ **Protegido:**
- API Key nunca viaja por el frontend
- Nunca se expone en GitHub
- OpenAI no detectará publicaciones no autorizadas

❌ **NO hagas esto:**
- No publiques `.env` a GitHub
- No pongas API Key en variables del cliente
- No expongas el endpoint sin CORS

### Logs / Debugging

Si algo falla, verás en los logs de Vercel:
```
Error in chat handler: ...
```

Revisa:
1. ¿La variable de entorno está configurada?
2. ¿El mensaje llegó correctamente?
3. ¿OpenAI responde correctamente?
