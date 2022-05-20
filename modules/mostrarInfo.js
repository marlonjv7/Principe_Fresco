const mostrarInfo = (contain, data) => {

    contain.innerHTML = ''
    data.forEach((element) => {

        const { name, img1, img2, img3, id, descripcion, precio } = element;

        contain.innerHTML += `
        <h1>hola</h1>
        <div class="carrito">
            <h1 id="${id}">${name}</h1>
            <ul>
                <li><img src="${img1}" alt=""></li>
                <li><img src="${img2}" alt=""></li>
                <li><img src="${img3}" alt=""></li>
                <li><img src="" alt=""></li>
            </ul>
            <h2>descripcion</h2>
            <p>${descripcion}</p>
            <p>${precio}</p>
        </div>
        `
    });
};

export default mostrarInfo;