let productSelected
let cartView = document.getElementById('cart')
let products = [
    {
        id: 1,
        nombre: "Hamburguesa con queso",
        descripcion: "Hamburguesa con queso cheddar",
        categoria: "Hamburguesa",
        precio: 10.50,
        stock: 5,
        cantidad: 0
    },
    {
        id: 2,
        nombre: "Hamburguesa doble con queso",
        categoria: "Hamburguesa",
        descripcion: "Hamburguesa con 4 quesos cheddar",
        precio: 15.00,
        stock: 5,
        cantidad: 0
    },
    {
        id: 3,
        nombre: "Hamburguesa de pollo",
        categoria: "Hamburguesas",
        descripcion: "Hamburguesa con pollo, lechuga y tomate",
        precio: 7.99,
        stock: 5,
        cantidad: 0
    },
    {
        id: 4,
        nombre: "Hamburgesa XXL",
        descripcion: "Hamburguesa con triple carne, panceta y queso cheddar",
        categoria: "Hamburguesa",
        precio: 22.75,
        stock: 5,
        cantidad: 0
    },
    {
        id: 5,
        nombre: "Hamburguesa Veguie",
        categoria: "Hamburguesa",
        descripcion: "Hamburguesa de lentejas con tomate, lechuga y condimentos",
        precio: 16.99,
        stock: 5,
        cantidad: 0
    }
];
const cart = [];
const findProductById = (id) => {
    let findProduct = products.find((product) => product.id === id)
    return findProduct
}
const eleccionProductos = () => {
    productSelected = parseInt(prompt(`Elige el producto que quieras llevar:\n1)Hamburguesa con queso\n2)Hamburguesa doble con queso\n3)Hamburguesa de pollo\n4)Hamburgesa XXL\n5)Hamburguesa Veguie\n6)ESC`));
    validacion();
}
const eleccionCantidad = (product) => {
    cantidadDeProductos = parseInt(prompt(`Cantidad de ${product.nombre} que vas a agregar al carrito?`));
    return cantidadDeProductos
}
const seguirCompra = () => {
    let seguirComprando = parseInt(prompt(`Desea seguir Comprando?\n1:SI\n2: NO`))
    return seguirComprando;
}
const validacion = () => {
    if (isNaN(productSelected) || productSelected < 1 || productSelected > 6) {
        alert("La opcion elegida no es válida, por favor ingrese un numero del 1 al 6")
        eleccionProductos()
    }
    else {
        let findProduct = findProductById(productSelected)
        let catidadDeProducto = eleccionCantidad(findProduct)
        if (isNaN(catidadDeProducto)) {
            alert("La cantidad debe ser espresada en números")
            eleccionCantidad(findProduct)
        }
        else {
            if (cart.some(product => product.id === productSelected)) {
                findProduct.cantidad += catidadDeProducto
            }
            else {
                findProduct.cantidad += catidadDeProducto
                cart.push(findProduct)
            }
            let continuarCompra = seguirCompra()
            if (isNaN(continuarCompra)) {
                alert("La opcion ingresada no existe")
                seguirCompra()
            }
            if (continuarCompra === 1) {
                eleccionProductos()
            }
            else {
                let total = 0
                cart.forEach(product => total += (product.precio * product.cantidad))
                alert("El total de su carrito es de: $" + total)
            }
        }
    }
}
eleccionProductos()