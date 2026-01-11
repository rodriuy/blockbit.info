/* ============================================
   EJEMPLOS DE CONFIGURACIÓN DE SERVICIOS
   ============================================
   
   Este archivo contiene ejemplos de código para
   diferentes servicios externos. Copia y pega
   en script.js según lo que necesites.
*/

/* ============================================
   OPCIÓN 1: SUPABASE (RECOMENDADO)
   ============================================ */

/*
// 1. En la parte superior de script.js, reemplaza:

const BURGERS_API_URL = 'https://your-project.supabase.co/rest/v1/burgers?select=*';
const ORDERS_API_URL = 'https://your-project.supabase.co/rest/v1/orders';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

// 2. En la función loadBurgers(), reemplaza los headers:

async function loadBurgers() {
    const menuGrid = document.getElementById('menu-grid');
    const loadingMessage = document.getElementById('loading-message');

    try {
        console.log('Cargando desde Supabase...');
        
        const response = await fetch(BURGERS_API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const burgers = await response.json();
        console.log('Hamburguesas desde Supabase:', burgers);
        displayBurgers(burgers);
        loadingMessage.style.display = 'none';

    } catch (error) {
        console.error('Error Supabase:', error);
        displayBurgers(LOCAL_BURGERS); // Fallback
        loadingMessage.style.display = 'none';
    }
}

// 3. En handleOrderSubmit(), reemplaza la sección de fetch:

try {
    console.log('Enviando pedido a Supabase...');
    
    const response = await fetch(ORDERS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(orderData)
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }

    const result = await response.json();
    console.log('Pedido guardado:', result);
    showSuccess('¡Pedido enviado exitosamente!');
    
} catch (error) {
    console.error('Error al guardar pedido:', error);
    showError('Error al enviar el pedido');
}
*/

/* ============================================
   OPCIÓN 2: FORMSPREE (SIMPLE)
   ============================================ */

/*
// 1. En la parte superior de script.js, reemplaza:

const FORMSPREE_ID = 'xyzabc123'; // Tu ID de formulario en Formspree
const ORDERS_API_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

// 2. En handleOrderSubmit(), reemplaza la sección de fetch:

try {
    console.log('Enviando pedido a Formspree...');
    
    // Formspree espera formato diferente
    const formspreeData = {
        name: customerName,
        email: customerEmail,
        message: `
Nuevo Pedido de BurgerStack

CLIENTE:
- Nombre: ${customerName}
- Email: ${customerEmail}
- Teléfono: ${customerPhone}
- Dirección: ${customerAddress}

ITEMS:
${orderCart.map(item => `- ${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`).join('\n')}

Total: $${calculateTotal().toFixed(2)}

Notas: ${specialNotes || 'Ninguna'}
        `
    };

    const response = await fetch(ORDERS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formspreeData)
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }

    showSuccess('¡Pedido enviado! Te contactaremos pronto.');
    
} catch (error) {
    console.error('Error Formspree:', error);
    showError('Error al enviar el pedido');
}
*/

/* ============================================
   OPCIÓN 3: FIREBASE REALTIME DATABASE
   ============================================ */

/*
// 1. En index.html, antes de </body>, agrega:

<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"></script>

// 2. En script.js, en la sección de inicialización:

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getDatabase, ref, push, child, get } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 3. Para cargar hamburguesas:

async function loadBurgers() {
    const burgerRef = ref(database, 'burgers');
    get(burgerRef)
        .then((snapshot) => {
            const burgers = [];
            snapshot.forEach((child) => {
                burgers.push(child.val());
            });
            displayBurgers(burgers);
        })
        .catch((error) => {
            console.error('Error Firebase:', error);
            displayBurgers(LOCAL_BURGERS);
        });
}

// 4. Para guardar pedidos:

async function handleOrderSubmit(event) {
    // ... validaciones ...
    
    const ordersRef = ref(database, 'orders');
    push(ordersRef, orderData)
        .then((result) => {
            console.log('Pedido guardado:', result.key);
            showSuccess('¡Pedido enviado!');
            orderCart = [];
            updateOrderDisplay();
        })
        .catch((error) => {
            console.error('Error al guardar:', error);
            showError('Error al enviar el pedido');
        });
}
*/

