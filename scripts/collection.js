import { URL } from "../helpers/urls.js";
import mostrarCard from "../modules/mostrarCard.js";

let contain2 = document.getElementById('mostrar2');

document.addEventListener('DOMContentLoaded', async () => {
    
    const { data } = await axios.get(URL);
    mostrarCard(contain2, data);
});

document.addEventListener('click', async ({ target }) => {
    if(target.classList.contains('seleccionar')){
        let id = target.id
        let newURL = `${URL}/${id}`;

        const {data} = await axios.get(newURL);
        localStorage.setItem('NewData', JSON.stringify(data));  
        window.location.href = '../index.html'
    };
});