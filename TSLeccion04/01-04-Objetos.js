let x = 10;//Variable de tipo primitiva
console.log(x.length);
console.log('Tipos Primitivos');
//Objeto
let persona ={
    nombre: 'Valentina',
    apellido: 'Reche',
    email: 'fmtinez@mail.com',
    edad: 30,
    nombreCompleto: function(){//Metodo
        return this.nombre+' '+this.apellido;
    }
}
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.email)
console.log(persona)
console.log(persona.nombreCompleto());
console.log('Ejecutando con un Objeto');

let persona2 = new Object();
persona2.nombre = 'Andres';
persona2.apellido = 'Zamora';
persona2.direccion = 'San Martin 22';
persona2.telefono = '260440221135';
console.log('Creamos un Nuevo Objeto');
console.log(persona2.telefono);
console.log(persona['apellido']); //accedemos como si fuera un arreglo

console.log('Usamos el ciclo FOR IN');

//for in, para acceder al objeto como arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellido = 'Martinez'//Cambiamos el valor del objeto
console.log(persona);
//cuidado con el nombre de la propiedad porq podemos crear una nueva
persona.emails = 'blabla@gmail'//creo por error una variable
//ahora la elimino
delete persona.emails;
console.log(persona);

//Distintas formas de imprimir un Objeto
//Numero 1: Concatenar cada valor de cada propiedad
console.log('Nº:1');
console.log(persona.nombre+', '+persona.apellido);
//Numero 2: A traves del ciclo For in
console.log('Nº:2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: La funcion Object.values()
console.log('Nº:3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizar el metodo JSON.stringify
console.log('Nº:4');
let personaString = JSON.stringify(persona);
console.log(personaString);
//lo imprime como una cadena