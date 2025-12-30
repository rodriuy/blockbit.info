# ⚡ CHECKLIST RÁPIDO: Deployment Seguro

## Antes de ir a producción:

### ✅ Seguridad (CRÍTICO)
- [x] API Key removida de GitHub
- [x] Backend con endpoint seguro (`/api/chat`)
- [x] Variables de entorno configuradas
- [x] `.gitignore` protege `.env`
- [ ] Confirmar que GitHub NO muestra ningún `sk-proj-`

### ✅ Frontend
- [x] Responsive móvil testeado
- [x] Icono mejorado (fa-message)
- [x] Cierre de chat funcional
- [ ] Testear en iPhone (pequeña pantalla)
- [ ] Testear en tablet (pantalla mediana)

### 🚀 Deployment
- [ ] Crear cuenta en Vercel (https://vercel.com)
- [ ] Conectar GitHub
- [ ] Agregar `OPENAI_API_KEY` en Settings → Environment Variables
- [ ] Trigger deployment
- [ ] Testear chatbot en vivo
- [ ] Confirmaar que funciona en móvil

### 🔐 Post-Deployment
- [ ] Guardar URL de Vercel/Netlify
- [ ] Revisar logs (¿errores?)
- [ ] Hacer test: "¿Cuándo es Caborteada?"
- [ ] Verificar que tu API Key NO aparece en logs

---

## URLs Importantes:

| Sitio | URL |
|-------|-----|
| Tu API Key OpenAI | https://platform.openai.com/api-keys |
| Deployment Vercel | https://vercel.com/new |
| Deployment Netlify | https://app.netlify.com |
| Tu repo | https://github.com/rodriuy/blockbit.info |

---

## Contacto emergencia:

Si tu API Key se expone:
1. Ve a https://platform.openai.com/api-keys
2. Elimina la key comprometida
3. Crea una nueva
4. Actualiza en Vercel/Netlify
5. GitHub no tiene la key nueva, así que está seguro

---

**Estado:** Listo para Vercel ✅
**Tiempo estimado:** 5 minutos ⏱️
