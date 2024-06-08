document.addEventListener('DOMContentLoaded', () => {
    const bannerMessages = [
        {
            text: "¡Aprovecha nuestras ofertas exclusivas!",
            subtext: "Descuentos de hasta el 50% en productos seleccionados.",
            image: "/img/farcry.jpg"
        },
        {
            text: "Nuevos productos disponibles",
            subtext: "Explora nuestra nueva colección.",
            image: "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2019/09/Banner-facebook030919.jpg"
        },
        {
            text: "Ofertas de verano",
            subtext: "Precios calientes para productos geniales.",
            image: "/img/gtavicecity.jpg"
        }
    ]

    let currentIndex = 0;

    function updateBanner() {
        const banner = document.getElementById('banner');
        const bannerContent = document.querySelector('.banner-content');
        
        banner.style.backgroundImage = `url(${bannerMessages[currentIndex].image})`;
        bannerContent.querySelector('h2').textContent = bannerMessages[currentIndex].text;
        bannerContent.querySelector('p').textContent = bannerMessages[currentIndex].subtext;

        currentIndex = (currentIndex + 1) % bannerMessages.length;
    }

    setInterval(updateBanner, 5000); // Cambia el banner cada 5 segundos
});

// Función para generar el HTML de la galería
// Función para obtener los datos de la base de datos y crear la galería
async function obtenerProductos() {
    try {
        const response = await fetch('db.json');
        const data = await response.json();

        const galleryElement = document.getElementById('gallery');

        for (const categoria in data) {
            const categoriaElement = document.createElement('div');
            categoriaElement.classList.add('category');

            const categoriaTitle = document.createElement('h2');
            categoriaTitle.textContent = categoria;
            categoriaElement.appendChild(categoriaTitle);

            const productsElement = document.createElement('div');
            productsElement.classList.add('products');

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
                detallesElement.href = producto.detalles;
                detallesElement.textContent = 'Ver detalles';
                productElement.appendChild(detallesElement);

                productsElement.appendChild(productElement);
            }

            const verTodosElement = document.createElement('button');
            verTodosElement.textContent = 'Ver todos';
            verTodosElement.addEventListener('click', () => mostrarTodosLosProductos(data[categoria]));
            categoriaElement.appendChild(verTodosElement);

            categoriaElement.appendChild(productsElement);
            galleryElement.appendChild(categoriaElement);
        }

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Función para mostrar todos los productos
// Función para mostrar todos los productos de una categoría
function mostrarTodosLosProductos(categoria) {
    const galleryElement = document.getElementById('gallery');
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
        detallesElement.href = producto.detalles;
        detallesElement.textContent = 'Ver detalles';
        productElement.appendChild(detallesElement);

        galleryElement.appendChild(productElement);
    });

    const botonVerTodos = document.getElementById('ver-todos');
    botonVerTodos.style.display = 'none';
}

// Llama a la función para obtener los productos al cargar la página
window.addEventListener('load', obtenerProductos);
