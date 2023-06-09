class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return ` ${this._idPersona}  ${this._nombre}  ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return ` ${super.toString()}  ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClietes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente =++Cliente.contadorClietes;
        this._fechaRegistro =fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()}  ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//PRUEBA CLASE PERSONA
let persona1 = new Persona('Juan','Perez',32);
console.log(persona1.toString());

let persona2 = new Persona('Carla','Ortega',22);
console.log(persona2.toString());

//PRUEBA CLASE EMPLEADO
let empleado1 = new Empleado('Valentina','Reche',30,320000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Caterina','Clark',35,60000);
console.log(empleado2.toString());

//PRUEBA CLASE CLIENTE
let cliente1 = new Cliente('Miguel','Zalas',29, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente('Carlos','Ching',25, new Date());
console.log(cliente2.toString());
