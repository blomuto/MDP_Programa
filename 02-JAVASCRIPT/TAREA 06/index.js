/* TAREA: 
1) AL HACER CLICK EN EL BOTON AGREGAR DE MI FORM, SI HAY VALORES EN BLANCO QUE NO SE PUEDA.
2) EVITAR DUPLICIDAD DE DATOS */

let dataPersona = [];

const isPersonDuplicate = (firstName, lastName, birthday, address, status) => {
    return dataPersona.some(person => person.firstName === firstName && person.lastName === lastName && person.birthday === birthday && person.address === address && person.status === status);
}


const addPerson = (firstName, lastName, birthday, address, status, orientation=true) => {
    if (isPersonDuplicate(firstName, lastName, birthday, address, status)) {
        alert("Error: La persona ya existe en la lista.");
        return;
    }
    let persona = {
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if(orientation){
        dataPersona.push(persona); //push pushea en el array en orden de creacion
    } else{
        dataPersona.unshift(persona); //unshift inserta primero los que tienen orientation 0
    }
}


const addFormPersona = () => {
    let firstName = document.getElementById("firstName") //accedo al id de mi html
    let lastName = document.getElementById("lastName")
    let birthday = document.getElementById("birthday")
    let address = document.getElementById("address")
    let status = document.getElementById("status")

    if(firstName.value === "" || lastName.value === "" || birthday.value === "" || address.value === "" || status.value === "" ){
        console.log("Error: Hay campos vacios. Reintente");
    }else{
        addPerson(firstName.value, lastName.value, birthday.value, address.value, status.value); //accedo al valor que ingresa el usuario y lo agrego
        console.table(dataPersona); //muestro el array
        
        //blanqueo el formulario
        firstName.value = "";
        lastName.value = "";
        birthday.value = "";
        address.value = "";
        status.value = ""; 
    }
}