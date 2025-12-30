// backend/api/chat.js (Vercel/Netlify Functions)
// IMPORTANTE: Agregar OPENAI_API_KEY a variables de entorno en tu plataforma
// Vercel: Settings → Environment Variables
// Netlify: Site settings → Build & deploy → Environment

export default async function handler(req, res) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { message, context } = req.body;
    
    // Validar que existe la API Key (NUNCA la hagas pública)
    const API_KEY = process.env.OPENAI_API_KEY;
    if (!API_KEY) {
        console.error('OPENAI_API_KEY not configured');
        return res.status(500).json({ 
            error: 'API key not configured on server' 
        });
    }
    
    if (!message) {
        return res.status(400).json({ error: 'Message required' });
    }
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: `Eres un asistente del festival Caborteada 2025/2026 en Artigas, Uruguay. SOLO puedes responder preguntas usando esta información: ${context}. 
                        
REGLAS ESTRICTAS:
- Solo responde sobre Caborteada 31 de diciembre 2025
- Si la pregunta no está cubierta, responde: "No tengo info sobre eso. ¿Preguntás sobre fechas, entradas, ubicación, horarios o logística?"
- Responde de forma natural, directa y sin tono publicitario
- Sé conciso (máximo 2-3 líneas)
- Nunca inventes datos`
                    },
                    { 
                        role: 'user', 
                        content: message 
                    }
                ],
                max_tokens: 250,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            console.error('OpenAI API error:', error);
            return res.status(response.status).json({ 
                error: 'Error comunicando con OpenAI' 
            });
        }
        
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        
        if (!reply) {
            return res.status(500).json({ 
                error: 'Invalid response from OpenAI' 
            });
        }
        
        res.status(200).json({ reply });
        
    } catch (error) {
        console.error('Error in chat handler:', error);
        res.status(500).json({ 
            error: 'Internal server error. Please try again.' 
        });
    }
}