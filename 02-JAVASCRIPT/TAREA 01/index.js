/* Práctica 1 */
//Imprimir nombre por consola
const nombre= "Belen";
console.log("Hola soy", nombre);

//Sumar dos números
var num1=2;
var num2=4;
console.log(num1+num2);

//Concatenar nombre y edad
const edad = 36;
console.log("Hola soy", nombre, "y tengo", edad, "años");

//Comparar dos números si es mayor o menor
if(num1>num2){
    console.log("el Numero", num1, "es mayor a", num2);
}else{console.log("el Numero", num2, "es mayor a", num1);}


/* Práctica 2 */
// Calcular el número mayor y menor de 3 variables (CON IF ELSE O TERNARIO)
var nn1 = 6;
var nn2 = 19;
var nn3 = 80;

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

// Calcular si un número es par o impar
var paridad = 26;
if(paridad%2==0){
    mensaje = "El número es par";
} else {
    mensaje = "El número es impar";
}
console.log(mensaje);

// Dado dos variables, realizar las operaciones básicas (+,-,*,/) mediante casos de usos
var x = 2;
var y = 5;
var operacion = 'suma';
switch(operacion){
    case 'suma':
        mensaje = x+y;
        break;
    case 'resta':
        mensaje = x-y;
        break;
    case 'multiplicacion':
        mensaje = x*y;
        break;
    case 'division':
        mensaje = x/y;
        break;
    default:
        mensaje = "No hay operacion asignada";
        break;
}
console.log("Total:", mensaje);