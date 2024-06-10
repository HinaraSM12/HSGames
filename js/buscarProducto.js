document.addEventListener('DOMContentLoaded', () => {
    const botonBusqueda = document.querySelector("[data-boton-busqueda]");
    botonBusqueda.addEventListener("click", evento => buscarProducto(evento));
});

async function buscarProducto(evento) {
    evento.preventDefault();
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await buscarProductos(datosDeBusqueda);

    mostrarProductos(busqueda);

    if (busqueda.length > 0) {
        mostrarProductos(busqueda);
        document.getElementById('productos').classList.remove('hidden'); // Mostrar la sección
    } else {
        document.getElementById('productos').classList.add('hidden'); // Ocultar la sección
        const listaDeBusqueda = document.querySelector("[data-lista]");
        listaDeBusqueda.innerHTML = `<h2 class="mensaje__titulo">No encontramos productos para ese filtro</h2>`;
    }
}

async function buscarProductos(referencia) {
    const categorias = ['Videojuegos', 'Consolas', 'Variedades'];
    let resultados = [];

    for (const categoria of categorias) {
        const response = await fetch(`http://localhost:3001/${categoria}`);
        const data = await response.json();
        resultados = resultados.concat(data);
    }

    // Filtrar los resultados para incluir solo aquellos cuyo título contenga el término de búsqueda
    const resultadosFiltrados = resultados.filter(producto => 
        producto.titulo && producto.titulo.toLowerCase().includes(referencia.toLowerCase())
    );

    return resultadosFiltrados;
}



function mostrarProductos(busqueda) {
    const listaDeBusqueda = document.querySelector("[data-lista]");
    listaDeBusqueda.innerHTML = ''; // Limpia la lista de búsqueda

    // Añadir el h2 para los resultados de la búsqueda

    const texto = document.querySelector(".texto");
    texto.textContent = 'Resultados de la búsqueda';

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
            window.open(`/pages/detalles-productos.html?titulo=${encodeURIComponent(producto.titulo)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}`);
        });
    });
}