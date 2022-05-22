export const mostrarCarrito = (compras, cont) => {
    cont.innerHTML = ''
    compras.forEach(element => {
        const { name, img1, tall, precio, id } = element;
        cont.innerHTML += `
        <img src="${img1}" width="100px" class="rounded d-block">
        <h2 class="">${name}</h2>
        <h5 class="">Talla</h5>
        <p>${tall}</p>
        <h5 class="">Precio</h5>
        <p>${precio}</p>
        <div class="colum3">
            <input type="number">
            <button id="${id}" class="btn btn-danger p-0 btnEliminarCarrito" style="height: 30px;">
            <h3 id="${id}" class="text-center btnEliminarCarrito" style="font-size: 14px">Remove</h3>
            </button>
        </div>`
    })
}