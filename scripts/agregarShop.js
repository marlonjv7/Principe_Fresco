import { URLProductos } from "../helpers/urls.js";
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
