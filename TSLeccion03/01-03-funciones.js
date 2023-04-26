miFuncion(8,2);//hosting

function miFuncion(a,b){
   // console.log("Sumamos: "+ (a+b));
    return a + b;
}

//Llamamos a la funcion
miFuncion(5,4);


let resultado = miFuncion(6,7);
console.log(resultado);

//Declaramos una funcion de tipo expresion
let x=function(a,b){return a+b}
resultado =x(5,6);
console.log(resultado);

//funciones de tipo self e invoking
(function(a,b){
    console.log('Ejecutamos la funcion: '+(a+b));
})(9,6);


console.log(typeof miFuncion);

function miFuncion2(a,b){
    console.log(arguments.length);
 }
miFuncion2(5,7,8,6);

//toString
var miFuncionTexto = miFuncion2.toString();
console.log(miFuncionTexto);

//Funciones Flecha
const sumarFuncionFlecha = (a,b) => a+b;
resultado = sumarFuncionFlecha(3,7);
console.log(resultado);

//Funcion de tupo expresion
let sumar = function(a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+ b + arguments[2];
}
resultado = sumar(3,5,9);
console.log(resultado);


let respuesta = sumarTodo(5,4,13,10,9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i =0;i< arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

//Tipos primitivos
let k = 10;
function cambiarValor(a){
    a = 20;
}

cambiarValor(k);
console.log(k);

//Pasos por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
 function cambiarValorObjeto(p1){
    p1.nombre= 'Ignacio';
    p1.apellido= 'Lopez';
}
cambiarValorObjeto(persona);
console.log(persona);


