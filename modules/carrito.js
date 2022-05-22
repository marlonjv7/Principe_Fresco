export const carrito = (compras, cont) => {
    cont.innerHTML = ''
    compras.forEach(element => {
        const { name, img1, talla, precio } = element;
        cont.innerHTML += `
        <img src="${img1}"
                                width="100px" class="rounded mx-auto d-block">
                            <h2 class="${name}">Crown Sweatshirt</h2>
                            <h5 class="${talla}">Talla</h5>
                            <h5 class="${precio}">Precio</h5>
                            <div class="colum3">
                                <input type="number">
                                <h3>Remove</h3>`
    })}