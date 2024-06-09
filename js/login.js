// funcionamiento del login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        try {
            const response = await fetch('http://localhost:3001/usuarios');
            const data = await response.json();

            const usuario = data.find(user => user.email === email && user.password === password);

            if (usuario) {
                window.location.href = 'admin.html';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            alert('Error al iniciar sesión. Inténtelo nuevamente.');
        }
    });
});

