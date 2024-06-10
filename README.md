# HSGames

## Descripción

HSGames es una tienda en línea dedicada a la venta de productos relacionados con videojuegos, incluyendo videojuegos, consolas, accesorios y más. Nuestro objetivo es ofrecer una experiencia de compra excepcional y productos de alta calidad para todos los amantes de los videojuegos.

Este proyecto fue creado como parte del **Challenge AluraGeek** de Alura Latam y Oracle Next Education.

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

## Tecnologías Utilizadas
- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Funcionalidades dinámicas y lógica del frontend.
- **Node.js**: Backend del servidor.

### Descripción de Archivos y Directorios

- **css/**: Contiene archivos de estilos CSS.
- **img/**: Contiene imágenes utilizadas en el sitio web.
- **js/**: Contiene archivos JavaScript que manejan la lógica del sitio.
- **pages/**: Contiene archivos HTML que manejan el maquetado del sitio.
- **extra/**: Contiene archivos HTML que manejan el maquetado extra del sitio.
- **index.html**: Página principal del sitio web.
- **admin**: Archivo que contiene toda la lógica detrás de las funcionalidades del administrador.

## Créditos

Este proyecto fue desarrollado por el equipo de HSGames como parte del **Challenge AluraGeek** de Alura Latam y Oracle Next Education.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
