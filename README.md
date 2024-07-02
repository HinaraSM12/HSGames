# HSGames

## Descripción

HSGames es una tienda en línea dedicada a la venta de productos relacionados con videojuegos, incluyendo videojuegos, consolas, accesorios y más. Nuestro objetivo es ofrecer una experiencia de compra excepcional y productos de alta calidad para todos los amantes de los videojuegos.

Este proyecto fue creado como parte del **Challenge AluraGeek** de Alura Latam y Oracle Next Education.

-Inicio
![C1](https://github.com/HinaraSM12/HSGames/assets/121843288/75753f75-bb48-403e-8a05-167f4c8eae80)

-Ofertas
![c2](https://github.com/HinaraSM12/HSGames/assets/121843288/673d3fda-c12e-406d-8073-3e457f6c9086)

-Detalles del producto
![c3](https://github.com/HinaraSM12/HSGames/assets/121843288/e8b8639d-7f59-4347-ab82-a41bb37c1d5b)

-Iniciar Sesión
![c4](https://github.com/HinaraSM12/HSGames/assets/121843288/12d9057f-734f-460a-9b8d-3566e25c7d10)

-Vista de admin
![c5](https://github.com/HinaraSM12/HSGames/assets/121843288/6f360614-60ec-4c0e-bc50-fb77cbc18648)

-Crear cuenta
![c6](https://github.com/HinaraSM12/HSGames/assets/121843288/8f989fc4-aaf9-4742-bede-c34405c7284b)

-Crear cuenta
![c8](https://github.com/HinaraSM12/HSGames/assets/121843288/dd628097-fd11-43f6-bebb-e79ee9b76699)

-Términos y condiciones
![c9](https://github.com/HinaraSM12/HSGames/assets/121843288/07061f49-aded-49bb-81d8-ac495c3f2363)

-Quiénes somos
![c7](https://github.com/HinaraSM12/HSGames/assets/121843288/8c7286ba-1ebb-4fdb-8fd8-cad573a0dbe6)



## Contenidos

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Créditos](#créditos)
- [Licencia](#licencia)


## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/HinaraSM12/HSGames.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd HSGames
    ```
3. Configuración de la base de datos simulada con JSON Server
    ```
    npm init
    npm install json-server
    npx json-server --watch db.json --port 3001
    ```

4. Abre el archivo `index.html` en tu navegador para ver la página principal.

## Funcionalidades

### Usuario
- **Buscar productos**: Los usuarios pueden buscar productos mediante un campo de búsqueda.
- **Ver detalles del producto**: Los usuarios pueden ver información detallada de cada producto.
- **Ver ofertas**: Los usuarios pueden ver productos en oferta.
- **Contactar con administradores**: Los usuarios pueden ponerse en contacto con los administradores.

### Administrador
- **Iniciar sesión**: Los administradores pueden iniciar sesión en la tienda.
- **Agregar productos**: Los administradores pueden agregar nuevos productos a la tienda.
- **Editar productos**: Los administradores pueden editar la información de los productos existentes.
- **Eliminar productos**: Los administradores pueden eliminar productos de la tienda.
- **Ver lista de productos**: Los administradores pueden ver una lista completa de todos los productos disponibles.

### Futuro
- Se agregarán más funcionalidades; actualmente, el proyecto no está completado al 100%. Aspectos como el carrito de compras, la creación de cuentas y la funcionalidad de compra aún no se han integrado, pero están en planes futuros de desarrollo.

## Tecnologías Utilizadas
- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Funcionalidades dinámicas y lógica del frontend.
- **Node.js**: Backend del servidor.

### Descripción de Archivos y Directorios

- **css/**: Contiene archivos de estilos CSS.
- **img/**: Contiene imágenes utilizadas en el sitio web.
- **js/**: Contiene archivos JavaScript que manejan la lógica del sitio.
- **index.html**: Página principal del sitio web.
- **admin**: Archivo que contiene toda la lógica detrás de las funcionalidades del administrador.

## Créditos

Este proyecto fue desarrollado por Hinara Sánchez como parte del **Challenge AluraGeek** de Alura Latam y Oracle Next Education.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
