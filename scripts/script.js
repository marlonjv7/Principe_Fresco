import { URLCarrito, URLProductos } from "../helpers/urls.js";
import mostrarCard from "../modules/mostrarCard.js";
import mostrarInfo from "../modules/mostrarInfo.js";

let contenedor = document.getElementById('mostrar');
let contain2 = document.getElementById('mostrar2');
let but = document.getElementById('btn'); //este es para modificar el carrito
let carrito = document.getElementById('carrito') // y este para agregar al carrito 
let dataNew = JSON.parse(localStorage.getItem('NewData'));

if (dataNew != null) {
    mostrarInfo(contenedor, dataNew)
}


document.addEventListener('DOMContentLoaded', async ({ }) => {
   

    const { data } = await axios.get(URLProductos);
    mostrarCard(contain2, data);
});

document.addEventListener('click', async ({ target }) => {
    if (target.classList.contains('seleccionar')) {
        let id = target.id
        let newURL = `${URLProductos}/${id}`;
        const { data } = await axios.get(newURL);
        localStorage.setItem('NewData', JSON.stringify(data));
        window.location.href = './index.html'
    } else if (target.classList.contains('AGGCAR')) {
        const {name, img1, img2, img3, Descripción} = dataNew
        let objectNew = {
            name,
            img1,
            img2,
            img3,
            Descripción
        }
        try {
            console.log(objectNew)
            await axios.post(URLCarrito, objectNew);
            Swal.fire({
                title: 'Todo bien',
                icon: 'success'
            })
        } catch (error) {
            Swal.fire({
                title: 'Oops algo anda mal...',
                icon: 'error'
            })
        }
    } else { }

});

// carrito.addEventListener('click', ({target})=>{
//     if (target.classList.contains(carrito)) {
//         let id = target.id;
//         let capElemento = data.find((item) => item.id == id);
//         localStorage.setItem('newElemento', JSON.stringify(capElemento));
//     }
// })


// but.addEventListener('click', async () => {
//     await axios.delete('https://fresh-prince-api.herokuapp.com/carrito/');
// });

// const put = async (urlEmpoin, objeto = {}) => {
//     await axios.put(urlEmpoin, objeto);
// };