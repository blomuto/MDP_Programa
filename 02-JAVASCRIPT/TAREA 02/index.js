/* inicializar paquete para leer el prompt desde consola, una vez instalado el npm */
const prompt=require("prompt-sync")({sigint:true});

// dado 3 valores ingresados por el usuario, saber cual es el mayor de ellos
let nn1 = prompt("ingrese el valor del num 1: ");
let nn2 = prompt("ingrese el valor del num 2: ");
let nn3 = prompt("ingrese el valor del num 3: ");

if( !(Number(nn1)) || !(Number(nn2)) || !(Number(nn3)) ){ /* niego: "si no es numerico" */
    console.log("Por favor, ingrese solo numeros");
} else{
    if(nn1>nn2 && nn1>nn3){
        mensaje = nn1;
    }else if(nn2>nn1 && nn2>nn3){
        mensaje = nn2;
    }else if(nn3>nn1 && nn3>nn2){
        mensaje = nn3;
    } else{
        mensaje = "dificil de calcular pues hay números iguales.";
    }
console.log("El número mayor es", mensaje);
}

// realizar la tabla de multiplicar dado un valor por el usuario
let xx = prompt("ingrese el valor a multiplicar: ");
let i;
if (xx>0){
    for(i=1; i<=10; i++){
        console.log(xx, "x" ,i, "=", xx*i);
    }
} else{
    console.log("Ingrese numero mayor a 1");
}

// realizar la tabla de dividir dado un valor por el usuario
let zz = prompt("ingrese el valor a dividir: ");
if (zz>0){
    for(i=1; i<=10; i++){
        console.log((zz*i), "/" ,zz, "=", ((zz*i)/zz));
    }
} else{
    console.log("Ingrese numero mayor a 1");
}