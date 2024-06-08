async function listaVideojuego(){
    const conexion = await fetch("http://localhost:3001/Videojuegos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
    /* console.log(conexion);
    console.log(conexionConvertida); */
    return conexionConvertida;
}

async function crearVideojuego(titulo,precio,descripcion,imagen){
    const conexion= await fetch("http://localhost:3001/Videojuegos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        titulo:titulo,
        precio:precio,
        descripcion:descripcion,
        imagen:imagen,
    })
    })
    if(!conexion.ok){
        throw new Error("No fue posible crear el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscarVideojuegos(referencia){
    const conexion=await fetch(`http://localhost:3001/Videojuegos?q=${referencia}`)
    const conexionConvertida=conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listaVideojuego,crearVideojuego,buscarVideojuegos
}
