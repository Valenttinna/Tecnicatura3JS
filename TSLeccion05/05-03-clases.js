class Persona{//CLASE PADRE
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    //Herencia, para heredarlo a la clase hija
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
    //sobreescritura de la clase padre(Object)
    toString(){
        //polimorfismo
        //se va a ejecutar dependiendo el objeto
        //objeto de la clase hija (empleado1)=> se ejecuta la clase hija
        //si llamo el objeto de la clase padre como Persona1
        //=> solo me muestra lo de la clase padre
        return this.nombreCompleto();
    }

}

class Empleado extends Persona{//CLASE HIJA
    constructor(nombre, apellido, departamento){
        super(nombre,apellido)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    
    //SobreEscritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juancho';
console.log(persona1.nombre);
//console.log(persona1);
console.log(persona1.apellido);
persona1.apellido = 'Lopez';
console.log(persona1.apellido);

let persona2 = new Persona('Carlos','Sanchez');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);
console.log(persona2.apellido);
persona2.apellido = 'Funez';
console.log(persona2.apellido);

let empleado1 = new Empleado('Juancho','Lopez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString .... asi accedemos de manera dinamica
console.log(empleado1.toString());
//lo saca de la clase Hija aunque lo hayamos creado en la clase padre
//porque lo llame por empleado1 que es de la clase hija

//ahora lo llamo como persona1 y viene de la clase padre
console.log(persona1.nombreCompleto());