//Ciclo WHILE
console.log("CICLO    -----WHILE-----");
let contador =0;
while(contador<3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");


//do while
console.log("CICLO    -----DO WHILE-----");
let conteo = 0;
do{
    console.log(conteo);
    conteo++; 
}while(conteo<3);
console.log("Fin del ciclo Do While");

//For
console.log("CICLO    -----FOR-----");
for(let contando=0;contando<3 ; contando++ ){
    console.log(contando);
}
console.log("Fin del ciclo For");

//Palabra reservada Break
console.log("PALABRA RESERVADA     -----BREAK-----");
for(let contando=0;contando <10;contando++){
    if(contando%2 ==0){
        console.log(contando);//muestra los pares
        break;
    }
}
console.log("Fin del ciclo de pares y corta con el 1er num par");

//Palabra Continue

console.log("PALABRA RESERVADA     -----CONTINUE-----");
for(let contando=0;contando <=10;contando++){
    if(contando%2 !=0){
        continue;//va a la sgte iteracion
    }
    console.log(contando);
}
console.log("Fin del ciclo");

//etiquetas labels
//nos permite ir alguna parte del codigo
inicio://etiqueta
for(let contando=0;contando <=10;contando++){
    if(contando%2 !=0){
        continue inicio;//va a la sgte iteracion
    }
    console.log(contando);
}
console.log("Fin del ciclo");