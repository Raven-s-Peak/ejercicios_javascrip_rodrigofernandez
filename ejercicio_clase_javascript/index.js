/*1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123
*/


//          SOLUCION 1

function piramide(num) {
    let i = 1;
    let piramide = '';
    while (i <= num) {
        piramide += i
        console.log(piramide)
        i++
    } 
};

piramide(6);



/*2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, false, true, 3, true]
Resultado: [3, true]
*/





//          SOLUCION 2

const array1 = [4, 3, true, 'manzana'];
const array2 = ['pera', 3, false, true, 3, true];


function coincidir(arr1, arr2) {
    let newArray = [];

        for(let i = 0; i < arr2.length; i++) {
            if(arr1.includes(arr2[i]) && !newArray.includes(arr2[i])) {
                newArray.push(arr2[i])
        }
    }

    return newArray;

}

console.log(coincidir(array1, array2));







/*
3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.





//          SOLUCION   3.1  - solucion completa 3.1 + 3.2 + 3.3 esta al final uncommented.

class Carrito {
    montoTotal;
    productos;
    constructor(montoTotal, productos) {
        this.montoTotal = montoTotal;
        this.productos = productos;
    }
}

const micarrito = new Carrito(13, ['pan', 'queso', 'jamon']);
console.log(micarrito); 


*/


/*
3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal



//          Solucion 3.2

agregarProducto(nombre, precio, unidades) {
    // Completar aca...
     this.productos.push(nombre);
    this.montoTotal += precio * unidad
}


Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}

*/





/*3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades” 
*/



//          SOLUCION COMPLETA 3



class Carrito {
    
    constructor(montoTotal  = 0 , productos = [], unidades = {}) {
        this.montoTotal = montoTotal;
        this.productos = productos;
        this.unidades = unidades;
    }

    //          SOLUCION 3.3 >> agrega objeto unidades (por producto) y valida non-duplicates
    agregarProducto(nombre, precio, unidad) {
        if (this.productos.includes(nombre)){
            console.log(`Ya existe ${nombre} con ${this.unidades[nombre]} unidades`)
        } else {
            this.productos.push(nombre);
            this.unidades[nombre] = unidad;
            this.montoTotal += precio * unidad
        }
    }
}

const micarrito = new Carrito();
micarrito.agregarProducto('pan', 10, 2);
micarrito.agregarProducto('milanesa', 20, 5);
micarrito.agregarProducto('pan', 10, 1 );
micarrito.agregarProducto('milanesa', 20, 3);

console.log(micarrito); 
console.log(micarrito.unidades);