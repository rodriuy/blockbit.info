/* ============================================
   CONFIGURACIÓN DE DATOS (DATOS SIMULADOS)
   ============================================ */

// TODO: Reemplazar con tu URL real de Supabase
// Ejemplo: https://your-project.supabase.co/rest/v1/burgers?apikey=your-api-key
const BURGERS_API_URL = 'https://jsonplaceholder.typicode.com/posts'; // URL simulada para demo

// TODO: Reemplazar con tu endpoint real de Formspree o Supabase
// Ejemplo Formspree: https://formspree.io/f/YOUR_FORM_ID
// Ejemplo Supabase: https://your-project.supabase.co/rest/v1/orders?apikey=your-api-key
const ORDERS_API_URL = 'https://formspree.io/f/xyzabc123'; // URL simulada para demo

// DATOS LOCALES DE HAMBURGUESAS (respaldo si la API falla)
const LOCAL_BURGERS = [
    {
        id: 1,
        name: 'Classic BurgerStack',
        description: 'Carne 100% de res, queso cheddar, tomate y lechuga',
        price: 8.99
    },
    {
        id: 2,
        name: 'Bacon BBQ',
        description: 'Carne con salsa BBQ, bacon crujiente y cebolla caramelizada',
        price: 10.99
    },
    {
        id: 3,
        name: 'Spicy Jalapeño',
        description: 'Carne picante, jalapeños, queso pepper jack y mayo jalapeño',
        price: 9.99
    },
    {
        id: 4,
        name: 'Doble Stack',
        description: 'Dos hamburguesas con queso derretido, tomate y lechuga',
        price: 14.99
    },
    {
        id: 5,
        name: 'Veggie Burger',
        description: 'Hamburguesa vegetariana con champiñones, aguacate y queso suizo',
        price: 9.49
    },
    {
        id: 6,
        name: 'Premium Mushroom',
        description: 'Carne premium con champiñones salteados, queso suizo y trufa',
        price: 12.99
    }
];

/* ============================================
   ESTADO DE LA APLICACIÓN
   ============================================ */

let orderCart = []; // Carrito de compras

/* ============================================
   FUNCIONES DE CARGA DE MENÚ
   ============================================ */

/**
 * Obtiene las hamburguesas desde la API externa
 * Si falla, utiliza los datos locales
 */
async function loadBurgers() {
    const menuGrid = document.getElementById('menu-grid');
    const loadingMessage = document.getElementById('loading-message');

    try {
        console.log('Intentando cargar hamburguesas desde API...');
        
        // TODO: Esta es una llamada simulada. Reemplazar con tu URL real de Supabase
        const response = await fetch(BURGERS_API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // TODO: Agregar aquí tu API key de Supabase si es necesario
                // 'Authorization': 'Bearer YOUR_SUPABASE_API_KEY',
            }
        });

        if (!response.ok) {
            throw new Error(`Error en API: ${response.status}`);
        }

        // Simular que transformamos la respuesta a formato de hamburguesas
        // En producción, esto sería los datos reales de Supabase
        let burgers = LOCAL_BURGERS; // Usamos datos locales como fallback

        console.log('Hamburguesas cargadas:', burgers);
        displayBurgers(burgers);
        loadingMessage.style.display = 'none';

    } catch (error) {
        console.error('Error al cargar hamburguesas desde API, usando datos locales:', error);
        
        // Fallback a datos locales
        displayBurgers(LOCAL_BURGERS);
        loadingMessage.style.display = 'none';
    }
}

/**
 * Muestra las hamburguesas en la cuadrícula
 */
function displayBurgers(burgers) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';

    burgers.forEach(burger => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="menu-card-header">
                <div class="menu-card-title">${burger.name}</div>
            </div>
            <div class="menu-card-body">
                <p class="menu-card-description">${burger.description}</p>
                <div class="menu-card-price">$${burger.price.toFixed(2)}</div>
                <button class="add-to-order-btn" onclick="addToOrder(${burger.id}, '${burger.name}', ${burger.price})">
                    Agregar al Pedido
                </button>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

/* ============================================
   FUNCIONES DEL CARRITO DE PEDIDOS
   ============================================ */

/**
 * Añade una hamburguesa al carrito
 */
function addToOrder(id, name, price) {
    // Buscar si la hamburguesa ya está en el carrito
    const existingItem = orderCart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        orderCart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateOrderDisplay();
    showNotification(`${name} agregada al pedido`);
}

/**
 * Incrementa la cantidad de un artículo en el carrito
 */
function incrementQuantity(id) {
    const item = orderCart.find(item => item.id === id);
    if (item) {
        item.quantity++;
        updateOrderDisplay();
    }
}

/**
 * Decrementa la cantidad de un artículo en el carrito
 */
function decrementQuantity(id) {
    const item = orderCart.find(item => item.id === id);
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            removeFromOrder(id);
            return;
        }
        updateOrderDisplay();
    }
}

