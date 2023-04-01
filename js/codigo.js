let productos 
let cantidadDeProductos;
let seguirComprando
const precioTotalProductos = (num1, num2) => num1 * num2
const eleccionProductos = () => {
    productos = parseInt(prompt(`Elige el producto que quieras llevar:\n1)Hamburguesa con queso 500$\n2)Hamburguesa doble con queso 650$\n3)Hamburguesa de pollo 450$\n4)Hamburgesa XXL 800$\n5)Hamburguesa Veguie 550$\n6)ESC`));
    validacion()
}
const eleccionCantidad = () => {
    cantidadDeProductos = parseInt(prompt("Cuantos productos elegidos va a llevar?"))
}
const seguirCompra = () => {
    seguirComprando = parseInt(prompt(`Desea seguir Comprando?\n1:SI\n2: NO`))

}
const validacion = () => {
    if (isNaN(productos) || productos < 1 || productos > 6) {
        alert("La opcion elegida no es válida, por favor ingrese un numero del 1 al 6")
        eleccionProductos()
    }
    else {
        while(productos !== 6)
        {
            let resultado
            eleccionCantidad()
            if (isNaN(cantidadDeProductos)) {
                alert("La cantidad debe ser espresada en números")
            }
            else {
                if (productos == 1) {
                    resultado = precioTotalProductos(500, cantidadDeProductos)
                    alert(`El total a abonar por ${cantidadDeProductos} hamburguesa con queso es $${resultado}`);
                    seguirCompra()
                    if(seguirComprando === 1 ){
                        eleccionProductos()
                    }
                    break;
                }
                if (productos == 2) {
                    resultado = precioTotalProductos(650, cantidadDeProductos)
                    alert(`El total a abonar por ${cantidadDeProductos} hamburguesa doble con queso es $${resultado}`);
                    seguirCompra();
                    if(seguirComprando === 1 ){
                        eleccionProductos();
                    }
                    break;
                }
                if (productos == 3) {
                    resultado = precioTotalProductos(450, cantidadDeProductos)
                    alert(`El total a abonar por ${cantidadDeProductos} hamburguesa de pollo es $${resultado}`);
                    seguirCompra()
                    if(seguirComprando === 1 ){
                        eleccionProductos();
                    }
                    break;
                }
                if (productos == 4) {
                    resultado = precioTotalProductos(800, cantidadDeProductos)
                    alert(`El total a abonar por ${cantidadDeProductos} hamburguesa XXL es $${resultado}`);
                    seguirCompra()
                    if(seguirComprando === 1 ){
                        eleccionProductos();
                    }
                    break;
                }
                if (productos == 5) {
                    resultado = precioTotalProductos(800, cantidadDeProductos)
                    alert(`El total a abonar por ${cantidadDeProductos} hamburguesa Veguie es $${resultado}`);
                    seguirCompra()
                    if(seguirComprando === 1 ){
                        eleccionProductos();
                    }
                  break;
                }
            }
        }
    }
}
eleccionProductos()
console.log("Gracias por usar nuestra aplicación")