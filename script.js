// Funcionalidad del Menú Desplegable (Hamburguesa) en Dispositivos Móviles
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic en cualquier enlace en versión móvil
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Control de Modales Interactivos para Planes
const modalOverlay = document.getElementById('modalOverlay');
const modalMessage = document.getElementById('modalMessage');

function openModal(planName) {
    modalMessage.textContent = `Has seleccionado el ${planName}. ¡Te contactaremos pronto para completar tu inscripción en nuestra sede de Colombia!`;
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

// Validación y manejo del Formulario de Contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edadRange = document.getElementById('edadRange').options[document.getElementById('edadRange').selectedIndex].text;
    
    modalMessage.textContent = `¡Gracias, ${nombre}! Hemos recibido tu solicitud para la categoría [${edadRange}]. Un asesor se comunicará contigo vía WhatsApp en breve.`;
    modalOverlay.classList.add('active');
    
    contactForm.reset();
});

// Banco de tips de nutrición orientados a Colombia
const tipsNutricion = [
    "\"En Colombia tenemos una despensa natural increíble. Consume una porción de proteína magra y carbohidrato complejo dentro de los 45 minutos posteriores a tu entrenamiento para acelerar la recuperación muscular.\"",
    "\"La hidratación es clave: si entrenas en climas cálidos o húmedos, asegúrate de consumir al menos 500ml de agua adicionales con electrolitos naturales como agua de coco.\"",
    "\"No le temas a los carbohidratos tradicionales como el plátano o la yuca; consumidos en las porciones correctas antes de entrenar, te darán la energía explosiva que necesitas.\"",
    "\"Una cena ligera rica en proteína (como un huevo tibio o pescado) y vegetales cocidos mejorará significativamente tu descanso y la síntesis de masa muscular durante la noche.\""
];

function cambiarTipNutricion() {
    const randomTip = tipsNutricion[Math.floor(Math.random() * tipsNutricion.length)];
    document.getElementById('nutritionTipText').textContent = randomTip;
}