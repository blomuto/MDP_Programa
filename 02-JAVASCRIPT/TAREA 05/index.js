/* TAREA: Agregar 10 objetos personas con diferentes datos:
1) Filtrado por nombre: En base a objetos personas ya creados, solicitar al usuario el nombre a buscar y mostrar los datos que coinciden (ejemplo: nombres que empiecen con J) 
2) Mostrar el promedio de las edades. */

/* inicializar paquete para leer el prompt desde consola, una vez instalado el npm */
const prompt=require("prompt-sync")({sigint:true});

let arrayPersonas = [];

const addPerson = (firstName, lastName, birthday, address, status, orientation) => {
    let persona = {
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if(orientation){
        arrayPersonas.push(persona); //push pushea en el array en orden de creacion
    } else{
        arrayPersonas.unshift(persona); //unshift inserta primero los que tienen orientation 0
    }
}

/* Insertando datos de forma manual */
addPerson("Juan", "Perez", 12, "CABA", 0, true);
addPerson("Esteban", "Juarez", 14, "Mar del Plata", 1, false); //lo pone primero por el else
addPerson("Carl", "Martin", 28, "Miramar", 0, true);
addPerson("Rocio", "Ramón", 15, "CABA", 0, true);
addPerson("Carl", "Lopez", 27, "Mar del Plata", 1, true);
addPerson("Belen", "Lomuto", 36, "CABA", 1, true);
addPerson("Daniela", "Ortiz", 33, "Junin", 0, true); 
addPerson("Antonela", "Peralta", 34, "Otamendi", 1, true);
addPerson("Juan Pablo", "Larice", 24, "Necochea", 0, true);
addPerson("Karina", "Estevez", 20, "Vidal", 1, true);

//1) Filtrado por nombre: En base a objetos personas ya creados, solicitar al usuario el nombre a buscar y mostrar los datos que coinciden
let ingresa = prompt("Ingrese nombre que quiere buscar: ");

let dataPersonaFilter=arrayPersonas.filter((persona)=>{ 
    return (persona.firstName.toLowerCase() == ingresa || persona.firstName.toUpperCase() == ingresa); 
});
console.log("*********** FILTRO POR NOMBRE **************");
console.log(dataPersonaFilter); 

//1b) Filtrado por letra en nombre: solicitar al usuario la letra del nombre a buscar y mostrar los datos que coinciden
let letra = prompt("Ingrese letra en los nombres que quiere buscar: ");

let dataPersonaFilterLetra=arrayPersonas.filter((persona)=>{ 
    return (persona.firstName.toLowerCase().includes(letra) || persona.firstName.toUpperCase().includes(letra)); 
});
console.log("*********** FILTRO POR LETRA EN EL NOMBRE **************");
console.log(dataPersonaFilterLetra); 

//2) Mostrar el promedio de las edades.
let suma=0;
for (i=0;i<=9;i++){
    suma+=arrayPersonas[i].birthday;
}
let promedio=suma/arrayPersonas.length;
console.log("*********** PROMEDIO DE EDADES **************");
console.log(promedio); 