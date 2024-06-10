document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const mensajeTextarea = document.getElementById('mensaje');

    const errorNombre = document.getElementById('error-nombre');
    const errorCorreo = document.getElementById('error-correo');
    const errorMensaje = document.getElementById('error-mensaje');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let valid = true;

        // Validación del nombre
        if (nombreInput.value.trim() === '') {
            valid = false;
            errorNombre.textContent = 'El nombre no puede estar vacío.';
        } else if (nombreInput.value.length > 40) {
            valid = false;
            errorNombre.textContent = 'El nombre no puede tener más de 40 caracteres.';
        } else {
            errorNombre.textContent = '';
        }
        
        // Validación del correo (HTML5 required attribute will handle this)
        const re = /\S+@\S+\.\S+/
        if (correoInput.value.trim() === '') {
            valid = false;
            errorCorreo.textContent = 'El correo electrónico no puede estar vacío.';
        } else if (!re.test(correoInput.value.trim())){ 
            errorCorreo.textContent = 'Por favor, introduzca un correo electrónico válido.';
            valid = false;
        } else {
            errorCorreo.textContent = '';
        }

        // Validación del mensaje
        if (mensajeTextarea.value.trim() === '') {
            valid = false;
            errorMensaje.textContent = 'El mensaje no puede estar vacío.';
        } else if (mensajeTextarea.value.length > 120) {
            valid = false;
            errorMensaje.textContent = 'El mensaje no puede tener más de 120 caracteres.';
        } else {
            errorMensaje.textContent = '';
        }

        // Si el formulario es válido, enviar el formulario
        if (valid) {
            alert('Mensaje enviado correctamente.');
            form.reset();
            // Aquí puedes añadir la lógica para enviar el formulario
            // form.submit(); // Descomentar esta línea si se desea enviar el formulario
        }
    });
});
