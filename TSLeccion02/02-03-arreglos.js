//Array o arreglos SU creacion:
//let autos = new Array('Ferrari','Renault','BMW'); //esta es una sintaxis vieja
//ahora sintaxis nueva:
const autos =['Ferrari','Renault','BMW'];
console.log(autos);

//Reccorremos los elementos de un arreglo

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i ++){
    console.log(i+' : '+autos[i])}

//Modificar los elementos de un arreglo

autos[1] = 'Volvo';
console.log(autos[1]);

//Agregar nuevos valores

autos.push('Audi');
console.log(autos);

//otra forma
autos[autos.length] = 'Porche';
console.log(autos);

//otra forma
autos[5]='Renault';//siempre tener cuidado de la ubicacion porq queda un espacio
console.log(autos);

//Preguntar si es un arreglo
console.log(Array.isArray(autos));
//nos devuelve un boolean

console.log(autos instanceof Array);