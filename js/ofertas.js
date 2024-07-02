// Asigna la función al evento click del botón
document.addEventListener('DOMContentLoaded', async () => {
    const productosBaratos = await buscarOfertas();

    if (productosBaratos.length > 0) {
        mostrarProductos(productosBaratos);
    }

});


   // Define la función que realiza la lógica de buscar ofertas
async function buscarOfertas() {
    const categorias = ['Videojuegos', 'Consolas', 'Variedades'];
    let resultados = [];

    for (const categoria of categorias) {
        const response = await fetch(`https://my-json-server.typicode.com/hinarasm12/ApiGame/${categoria}`);
        const data = await response.json();
        resultados = resultados.concat(data);
    }

    const productosBaratos = resultados.filter(producto => parseFloat(producto.precio) < 30);

    if (productosBaratos.length > 0) {
        return productosBaratos;
    } else {
        alert('No hay ofertas disponibles en este momento.');
    }
}

function mostrarProductos(busqueda) {
    const listaDeBusqueda = document.querySelector("[data-p]");
    listaDeBusqueda.innerHTML = ''; // Limpia la lista de búsqueda


    busqueda.forEach(producto => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imagenElement = document.createElement('img');
        imagenElement.src = producto.imagen;
        imagenElement.alt = producto.titulo;
        productElement.appendChild(imagenElement);

        const nombreElement = document.createElement('h3');
        nombreElement.textContent = producto.titulo;
        productElement.appendChild(nombreElement);

        const precioElement = document.createElement('p');
        precioElement.textContent = `Precio: $${producto.precio}`;
        productElement.appendChild(precioElement);

        const detallesElement = document.createElement('a');
        detallesElement.href = producto.detalles;
        detallesElement.textContent = 'Ver detalles';
        productElement.appendChild(detallesElement);

        listaDeBusqueda.appendChild(productElement);

        detallesElement.addEventListener('click', () => {
            window.open(`detalles-productos.html?titulo=${encodeURIComponent(producto.titulo)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}`);
        });
    });
}

// Asigna la función al evento click del botó
// Exporta la función para poder utilizarla en otro archivo
export { buscarOfertas };
