class Producto{

    static contadorProducto = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `
        ${this._idProducto} 
        ${this._nombre} 
        ${this._precio}`;
    }
}//Fin de la clase producto

class Orden{
    static contadorOrdenes=0;
    static getMAX_PRODUCTOS(){
      return 5;
    }
    constructor(){
      this._idOrden = ++Orden.contadorOrdenes;
      this._productos = [];
      this._contadorProductosAgregados = 0;
    }
get idOrden(){
  return this._idOrden;
}

agregarProductos(producto){
  if(this._productos.length < Orden.getMAX_PRODUCTOS()){
    this._productos.push(producto);//tenemos dos tipos de sintaxis: 1
    //this._productos[this._contadorProductosAgregados++]=producto;//sintaxis:2
  }
  else{
    console.log('No se pueden agregar mas productos')
  }
}//Fin metodo agregar prod

calcularTotal(){
  let totalVenta = 0;
  for(let producto of this._productos){
    totalVenta += producto.precio;
  }//Fin ciclo For
  return totalVenta;
}//Fin metodo calcularTotal

mostrarOrden(){
  let porductosOrden = ' ';
  for(let producto of this._productos){
    porductosOrden += '{'+producto.toString()+' }';
  }//Fin del ciclo for
  console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${porductosOrden}`);
}//Fin metodo mostrarOrden

}//Fin class Orden

let producto1 = new Producto('Remera',4600);
let producto2 = new Producto('Pantalon',15990);
let producto3 = new Producto('Saco',35000);
let producto4 = new Producto("Corpiño",6200);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.agregarProductos(producto3);
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden2.agregarProductos(producto3);
orden1.mostrarOrden();
orden2.mostrarOrden();

