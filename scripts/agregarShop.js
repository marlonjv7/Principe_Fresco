import { URLProductos, URLCarrito } from "../helpers/urls.js";
import { mostrarCarrito } from "../modules/mostrarCarrito.js"
let id_carrito = document.getElementById('mostrarCarrito');
let formNewProduct = document.getElementById('formNewProduct')


formNewProduct.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let img1 = document.getElementById('IMG1').value;
    let img2 = document.getElementById('IMG2').value;
    let img3 = document.getElementById('IMG3').value;
    let precio = document.getElementById('precio').value;
    let descripcion = document.getElementById('descripcion').value;

    let newObjet = {
        name: nombre,
        img1,
        img2,
        img3,
        precio,
        descripcion
    };

    try {
        await axios.post(URLProductos, newObjet);
        Swal.fire({
            title: 'Producto Agregado',
            icon: 'success'
        })
        window.location.href = '../pages/collection.html'
    } catch (error) {
        Swal.fire({
            title: 'Oops...',
            icon: 'error'
        })
    }
});

document.addEventListener('click', async ({ target }) => {

    if (target.classList.contains('clickMod')) {

        const { data } = await axios.get(URLCarrito);
        mostrarCarrito(data, id_carrito);


    } else if (target.classList.contains('comprar')) {

        Swal.fire({
            title: 'FELICIDADES PRO TU COMPRAR!!!!',
            icon: 'success'
        })
        window.location.href = '../pages/agregarShop.html'


    } else if (target.classList.contains('btnEliminarCarrito')) {
        let deleteURL = `${URLCarrito}/${target.id}`
        await axios.delete(deleteURL);
        window.location.href = '../pages/agregarShop.html'

    } else { }
});
