// funcionamiento del login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form form');


    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();


        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;


        if (!email.trim() || !password.trim()) {
            document.getElementById('error-message').textContent = 'Por favor, complete todos los campos.';
            return;
        }
   
        if (!validateEmail(email)) {
            document.getElementById('error-message').textContent = 'Por favor, introduzca un correo electrónico válido.';
            return;
        }
   
        try {
            const response = await fetch('https://my-json-server.typicode.com/hinarasm12/ApiUser/usuarios');
            const data = await response.json();
   
            const usuario = data.find(user => user.email === email && user.password === password);
   
            if (usuario) {
                window.location.href = '../pages/admin.html';
            } else {
                document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            alert('Error al iniciar sesión. Inténtelo nuevamente.');
        }
    });
});






function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
