document.addEventListener('DOMContentLoaded', () => {
    // Cargar la lista de productos al cargar la página
    
    mostrarProductos();

    const form = document.getElementById('product-form');

    const clearFormButton = document.getElementById('clear-form');


    // Agrega un evento al botón de limpiar formulario
    clearFormButton.addEventListener('click', () => {
        form.reset();
    });

    // Evento para mostrar el formulario de agregar producto
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const id = document.getElementById('product-id').value;
        const category = document.getElementById('product-category').value;
        const title = document.getElementById('product-title').value;
        const price = document.getElementById('product-price').value;
        const description = document.getElementById('product-description').value;
        const image = document.getElementById('product-image').value;

        if (!category || !title || !price || !description || !image) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (title.length > 20) {
            alert('El nombre del producto debe tener máximo 20 caracteres.');
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
        } else {
            await agregarProducto(category, title, price, description, image);
        }

        form.reset(); // Limpia el formulario después de agregar el producto
        await mostrarProductos(); // Recargar la lista de productos
    });

});


// Función para mostrar el formulario
function mostrarFormulario(producto = {}) {
    document.getElementById('product-id').value = producto.id || '';
    document.getElementById('product-title').value = producto.titulo || '';
    document.getElementById('product-price').value = producto.precio || '';
    document.getElementById('product-description').value = producto.descripcion || '';
    document.getElementById('product-image').value = producto.imagen || '';
    document.getElementById('form-submit').textContent = producto.id ? 'Actualizar Producto' : 'Guardar Producto';
}


// Función para agregar un producto
async function agregarProducto(categoria, titulo, precio, descripcion, imagen) {
    const response = await fetch(`http://localhost:3001/${categoria}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            titulo:titulo,
            precio:precio,
            descripcion:descripcion,
            imagen:imagen,
        })
    })
    if(!response.ok){
        throw new Error("No fue posible crear el producto");
    }
    const producto = await response.json();
    mostrarProductos();

    return producto;

}

// Función para editar un producto
async function editarProducto(id, categoria, titulo, precio, descripcion, imagen) {
    const response = await fetch(`http://localhost:3001/${categoria}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            id:id,
            titulo:titulo,
            precio:precio,
            descripcion:descripcion,
            imagen:imagen,
        })
    })
    if(!response.ok){
        throw new Error("No fue posible crear el producto");
    }
    const producto = await response.json();
    mostrarProductos();
    return producto;

}


// Función para cargar datos del producto en el formulario
async function editarProductoFormulario(categoria, id) {
    const response = await fetch(`http://localhost:3001/${categoria}/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });
    if(!response.ok){
        throw new Error("No fue posible crear el producto");
    }
    const producto = await response.json();
    mostrarFormulario(producto);
    return producto;
}

// Función para eliminar un producto
async function eliminarProducto(categoria,id) {
    const response = await fetch(`http://localhost:3001/${categoria}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });

    if(!response.ok){
        throw new Error("No fue posible crear el producto");
    }
    const producto = await response.json();
    mostrarProductos();

    return producto;
}


async function mostrarProductos() {
    try {
        const response = await fetch('../db.json');
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
    
                for (let i = 0; i < data[categoria].length; i++) {
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

                    // Add edit button
                    const editarButton = document.createElement('button');
                    editarButton.textContent = 'Editar';
                    editarButton.classList.add('edit-button');
                    editarButton.onclick = () => editarProductoFormulario(categoria, producto.id);
                    productElement.appendChild(editarButton);

                    // Add delete button
                    const eliminarButton = document.createElement('button');
                    eliminarButton.textContent = 'Eliminar';
                    eliminarButton.classList.add('delete-button');
                    eliminarButton.onclick = () => eliminarProducto(categoria,producto.id);
                    productElement.appendChild(eliminarButton);

                    productsElement.appendChild(productElement);

                    detallesElement.addEventListener('click', () => {
                        window.open(`/pages/detalles-productos.html?titulo=${encodeURIComponent(producto.titulo)}&descripcion=${encodeURIComponent(producto.descripcion)}&precio=${encodeURIComponent(producto.precio)}&imagen=${encodeURIComponent(producto.imagen)}`);
                    });

                }
            
                categoriaElement.appendChild(productsElement);
                galleryElement.appendChild(categoriaElement);
            }
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
