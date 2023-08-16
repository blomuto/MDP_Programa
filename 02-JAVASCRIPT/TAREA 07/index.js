let dataPersona = [];
let btnAdd = document.getElementById('btnAdd');
var positionPerson = -1; //inicializo la variable

const addDataPersona = (firstName, lastName, birthday, address, status, dni, orientation = true) => {
    let person = {
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if (orientation) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }
}

const addFormPersona = () => {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");

    if (filterDniOne(dni.value, dataPersona) == -1) {
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value, dni.value);
        document.getElementById("formPerson").reset();
        document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
        dni.focus();
        storageListPersona();
        messageAlert("DATOS GUARDADOS", "success");
    }
    else {
        messageAlert("ERROR DATOS REPETIDOS", "error")
        dni.focus();
    }
    console.table(dataPersona);
    
}

const listPersona = (arrayData) => {
    let list = '';
    if (arrayData.length > 0) {
        arrayData.forEach( (person,index) => {
            list += `<tr>
                    <td>${person.dni}</td>
                    <td>${person.firstName} ${person.lastName}</td>
                    <td>${person.birthday}</td>
                    <td>${person.address}</td>
                    <td>${person.status}</td>
                    <td><button onclick="actionUpdate(${person.dni})" class="btn btn-dark">Editar</button></td>
                    <td><button onclick="actionDelete(${person.dni})" class="btn btn-dark">Eliminar</button></td>
                </tr>`;
        });
    }
    else{
        list = `<tr><td colspan="6" class="text-center">NO SE ENCONTRARON REGISTROS</td></tr>`;
    }
    return list;
}

const filterDniOne = (dni, arrayData) => {
    return arrayData.findIndex((person) => {
        return person.dni == parseInt(dni)
    })
}

const messageAlert = (menssage, icon = "success") => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: menssage,
        showConfirmButton: false,
        timer: 900
    })
}

const filterDataPersona = (search) => {
    let filter = dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(search) ||
            person.lastName.toLowerCase().includes(search);
    });
    return filter;
}

const actionFilterInput = () => {
    let search = document.getElementById("search").value;
    search = search.toLowerCase().trim();

    let dataResult = filterDataPersona(search);
    document.getElementById("listPerson").innerHTML = listPersona(dataResult);
    console.log(search);
}

const actionDelete = (dni) =>{
    let position = filterDniOne(dni, dataPersona); //devuelve la posicion del elemento
    dataPersona.splice(position,1); //splice necesita la posicion y la cant que elimina
    document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
    buttonChange(); //funcion para limpiar el form
    storageListPersona();
}

const actionUpdate = (dni) => { //editar
    let position = filterDniOne(dni, dataPersona); //devuelve la posicion del elemento
    console.log(dataPersona[position]);
    positionPerson = position; //almaceno la posicion del elemento
    document.getElementById("firstName").value = dataPersona[position].firstName; //me coloca el valor en el input
    document.getElementById("lastName").value = dataPersona[position].lastName;
    document.getElementById("birthday").value = dataPersona[position].birthday;
    document.getElementById("address").value = dataPersona[position].address;
    document.getElementById("status").value = dataPersona[position].status;
    document.getElementById("dni").value = dataPersona[position].dni;

    buttonChange(true); //ejecuto la funcion
}

const editFormPerson = () => {
    let person = dataPersona[positionPerson];
    let dni = document.getElementById("dni");

    if (filterDniOne(dni.value, dataPersona) == -1 || filterDniOne(dni.value, dataPersona) == positionPerson) { 
        person.dni = document.getElementById("dni").value; //evaluo el dni
        person.firstName = document.getElementById("firstName").value;
        person.lastName = document.getElementById("lastName").value;
        person.birthday = document.getElementById("birthday").value;
        person.address = document.getElementById("address").value;
        person.status = document.getElementById("status").value;
        buttonChange();
        storageListPersona();
        document.getElementById("listPerson").innerHTML = listPersona(dataPersona);
        dni.focus();
        messageAlert("DATOS GUARDADOS", "success");
    }
    else {
        messageAlert("ERROR DATOS REPETIDOS", "error")
        dni.focus();
    }
}
const buttonChange = (active = false) => { //evento de mi boton html de cancelar. aca realizo la accion de editar
    let form = document.getElementById('formPerson');

    if(active){
        btnAdd.innerHTML = "Editar datos";
        btnAdd.classList.remove("btn-danger");
        btnAdd.classList.add("btn-success");
        form.removeAttribute('onsubmit'); //remueve el atributo de mi formulario html
        form.setAttribute('onsubmit', 'event.preventDefault();editFormPerson()') //agrego la funcion edit
    } else { //si toco cancelar
        btnAdd.innerHTML = "Agregar";
        btnAdd.classList.add("btn-danger");
        btnAdd.classList.remove("btn-success");
        form.reset(); //limpio el formulario
        form.removeAttribute('onsubmit'); //remueve el atributo de mi formulario html
        form.setAttribute('onsubmit', 'event.preventDefault();addFormPersona()') //agrego la funcion add
    }
}


//WEB STORAGE: Solo almacenamos strings que consideremos no sensibles para usarlos dentro de la misma pagina. Se usa para saber si el usuario esta activo por ej o para almacenar un toque [tocar F12 o inspeccionar - Application]
/* almacenamiento local (local storage) y almacenamiento en sesion (session storage)
usan las mismas propiedades:
- setItem('key - nombre atributo', valor) => para agregar o setear variables o items a nuestro storage.
- getItem('key - nombre atributo') => para mostrar el valor.
- removeItem('key - nombre atributo') => para remover el valor.
- clear();  => elimina todo.

diferencia: en el local se mantiene. en el session se borra al refrescar la pagina */

//localStorage.setItem('ejemplo',"prueba en local storage");
//sessionStorage.setItem('ejemplo', "prueba en session storage");

//console.log(localStorage.getItem("ejemplo")); // accedo por el nombre de la key ("prueba") y me muestra el valor ("prueba en local storage"). Si no existe da Null
//localStorage.removeItem("ejemplo"); //borro mi key y su contenido
//localStorage.clear(); //borra tooodo lo creado en el local

const storageListPersona = () => {
    let stringObj = JSON.stringify(dataPersona); //parseo mi array / lo convierto en string para almacenarlo en el local storage con JSON.stringify
    localStorage.setItem("person",stringObj); 
}
const listStoraListPerson = () => {
    let objectString = localStorage.getItem("person"); //obtengo el valor del item person
    if(objectString != null){ //si la variable existe....
        objectString = JSON.parse(); //vuelvo a parsearlo como array de objetos con JSON.parse
        dataPersona = objectString; 
        document.getElementById("listPerson").innerHTML = listPersona(dataPersona); //vuelve a mostrar los elementos
    }
}
listStoraListPerson();
