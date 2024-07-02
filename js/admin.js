document.addEventListener('DOMContentLoaded', () => {
    let productosData = {}; // Variable global para almacenar los datos de la API

    // Cargar la lista de productos al cargar la página
    cargarProductos();

    const form = document.getElementById('product-form');
    const clearFormButton = document.getElementById('clear-form');

    // Agrega un evento al botón de limpiar formulario
    clearFormButton.addEventListener('click', () => {
        form.reset();
        resetForm();
    });

    // Evento para manejar el envío del formulario de agregar/editar producto
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let id = document.getElementById('product-id').value;
        const category = document.getElementById('product-category').value;
        const title = document.getElementById('product-title').value;
        const price = document.getElementById('product-price').value;
        const description = document.getElementById('product-description').value;
        const image = document.getElementById('product-image').value;

        if (!category || !title || !price || !description || !image) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (title.length > 150) {
            alert('El nombre del producto debe tener máximo 150 caracteres.');
            return;
        }

        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            alert('El precio del producto solo puede contener números.');
            return;
        }

        if (description.length > 150) {
            alert('La descripción del producto debe tener máximo 150 caracteres.');
            return;
        }

        // Si hay un id, es una edición
        if (id) {
            await editarProducto(id, category, title, price, description, image);
            id = null; // Reiniciar el ID después de la edición
            resetForm(); // Reiniciar el formulario después de editar
        } else {
            await agregarProducto(category, title, price, description, image);
            form.reset(); // Limpia el formulario después de agregar
        }

        mostrarProductos(); // Recargar la lista de productos
    });

    // Función para cargar productos desde la API y almacenarlos en la variable global
    async function cargarProductos() {
        try {
            const response = await fetch('https://my-json-server.typicode.com/hinarasm12/ApiGame/db');
            productosData = await response.json(); // Almacenar los datos en la variable global
            mostrarProductos(); // Mostrar los productos al cargar
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }

    // Función para mostrar el formulario
    function mostrarFormulario(producto = {}) {
        document.getElementById('product-id').value = producto.id || '';
        document.getElementById('product-title').value = producto.titulo || '';
        document.getElementById('product-price').value = producto.precio || '';
        document.getElementById('product-description').value = producto.descripcion || '';
        document.getElementById('product-image').value = producto.imagen || '';
        document.getElementById('form-submit').textContent = producto.id ? 'Actualizar Producto' : 'Guardar Producto';
    }

    // Función para reiniciar el formulario y desactivar campos
    function resetForm() {
        document.getElementById('product-id').value = '';
        document.getElementById('product-title').value = '';
        document.getElementById('product-id').removeAttribute('disabled');
        document.getElementById('product-title').removeAttribute('disabled');
        document.getElementById('form-submit').textContent = 'Guardar Producto';
    }

    // Función para agregar un producto
    async function agregarProducto(categoria, titulo, precio, descripcion, imagen) {
        const response = await fetch(`https://my-json-server.typicode.com/hinarasm12/ApiGame/${categoria}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                titulo: titulo,
                precio: precio,
                descripcion: descripcion,
                imagen: imagen,
            })
        });
        if (!response.ok) {
            throw new Error("No fue posible crear el producto");
        }
        const producto = await response.json();
        productosData[categoria].push(producto); // Actualizar la variable global
        return producto;
    }

    // Función para editar un producto
    async function editarProducto(id, categoria, titulo, precio, descripcion, imagen) {
        const response = await fetch(`https://my-json-server.typicode.com/hinarasm12/ApiGame/${categoria}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                titulo: titulo,
                precio: precio,
                descripcion: descripcion,
                imagen: imagen,
            })
        });
        if (!response.ok) {
            throw new Error("No fue posible actualizar el producto");
        }
        const producto = await response.json();
        // Actualizar la variable global
        const index = productosData[categoria].findIndex(product => product.id === id);
        if (index !== -1) {
            productosData[categoria][index] = producto;
        }
        return producto;
    }

    // Función para cargar datos del producto en el formulario
    function editarProductoFormulario(categoria, id) {
        const producto = productosData[categoria].find(product => product.id === id);
        if (producto) {
            mostrarFormulario(producto);
            // Desactivar los campos de ID y título durante la edición
            document.getElementById('product-id').setAttribute('disabled', true);
            document.getElementById('product-title').setAttribute('disabled', true);
        } else {
            throw new Error("Producto no encontrado");
        }
    }

    // Función para eliminar un producto
    async function eliminarProducto(categoria, id) {
        const response = await fetch(`https://my-json-server.typicode.com/hinarasm12/ApiGame/${categoria}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("No fue posible eliminar el producto");
        }
        productosData[categoria] = productosData[categoria].filter(product => product.id !== id); // Actualizar la variable global
        mostrarProductos();
    }

    // Función para mostrar los productos desde la variable global
    function mostrarProductos() {
        const galleryElement = document.getElementById('gallery');
        galleryElement.innerHTML = ''; // Limpiar el contenido actual de la galería

        for (const categoria in productosData) {
            if (categoria !== "usuarios") {
                const categoriaElement = document.createElement('div');
                categoriaElement.classList.add('category');

                const categoriaTitle = document.createElement('h2');
                categoriaTitle.textContent = categoria;
                categoriaElement.appendChild(categoriaTitle);

                const productsElement = document.createElement('div');
                productsElement.classList.add('products');

                for (let i = 0; i < productosData[categoria].length; i++) {
                    const producto = productosData[categoria][i];
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

                    // Botón para editar
                    const editarButton = document.createElement('button');
                    editarButton.textContent = 'Editar';
                    editarButton.classList.add('edit-button');
                    editarButton.onclick = () => editarProductoFormulario(categoria, producto.id);
                    productElement.appendChild(editarButton);

                    // Botón para eliminar
                    const eliminarButton = document.createElement('button');
                    eliminarButton.textContent = 'Eliminar';
                    eliminarButton.classList.add('delete-button');
                    eliminarButton.onclick = () => eliminarProducto(categoria, producto.id);
                    productElement.appendChild(eliminarButton);

                    productsElement.appendChild(productElement);
                }

                categoriaElement.appendChild(productsElement);
                galleryElement.appendChild(categoriaElement);
            }
        }
    }
});
