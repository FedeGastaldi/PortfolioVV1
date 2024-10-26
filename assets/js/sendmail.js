// Reemplaza estos valores con tus propios IDs
const SERVICE_ID = 'service_98hrksq'; // ID de tu servicio en EmailJS
const TEMPLATE_ID = 'template_6kst623'; // ID de tu plantilla en EmailJS
const USER_ID = 'AAOcM5gmLIIlGg4fG'; // ID de tu usuario en EmailJS

// Inicializa EmailJS
(function () {
    emailjs.init(USER_ID);
})();

// Maneja el evento de envío del formulario
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío normal del formulario

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
        .then(function() {
            alert('Mensaje enviado con éxito!');
            document.getElementById('contact-form').reset(); // Limpiar el formulario
        }, function(error) {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
});
