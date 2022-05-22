const mostrarInfo = (contain, data) => {

    contain.innerHTML = ''
    const { name, img1, img2, img3, id, Descripción, precio } = data;

    contain.innerHTML += `
        <div class="row g-0">
            <div class="col-sm-6 col-md-2">
                <img id="${id}" src="${img1}" class="my-2" style="width: 8rem;">
                <img id="${id}" src="${img2}" class="my-2" style="width: 8rem;">
                <img id="${id}" src="${img3}" class="my-2" style="width: 8rem;">
            </div>
            <div class="col-3 col-md-6">
                <img id="${id}" src="${img1}" class="my-2" style="width: 30rem;">
                <img id="${id}" src="${img2}" class="my-2" style="width: 30rem;">
                <img id="${id}" src="${img3}" class="my-2" style="width: 30rem;">
            </div>
            <div class="col-3 col-md-4">
                <h1>${name}</h1>
                <p class="fs-3">${precio}</p><br>
                <p class="fs-5">Size</p>
                <button type="button" id="talla1" class="tall btn btn-light-dark rounded-circle">S</button>
                <button type="button" id="talla2" class="tall btn btn-light-dark rounded-circle">M</button>
                <button type="button" id="talla3" class="tall btn btn-light-dark rounded-circle">L</button>
                <button type="button" id="talla4" class="tall btn btn-light-dark rounded-circle">XL</button>
                <button type="button" id="talla5" class="tall btn btn-light-dark rounded-circle">XXL</button>

                <div class="container-fluid my-2 g-0">
                    <button id="${id}" type="button" class="btn AGGCAR btn-dark btn-md w-100 my-2">ADD TO CART</button>
                    <button type="button" class="comprar btn btn-primary btn-md w-100">BUY IT NOW</button>
                </div>
                <p class="my-3">${Descripción}</p>
                <a href="" class="link-dark">Click for Sizing</a>
            </div>
        </div>
        `
};

export default mostrarInfo;