/* ============================================
   OPCIÓN 4: AIRTABLE (PARA GESTIÓN VISUAL)
   ============================================ */

/*
// 1. Obtén tu API key en https://airtable.com/account/tokens

// 2. En script.js:

const AIRTABLE_API_KEY = 'patxxxxxxxxxxxxxxxx';
const AIRTABLE_BASE_ID = 'appxxxxxxxxxxxxxxxx';
const AIRTABLE_BURGERS_TABLE = 'burgers';
const AIRTABLE_ORDERS_TABLE = 'orders';

// 3. Para cargar hamburguesas:

async function loadBurgers() {
    try {
        const response = await fetch(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_BURGERS_TABLE}`,
            {
                headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
            }
        );

        const data = await response.json();
        const burgers = data.records.map(record => ({
            id: record.id,
            name: record.fields.name,
            description: record.fields.description,
            price: record.fields.price
        }));

        displayBurgers(burgers);
    } catch (error) {
        console.error('Error Airtable:', error);
        displayBurgers(LOCAL_BURGERS);
    }
}

// 4. Para guardar pedidos:

async function handleOrderSubmit(event) {
    // ... validaciones ...
    
    try {
        const response = await fetch(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_ORDERS_TABLE}`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [{
                        fields: {
                            'Customer Name': customerName,
                            'Email': customerEmail,
                            'Phone': customerPhone,
                            'Address': customerAddress,
                            'Items': JSON.stringify(orderCart),
                            'Total': calculateTotal(),
                            'Notes': specialNotes
                        }
                    }]
                })
            }
        );

        if (response.ok) {
            showSuccess('¡Pedido enviado!');
            orderCart = [];
            updateOrderDisplay();
        }
    } catch (error) {
        console.error('Error Airtable:', error);
        showError('Error al enviar');
    }
}
*/

/* ============================================
   OPCIÓN 5: GOOGLE SHEETS + APPS SCRIPT
   ============================================ */

/*
// 1. Crea un Google Sheets
// 2. En Google Sheets: Tools → Script Editor
// 3. Pega este código en Apps Script:

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.customer.name,
    data.customer.email,
    data.customer.phone,
    data.customer.address,
    JSON.stringify(data.items),
    data.total,
    data.specialNotes
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}

// 4. Deploy como Web App
// 5. En script.js:

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/usercontent';

async function handleOrderSubmit(event) {
    try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(orderData)
        });
        
        showSuccess('¡Pedido enviado!');
    } catch (error) {
        showError('Error al enviar');
    }
}
*/

/* ============================================
   COMPARATIVA DE SERVICIOS
   ============================================ */

/*
┌──────────────┬─────────┬────────┬──────────┬─────────┐
│ Servicio     │ Costo   │ Datos  │ Facilidad│ Mejor...|
├──────────────┼─────────┼────────┼──────────┼─────────┤
│ Supabase     │ Gratuito│ BD SQL │  Media   │ Completo│
│ Formspree    │ Gratuito│ Email  │  Fácil   │ Simple  │
│ Firebase     │ Gratuito│ NoSQL  │  Fácil   │ Google  │
│ Airtable     │ Gratuito│ BD Visual│ Fácil  │ Admin   │
│ Google Sheet │ Gratuito│ Sheet  │  Fácil   │ Data    │
└──────────────┴─────────┴────────┴──────────┴─────────┘

RECOMENDACIÓN:
→ Principiante: Formspree + Google Sheets
→ Pequeño negocio: Supabase + Formspree
→ Profesional: Supabase + SendGrid
→ Máximo control: Firebase + Netlify Functions
*/

/* ============================================
   VARIABLES DE ENTORNO (alternativa segura)
   ============================================ */

/*
// Si usas un build tool (Vite, Next.js), puedes usar:

// .env.local (NO subir a git)
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_KEY=...

// En tu código:
const BURGERS_API_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// Para GitHub Pages puro, esto no aplica directamente,
// pero considéralo para futuros upgrades del proyecto.
*/
