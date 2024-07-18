const carri = JSON.parse(localStorage.getItem("carro") || "[]")

carri.forEach(producto => {
    document.querySelector('.'+producto.ref).innerHTML=producto.cantidad
})