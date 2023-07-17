const miTr=document.querySelector("#nuevoName");
const nombre=document.querySelector("#nombre");
const agregar= document.getElementById("agregar");

const borrarHijo = event => {
    const seBorra = event.target.parentNode;
    nuevoName.removeChild(seBorra);

    Swal.fire({ 
        icon: 'warning',
        text: 'Eliminado',
    })
};

agregar.addEventListener("click", function(){
    const miNombre = nombre.value;
    if (miNombre !== "") {
        miTr.style.display="block"; /* lo muestro */
        const miTdHijo=document.createElement("td"); /* creo elemento td */ 
        miTdHijo.textContent= miNombre; /* agrego lo ingresado en input */
        miTdHijo.setAttribute('class', 'd-flex p-2');
        miTr.appendChild(miTdHijo); /* lo inserto como hijo */
        nombre.value = ""; /* dejo vacio el campo */

        const crearBoton=document.createElement("button");
        crearBoton.setAttribute('class', 'mx-2 btn btn-dark');
        crearBoton.textContent="Eliminar";
        crearBoton.addEventListener("click", borrarHijo);
        miTdHijo.appendChild(crearBoton);

        Swal.fire({ /* sweet alert */
            icon: 'success',
            text: 'Agregado con éxito',
        })
    }
})


