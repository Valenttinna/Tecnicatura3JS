let x = 10;//Variable de tipo primitiva
console.log(x.length);
console.log('Tipos Primitivos');
//Objeto
let persona ={
    nombre: 'Valentina',
    apellido: 'Reche',
    email: 'fmtinez@mail.com',
    edad: 28,
    idioma: 'ES',
    get lang(){
        return this.idioma.toUpperCase();//convierte en string a mayusculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){//Metodo
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){ //metodo get
        return this.nombre+' edad: '+this.edad;    
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

console.log('Comenzamos a utilizar el metodo GET');
console.log(persona.nombreEdad);

console.log('comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);


function Persona3(nombre,apellido,email){//Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Lucas','Chavez','lchav@mail.com');
padre.nombre = 'Sebastian'
padre.telefono = '55648879556';
console.log(padre);
console.log(padre.nombreCompleto());
let madre = new Persona3('Carla','Perez','cper@mail.com');
console.log(madre);
console.log(madre.telefono);//porque telegfono es solo de padre
console.log(madre.nombreCompleto());


//Diferentes maneras de crear un objeto

//Objeto 1:
let miObjeto = new Object();//formal
//Objeto 2:
let miObjeto1 = {}; //brebe y recomendad

//String 1:
let miCadena1 = new String('Alo'); //formal
//String 2:
let miCadena2 = 'Alo'; //simplificada y recmendada

//Numeros1:
let miNumero = new Number(1);
//Numeros2:
let miNumero2 = 1;

//Boolean 1:
let miBoolean1 = new Boolean(false);
//Boolean 2:
let miBoolean2 = false;

//Arreglos1:
let miArreglo1 = new Array();
//Areglos 2:
let miArreglo2 = [];

//Funcion1:
let miFuncion1 = new function(){};//todo despues del new es Objeto
//Funcion2:
let miFuncion2 = function(){};

//Uso de prototype
//le podes agregar una propiedad mas a todos los objetos
//en este caso todos los objetos de Persona3
Persona3.prototype.telefono = '2613526684';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '566642111'
console.log(madre);

//uso de Call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Carlos',
    nombreCompleto2: function(titulo,telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;//Para metodo Call
        //return this.nombre+' '+this.apellido;//para metodo Aplly
    }
}
let persona5 = {
    nombre:'Sara',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.','8899887755'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.','669889998'));


//Metodo Apply
let arreglo = ['Ing.', '55666699997'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));