let dataProducto = [];
let btnAdd = document.getElementById('btnAdd');
let listadito = document.getElementById("listProducto");
let listaditoDos = document.getElementById("listProductoDos");

const addDataProducto = (imgPreview, sku, nombreProd, talleProd, colorProd, valorProdUnit, cantProd) => {
    let product = {
        imgPreview,
        sku,
        nombreProd,
        talleProd,
        colorProd,
        valorProdUnit,
        cantProd
    }
    dataProducto.push(product);
    storageListProducto();
}

const addFormProducto = (number) => {
    let formulario = "formProduct_"+number;
    let imgPreview = document.querySelector("#formProduct_"+ number +" #imgPreview"); //abajo tomo el src porque es imagen
    let sku = document.querySelector("#formProduct_"+ number +" #sku"); // y textContent cuando es texto
    let nombreProd = document.querySelector("#formProduct_"+ number +" #nombreProd");
    let talleProd = document.querySelector("#formProduct_"+ number +" #talleProd");
    let colorProd = document.querySelector("#formProduct_"+ number+' input[name="colorProd"]:checked');
    let valorProdUnit = document.querySelector("#formProduct_"+ number+" #valorProdUnit");
    let cantProd = document.querySelector("#formProduct_"+ number+" #cantProd");
    
   if (dataProducto != -1) {
        addDataProducto(imgPreview.src, sku.textContent,nombreProd.textContent, talleProd.value, colorProd.value, valorProdUnit.textContent, cantProd.value);
        document.querySelector("#formProduct_"+ number).reset();
        listadito.innerHTML = listProducto(dataProducto);
        listaditoDos.innerHTML = listProductoDos(dataProducto);
        storageListProducto();
        messageAlert("PRODUCTO AGREGADO AL CARRITO", "success");
    }
    else {
        messageAlert("ERROR", "error");
    } 
    console.table(dataProducto);
}

const listProducto = (arrayData) => {
    let list = '';
    if (arrayData.length > 0) {
        arrayData.forEach( (product,index) => {
            list += `<tr>
                    <td><img src="${product.imgPreview}" alt="producto" width="50" class="p-2"> sku:${product.sku} ${product.nombreProd} ${product.talleProd} ${product.colorProd}</td>
                    <td>${product.valorProdUnit}</td>
                    <td>${product.cantProd}</td>
                    <td>${product.valorProdUnit * product.cantProd}</td>
                    <td><button onclick="actionDelete(${product.sku})" class="btn btn-dark">x</button></td>
                </tr>`;
        });
    }
    else{
        list = `<tr><td colspan="6" class="text-center">TU CARRITO ESTÁ VACÍO</td></tr>`;
    }
    return list;
}

const listProductoDos = (arrayData) => {
    const costoEntrega = entregaProd(); // Obtiene el costo de entrega
    const subtotal = subtotalGral(arrayData); // Obtiene el subtotal
    const total = subtotal + costoEntrega; // Calcula el total

    let listDos = '';
    if (arrayData.length > 0) {
        arrayData.forEach( () => {
            listDos += `<tr>
                    <td>Subtotal:</td> <td class="text-end">$ ${subtotal}</td>
                    </tr><tr>
                    <td>Entrega:</td> <td class="text-end" id="costo-entrega">$ ${costoEntrega}</td>
                    </tr><tr>
                    <td><strong>TOTAL:</strong></td> <td class="text-end" id="total"><strong>$ ${total}</strong></td>
                </tr>`;
        });
    }
    else{
        listDos = `<tr><td class="text-center">TU CARRITO ESTÁ VACÍO</td></tr>`;
    }
    return listDos;
}

const messageAlert = (menssage, icon = "success") => {
    Swal.fire({
        icon: icon,
        title: menssage,
        showConfirmButton: false,
        timer: 900
    })
}

const filterSku = (sku) => {
    return dataProducto.findIndex((product) => {
        return product.sku == sku;
    })
}

const actionDelete = (sku) =>{
    let position = filterSku(sku); //devuelve la posicion del elemento
    dataProducto.splice(position,1); //splice necesita la posicion y la cant que elimina
    listadito.innerHTML = listProducto(dataProducto); //actualizo listado
    listaditoDos.innerHTML = listProductoDos(dataProducto); //actualizo detalle final
    storageListProducto();
}

const subtotalGral = (arrayData) => {
    let subtotal = 0;
    arrayData.forEach( (product) => {
        subtotal = product.valorProdUnit * product.cantProd + subtotal;
    });
    return subtotal;
}

const entregaProd = () => {
    let entrega = document.querySelector('input[name="entrega"]:checked').value;

    if (entrega === "sucursal") {
        return 0;
    } else if (entrega === "envio-domicilio"){
        return 2000;
    } else if (entrega === "envio-oca"){
        return 1500;
    } else {
        messageAlert("ERROR", "error");
        return 0; // Devuelve un valor por defecto
    } 
}

const calcularTotal = (arrayData) => {
    const costoEntrega = entregaProd();
    const subtotal = subtotalGral(arrayData);
    return subtotal + costoEntrega;
}

// Agrego un evento 'change' a los elementos de radio buttons
const radioButtons = document.querySelectorAll('input[name="entrega"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        // Llama a la función entregaProd cuando cambia la selección
        const costoEntrega = entregaProd();
        document.getElementById("costo-entrega").textContent = `$ ${costoEntrega}`;
        const total = calcularTotal(dataProducto); 
        document.getElementById("total").innerHTML = `<strong>$ ${total}</strong>`;
    });
});


const storageListProducto = () => {
    let stringObj = JSON.stringify(dataProducto); //parseo mi array / lo convierto en string para almacenarlo en el local storage con JSON.stringify
    localStorage.setItem("product",stringObj); 
}
const listStoraListProduct = () => {
    let objectString = localStorage.getItem("product"); //obtengo el valor del item Product
    if(objectString != null){ //si la variable existe....
        objectString = JSON.parse(objectString); //vuelvo a parsearlo como array de objetos con JSON.parse
        dataProducto = objectString; 
        listadito.innerHTML = listProducto(dataProducto); //vuelvo a mostrar los elementos
        listaditoDos.innerHTML = listProductoDos(dataProducto); //vuelvo a mostrar los elementos
    }
}
listStoraListProduct();

