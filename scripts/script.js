import mostrarInfo from "../modules/mostrarInfo.js";

let contenedor = document.getElementById('id');
let but = document.getElementById('btn');
let agg = document.getElementById('agg')
let carrito = document.getElementById('carrito')
const URL = 'https://fresh-prince-api.herokuapp.com/productos'


document.addEventListener('DOMContentLoaded', async ({}) => {

    const { data } = await axios.get(URL);

    mostrarInfo(contenedor, data);
});


agg.addEventListener('submit', async () => {

    let input1 = document.getElementById('valor1').value;
    let input2 = document.getElementById('valor2').value;
    let input3 = document.getElementById('valor3').value;

    let newObjet = {
        name: input1,
        img: input2,
        description: input3
    }

    await axios.post(URL, newObjet);

});

carrito.addEventListener('click', ({target})=>{
    if (target.classList.contains(carrito)) {
        let id = target.id;
        let capElemento = data.find((item) => item.id == id);
        localStorage.setItem('newElemento', JSON.stringify(capElemento));
    }
})




but.addEventListener('click', async () => {

    await axios.delete(urlEmpoin);

});


const put = async (urlEmpoin, objeto = {}) => {
    await axios.put(urlEmpoin, objeto);
};