// Función para obtener los 5 productos de la base de datos y crear la galería
async function galeria() {
    try {
        const response = await fetch('https://my-json-server.typicode.com/hinarasm12/ApiGame/db');
        const data = await response.json();


        const galleryElement = document.getElementById('gallery');


        for (const categoria in data) {
            if (categoria != "usuarios") {
                const categoriaElement = document.createElement('div');
                categoriaElement.classList.add('category');


                const categoriaTitle = document.createElement('h2');
                categoriaTitle.textContent = categoria;
                categoriaElement.appendChild(categoriaTitle);


                const productsElement = document.createElement('div');
                productsElement.classList.add('products');
                productsElement.id=`products-${categoria.toLowerCase()}`;




                for (let i = 0; i < 5; i++) {
                    const producto = data[categoria][i];
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
                    detallesElement.href = '#';
                    detallesElement.textContent = 'Ver detalles';
                    productElement.appendChild(detallesElement);


                    productsElement.appendChild(productElement);


                    detallesElement.addEventListener('click', (e) => {
                        e.preventDefault();
                        window.location.href = `detalles-productos.html?titulo=${encodeURIComponent(producto.titulo)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}`;
                    });
                }


                const botonVerTodos = document.createElement('button');
                botonVerTodos.id = `ver-todos-${categoria.toLowerCase()}`;
                botonVerTodos.dataset.categoria = categoria;
                botonVerTodos.textContent = 'Ver todo';
           


                botonVerTodos.addEventListener('click', () => mostrarTodosLosProductos(data[categoria], categoria));
                categoriaElement.appendChild(botonVerTodos);


                categoriaElement.appendChild(productsElement);
                galleryElement.appendChild(categoriaElement);
            }
        }


    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}


// Función para mostrar todos los productos de una categoría
function mostrarTodosLosProductos(categoria, cat) {
    const galleryElement = document.getElementById(`products-${cat.toLowerCase()}`);
    galleryElement.innerHTML = '';




    const categoriaElement = document.createElement('div');
    categoriaElement.classList.add('category');


    const categoriaTitle = document.createElement('h2');
    categoriaTitle.textContent = categoria;
    categoriaElement.appendChild(categoriaTitle);


    const productsElement = document.createElement('div');
    productsElement.classList.add('products');
   


    categoria.forEach(producto => {
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
        detallesElement.href = '#';
        detallesElement.textContent = 'Ver detalles';
        productElement.appendChild(detallesElement);


        detallesElement.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = `detalles-productos.html?titulo=${encodeURIComponent(producto.titulo)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}`;
        });


        galleryElement.appendChild(productElement);
    });
   
    const botonVerTodos = document.getElementById(`ver-todos-${cat.toLowerCase()}`);
    botonVerTodos.style.display = 'none';
}


// Llama a la función para obtener los productos al cargar la página
window.addEventListener('load', galeria);
