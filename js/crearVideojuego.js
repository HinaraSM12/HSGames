import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearVideojuego(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;
    const titulo=document.querySelector("[data-titulo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    try{
        await conectaAPI.crearVideojuego(titulo,descripcion,precio,imagen)
    
        window.location.href="../pages/envio-concluido.html"
    }catch(e){
        alert(e);
    }
}

formulario,addEventListener("submit",evento=>crearVideojuego(evento));