/**
 * Elimina un artículo del carrito
 */
function removeFromOrder(id) {
    orderCart = orderCart.filter(item => item.id !== id);
    updateOrderDisplay();
}

/**
 * Actualiza la visualización del carrito y el total
 */
function updateOrderDisplay() {
    const orderItems = document.getElementById('order-items');
    const totalPrice = document.getElementById('total-price');

    if (orderCart.length === 0) {
        orderItems.innerHTML = '<p class="empty-order">No hay hamburguesas seleccionadas</p>';
        totalPrice.textContent = '$0.00';
        return;
    }

    let html = '';
    let total = 0;

    orderCart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
            <div class="order-item">
                <span class="order-item-name">${item.name}</span>
                <div class="order-item-quantity">
                    <button class="quantity-btn" onclick="decrementQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="incrementQuantity(${item.id})">+</button>
                </div>
                <span class="order-item-price">$${itemTotal.toFixed(2)}</span>
                <button class="remove-item-btn" onclick="removeFromOrder(${item.id})">✕</button>
            </div>
        `;
    });

    orderItems.innerHTML = html;
    totalPrice.textContent = `$${total.toFixed(2)}`;
}

/* ============================================
   FUNCIONES DE ENVÍO DE FORMULARIO
   ============================================ */

/**
 * Maneja el envío del formulario de pedido
 */
async function handleOrderSubmit(event) {
    event.preventDefault();

    const formMessage = document.getElementById('form-message');
    const submitButton = document.getElementById('submit-button');

    // Validar que haya hamburguesas en el carrito
    if (orderCart.length === 0) {
        showError('Por favor, agrega al menos una hamburguesa al pedido');
        return;
    }

    // Obtener datos del formulario
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;
    const specialNotes = document.getElementById('special-notes').value;

    // Construir objeto de pedido
    const orderData = {
        customer: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
            address: customerAddress
        },
        items: orderCart,
        specialNotes: specialNotes,
        total: calculateTotal(),
        timestamp: new Date().toISOString()
    };

    // Desabilitar botón durante envío
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    try {
        console.log('Enviando pedido:', orderData);
        
        // TODO: Reemplazar con tu endpoint real de Formspree o Supabase
        // 
        // OPCIÓN 1 - FORMSPREE (Recomendado para formularios simples):
        // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(orderData)
        // });
        //
        // OPCIÓN 2 - SUPABASE (Recomendado para aplicaciones complejas):
        // const response = await fetch('https://your-project.supabase.co/rest/v1/orders', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'apikey': 'YOUR_SUPABASE_API_KEY',
        //         'Authorization': 'Bearer YOUR_SUPABASE_API_KEY'
        //     },
        //     body: JSON.stringify(orderData)
        // });

        // Para demo, simulamos una respuesta exitosa
        const response = await simulateApiCall(orderData);

        if (!response.ok) {
            throw new Error('Error al enviar el pedido');
        }

        // Éxito
        showSuccess('¡Pedido enviado exitosamente! Nos contactaremos pronto.');
        
        // Limpiar formulario y carrito
        document.getElementById('order-form').reset();
        orderCart = [];
        updateOrderDisplay();

        // Scroll a la parte superior
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
        console.error('Error al enviar pedido:', error);
        showError('Hubo un error al enviar el pedido. Por favor, intenta nuevamente.');

    } finally {
        // Reabilitar botón
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Pedido';
    }
}

/**
 * Simula una llamada a API para pruebas (reemplazar en producción)
 */
async function simulateApiCall(orderData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pedido recibido en simulación:', orderData);
            resolve({ ok: true, status: 200 });
        }, 1500);
    });
}

/* ============================================
   FUNCIONES AUXILIARES
   ============================================ */

/**
 * Calcula el total del carrito
 */
function calculateTotal() {
    return orderCart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Muestra un mensaje de éxito
 */
function showSuccess(message) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.className = 'form-message success';
}

/**
 * Muestra un mensaje de error
 */
function showError(message) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.className = 'form-message error';
}

/**
 * Muestra una notificación temporal
 */
function showNotification(message) {
    // Notificación mediante el navegador (si está disponible)
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('BurgerStack', {
            body: message,
            icon: '🍔'
        });
    }
}

/* ============================================
   INICIALIZACIÓN
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('BurgerStack inicializando...');

    // Cargar hamburguesas
    loadBurgers();

    // Asignar evento al formulario
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', handleOrderSubmit);

    // Solicitar permiso para notificaciones (opcional)
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }

    console.log('BurgerStack listo!');
});
