   //--------------RESUMEN-------------------
    // 1.- Declaración de Variables
    let variable1 = 100; //Es numérico entero
    var variable2 = 12.3; //Es numérico decimal
    const variable3 = "Juan"; // Es un texto
    variable4 = 'Pérez';  //Es un texto

    // 2.- Uso de condicionales IF / ELSE
    if(variable1 < 100){
        console.log("El valor es menor a 100"); //USo de log en la consola
    }else{
        console.warn("El valor es mayor a 100"); //USo de warning en la consola
    }
    //2.1 Secuencia de IF
    if(variable1==100){ }
    if(variable1==200){ }
    if(variable1==300){ }
    if(variable1==400){ }

    //2.2 Uso de Operador ternario condicional
    (variable1>100) ? console.log("Es mayor") : console.log("Es menor");
    (variable1>100) ? console.log("Es mayor"):'';

    //3.-Uso de Switch Case
    switch(variable1){
        case 100:
            //Hago algo
            break;
        case 200:
            //Hago algo
            break;
        case 300:
            //Hago algo
            break;
        default:  //Es opcional
            //otra cosa
            break;
    }
    //4.- Arreglos
    //Inicialización de arreglos sin elementos. Para manipular los elementos, se puede utilizar:
    /*
        Agregar al principio : miarreglo.unshift();
        Eliminar del principio: miarreglo.shift();
        Agregar al final del arreglo: miarreglo.push();
        Eliminar del final del arreglo: miarreglo.pop()
        Eliminar algún elemento del arreglo miarreglo.splice(3,2); desde la pos 3, elimina 2 elementos
    */
    let miarreglo = new Array();
    let miarreglo1 = [];
    //Crear e inicializar un elemento
    let miarreglo2 = [variable1,variable2,variable3,"Santiago","RM", 99988877];
    //5.- CICLOS
    // WHILE
    inicio = 0;
    while(inicio<10){
        //Acá va lo que debe contener el ciclo (instrucciones)
        inicio++;
    }
    // DO-WHILE
    inicio = 0;
    do{
        //Acá va lo que debe contener el ciclo (instrucciones)
        inicio++;
    }while(inicio<10);
    
    //FOR
    for( inicio = 0;inicio<10;inicio++){
        //Acá va lo que debe contener el ciclo (instrucciones)
       
    }
    //FOR IN
    for(inicio in miarreglo){
            console.log(miarreglo[inicio]);
    }
    //6.- Objetos
    miobjeto1 = {};
    miobjeto1.nombre = "Juan";
    miobjeto1.edad = 22;

    miobjeto2 = {nombre:"Juan",edad:22};

    //JavaScript Object Notation  JSON
    let personas = [{nombre:"Juan",edad:26},{nombre:"María",edad:29},{nombre:"Loreto",edad:22}];
    for (vuelta in personas){
       console.log(personas[vuelta].nombre + " edad: " + personas[vuelta].edad);
    }