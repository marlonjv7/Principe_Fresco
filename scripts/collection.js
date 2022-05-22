import { URLProductos, URLCarrito } from "../helpers/urls.js";
import mostrarCard from "../modules/mostrarCard.js";
import { mostrarCarrito } from "../modules/mostrarCarrito.js"
let id_carrito = document.getElementById('mostrarCarrito');


let contain2 = document.getElementById('mostrar2');

document.addEventListener('DOMContentLoaded', async () => {

    const { data } = await axios.get(URLProductos);
    mostrarCard(contain2, data);
});

document.addEventListener('click', async ({ target }) => {
    if (target.classList.contains('seleccionar')) {
        let id = target.id
        let newURL = `${URLProductos}/${id}`;

        const { data } = await axios.get(newURL);
        localStorage.setItem('NewData', JSON.stringify(data));
        window.location.href = '../index.html'
    } else if (target.classList.contains('comprar')) {

        Swal.fire({
            title: 'FELICIDADES PRO TU COMPRAR!!!!',
            icon: 'success'
        })
        window.location.href = '../pages/collection.html'


    } else if (target.classList.contains('clickMod')) {

        const { data } = await axios.get(URLCarrito);
        mostrarCarrito(data, id_carrito);


    } else if (target.classList.contains('btnEliminarCarrito')) {
        let deleteURL = `${URLCarrito}/${target.id}`
        await axios.delete(deleteURL);
        window.location.href = '../pages/collection.html'

    } else { }
});