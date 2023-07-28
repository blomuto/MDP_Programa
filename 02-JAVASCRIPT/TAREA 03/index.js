/* inicializar paquete para leer el prompt desde consola, una vez instalado el npm */
const prompt=require("prompt-sync")({sigint:true});

/* Realizar una funcion que permita segun la accion dada por el usuario, mostrar por pantalla la tabla de multiplicar, sumar, restar y dividir, dado un valor ingresado por el usuario. */

let op= parseInt(prompt("Ingrese número de operación que desea realizar: 1:sumar | 2: restar | 3: tabla de multiplicar | 4: tabla de dividir "));

const sumar = (num1,num2) => {
    num1= parseInt(prompt("Ingrese numero 1: "));
    num2= parseInt(prompt("Ingrese numero 2: "));
    console.log(num1+num2); 
    return num1+num2;  
};

const restar = (num1,num2) => {
    num1= parseInt(prompt("Ingrese numero 1: "));
    num2= parseInt(prompt("Ingrese numero 2: "));
    console.log(num1-num2); 
    return num1-num2;  
};

const multiplicar = (num1) => {
    let i, resultado;
    num1= parseInt(prompt("ingrese un numero para ver su tabla de multiplicar: "));
    for (i = 1; i <= 10; i++) {
        resultado = num1 * i;
        console.log(`${num1} x ${i} = ${resultado}`);
    }
    return (`${num1} x ${i} = ${resultado}`);
};

const dividir = (num1) => {
    let i;
    num1= parseInt(prompt("ingrese un numero para ver su tabla de dividir: "));
    if (num1>0){
        for(i=1; i<=10; i++){
            console.log((num1*i), "/" ,num1, "=", i);
        }
        return ((num1*i), "/" ,num1, "=", i);
    } else{
        console.log("Ingrese numero mayor a 1");
    }
};

switch(op){
    case 1: sumar();
        break;
    case 2: restar();
        break;
    case 3: multiplicar();
        break;
    case 4: dividir();
        break;
    default: console.log("Opcion inválida");
        break;
}


