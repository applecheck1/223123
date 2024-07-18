productos[localStorage.getItem("categoria")].forEach(producto=>{
    if(producto.ref=xmenos){
        console.log(producto.precio)
        console.log(producto.nombre)
    }
})


localStorage.getItem("carro").forEach(producto=>{
    if(producto !== null){
        console.log("no existe")
    }else{
        console.log(producto)
    }
})

// Obtén el item del localStorage y conviértelo de nuevo a un array
const carro = JSON.parse(localStorage.getItem("carro") || "[]");

carro.forEach(producto => {
    if (producto === null) {
        console.log("no existe");
    } else {
        console.log("si existe");
    }
});



// Verifica si el item "carro" no existe en localStorage
if (localStorage.getItem("carro") === null) {
    // Crea un array vacío
    let carrito = [];
    
    // Convierte el array a una cadena JSON y almacénalo en localStorage
    localStorage.setItem("carro", JSON.stringify(carrito));
}
xmas='n1'
// Obtén el carrito del localStorage y conviértelo en un array. Usa un array vacío como valor predeterminado si no existe.
const carro = JSON.parse(localStorage.getItem("carro") || "[]");

// Verifica si el carrito está vacío
if (carro.length === 0) {
    console.log("El carrito está vacío.");

    // Recorre los productos de la categoría para encontrar el que coincida con 'xmas'
    productos[localStorage.getItem("categoria")].forEach(producto => {
        if (producto.ref === xmas) {
            // Crea el objeto JSON para el carrito
            const json = {
                nombre: producto.nombre || "",
                imagen: producto.imagen || "",
                precio: producto.precio || "",
                ref: producto.ref || "",
                cantidad: 1
            };

            // Agrega el nuevo producto al carrito
            carro.push(json);

            // Guarda el carrito actualizado en el localStorage
            localStorage.setItem("carro", JSON.stringify(carro));
        }
    });
}


if (a === xmas) {
    producto.cantidad=producto.cantidad+1
    return
}