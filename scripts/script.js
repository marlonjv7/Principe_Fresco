import { URLCarrito, URLProductos } from "../helpers/urls.js";
import mostrarCard from "../modules/mostrarCard.js";
import mostrarInfo from "../modules/mostrarInfo.js";
import { mostrarCarrito } from "../modules/mostrarCarrito.js"

let contenedor = document.getElementById('mostrar');
let contain2 = document.getElementById('mostrar2');
let id_carrito = document.getElementById('mostrarCarrito');
let dataNew = JSON.parse(localStorage.getItem('NewData'));
let tall;
let tallID;

if (dataNew != null) {
    mostrarInfo(contenedor, dataNew)
}

document.addEventListener('DOMContentLoaded', async ({ }) => {

    const { data } = await axios.get(URLProductos);
    mostrarCard(contain2, data);
});

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('tall')) {
        tallID = target.id
    };
});


document.addEventListener('click', async ({ target }) => {

    if (target.classList.contains('seleccionar')) {
        let id = target.id
        let newURL = `${URLProductos}/${id}`;
        const { data } = await axios.get(newURL);
        localStorage.setItem('NewData', JSON.stringify(data));
        window.location.href = './index.html'

    } else if (target.classList.contains('AGGCAR')) {

        if (tallID == 'talla1') {
            tall = 'S'
        } else if (tallID == 'talla2') {
            tall = 'M'
        } else if (tallID == 'talla3') {
            tall = 'L'
        } else if (tallID == 'talla4') {
            tall = 'XL'
        } else if (tallID == 'talla5') {
            tall = 'XXL'
        } else {
            Swal.fire({
                title: 'Oops... Te falto la talla',
                icon: 'error'
            })
        };
        if(tall != undefined){
            const { name, img1, precio } = dataNew
            let objectNew = {
                name,
                img1,
                tall,
                precio
            };
            await axios.post(URLCarrito, objectNew);
        };
        
    } else if (target.classList.contains('comprar')) {

        Swal.fire({
            title: 'FELICIDADES PRO TU COMPRAR!!!!',
            icon: 'success'
        })
        window.location.href = '../index.html'


    } else if (target.classList.contains('clickMod')) {

        const { data } = await axios.get(URLCarrito);
        mostrarCarrito(data, id_carrito);

    } else if (target.classList.contains('btnEliminarCarrito')) {
        let deleteURL = `${URLCarrito}/${target.id}`
        await axios.delete(deleteURL);
        window.location.href = '../index.html'

    } else { }

});