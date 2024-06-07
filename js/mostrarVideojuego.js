import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(titulo, descripcion, precio, imagen) {
    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `
        <h3>${titulo}</h3>
        <div class="descripcion-video">
            <img src="${imagen}" alt="${titulo}">
            <p>${descripcion}</p>
            <p>Precio: $${precio}</p>
        </div>`
    video.addEventListener('click', () => {
        window.open(`detalles-productos.html?titulo=${encodeURIComponent(titulo)}&descripcion=${encodeURIComponent(descripcion)}&precio=${encodeURIComponent(precio)}&imagen=${encodeURIComponent(imagen)}`);
    });

    return video;
}


async function listaVideojuego() {
    try{
        const listaAPI = await conectaAPI.listaVideojuego();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.titulo, element.descripcion, element.precio, element.imagen)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de videojuegos</h2>`;
    }
}

listaVideojuego();