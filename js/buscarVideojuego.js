import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarVideojuego.js";

//validaciones

async function buscarVideojuego(evento){
    evento.preventDefault();
    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    const busqueda= await conectaAPI.buscarVideojuegos(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");

    /* while(listaDeBusqueda.firstChild){
        console.log(listaDeBusqueda.firstChild)
        listaDeBusqueda.removeChild(listaDeBusqueda.firstChild)
    } */
    listaDeBusqueda.replaceChildren();

    busqueda.forEach(elemento => listaDeBusqueda.
        appendChild(construyeCard(elemento.titulo,elemento.descripcion,elemento.precio,elemento.imagen)));

     if(busqueda.length===0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos videojuegos para ese filtro</h2>`;
    } 

    console.log(listaDeBusqueda)
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click",evento=>buscarVideojuego(evento))