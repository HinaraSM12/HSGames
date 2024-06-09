//validaciones

async function buscarVideojuego(evento){
    evento.preventDefault();
    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    const busqueda= await buscarProductos(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");



    /* while(listaDeBusqueda.firstChild){
        console.log(listaDeBusqueda.firstChild)
        listaDeBusqueda.removeChild(listaDeBusqueda.firstChild)
    } */
    listaDeBusqueda.replaceChildren();


    mostrarProductos(busqueda);

    if(busqueda.length===0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos videojuegos para ese filtro</h2>`;
    } 
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");
botonBusqueda.addEventListener("click",evento=>buscarVideojuego(evento))



async function buscarProductos(referencia) {
    const [videojuegos, consolas, variedades] = await Promise.all([
        fetch(`http://localhost:3001/Videojuegos/?q=${referencia}`).then(response => response.json()),
        fetch(`http://localhost:3001/Consolas/?q=${referencia}`).then(response => response.json()),
        fetch(`http://localhost:3001/Variedades/?q=${referencia}`).then(response => response.json())
    ]);

    const resultados = [...videojuegos, ...consolas, ...variedades];
    
    console.log(resultados);

    return resultados;
}


async function mostrarProductos(busqueda) {
    console.log(busqueda)

    for (const producto in busqueda) {
        const productsElement = document.createElement('div');
        productsElement.classList.add('products');
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

            productsElement.appendChild(productElement);

            detallesElement.addEventListener('click', () => {
                window.open(`detalles-productos.html?titulo=${encodeURIComponent(producto.titulo)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}`);
            });

        }
    }