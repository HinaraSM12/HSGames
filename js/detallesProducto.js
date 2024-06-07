// Obtén los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const titulo = params.get('titulo');
const descripcion = params.get('descripcion');
const precio = params.get('precio');
const imagen = params.get('imagen');

// Inserta los datos en los elementos correspondientes
document.getElementById('product-title').textContent = titulo;
document.getElementById('product-description').textContent = descripcion;
document.getElementById('product-price').textContent = `Precio: $${precio}`;
document.getElementById('product-image').src = imagen;
document.getElementById('product-image').alt = titulo;
