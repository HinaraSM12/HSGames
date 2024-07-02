document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');


    form.addEventListener('submit', async (event) => {
        event.preventDefault();


        const nombre = form.querySelector('input[placeholder="Nombre"]').value;
        const email = form.querySelector('input[placeholder="Correo Electrónico"]').value;
        const password = form.querySelector('input[placeholder="Contraseña"]').value;
        const confirmPassword = form.querySelector('input[placeholder="Confirmar Contraseña"]').value;


        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }


        const user = {
            nombre: nombre,
            email: email,
            password: password
        };


        try {
            const response = await fetch('https://my-json-server.typicode.com/hinarasm12/ApiUser/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });


            if (!response.ok) {
                throw new Error('No fue posible crear la cuenta');
            }


            const usuario = await response.json();
            alert('Cuenta creada con éxito.');
            form.reset();


            return usuario;
        } catch (error) {
            alert('Hubo un problema con la solicitud: ' + error.message);
        }
    });
});
