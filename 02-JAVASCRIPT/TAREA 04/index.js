/* inicializar paquete para leer el prompt desde consola, una vez instalado el npm */
  const prompt=require("prompt-sync")({sigint:true});

/* TAREA: Crear 4 objetos persona pero con diferentes valores, dentro de un unico array*/

  const arrayPersonas = new Array();

  let persona = {
      firstName:"Belen",
      lastName: "Lomuto",
      birthday: 36,
      address: "Mar del Plata",
  };
  arrayPersonas.push(persona);

  persona = {
      firstName:"Daniela",
      lastName: "Ortiz",
      birthday: 33,
      address: "Mar del Plata",
  };
  arrayPersonas.push(persona);

  persona = {
      firstName:"Esteban",
      lastName: "Pérez",
      birthday: 35,
      address: "CABA",
  };
  arrayPersonas.push(persona);

  persona = {
      firstName:"Carlos",
      lastName: "Rodriguez",
      birthday: 38,
      address: "Batán",
  };
  arrayPersonas.push(persona);

  console.log(arrayPersonas);