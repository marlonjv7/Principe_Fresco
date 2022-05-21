const mostrarInfo = (contain, data) => {

    contain.innerHTML = ''
    data.forEach((element) => {

        const { name, img1, img2, img3, id, Descripción, precio } = element;

        contain.innerHTML += `
        <div class="row g-0">
            <div class="col-sm-6 col-md-2">
                <img src="${img1}" class="my-2" style="width: 8rem;">
                <img src="${img2}" class="my-2" style="width: 8rem;">
                <img src="${img3}" class="my-2" style="width: 8rem;">
            </div>
            <div class="col-3 col-md-6">
                <img src="${img1}" class="my-2" style="width: 30rem;">
                <img src="${img2}" class="my-2" style="width: 30rem;">
                <img src="${img3}" class="my-2" style="width: 30rem;">
            </div>
            <div class="col-3 col-md-4">
                <h1>${name}</h1>
                <p class="fs-3">$${precio}</p><br>
                <p class="fs-5">Size</p>
                <button type="button" class="btn btn-light-dark rounded-circle">S</button>
                <button type="button" class="btn btn-light-dark rounded-circle">M</button>
                <button type="button" class="btn btn-light-dark rounded-circle">L</button>
                <button type="button" class="btn btn-light-dark rounded-circle">XL</button>
                <button type="button" class="btn btn-light-dark rounded-circle">XXL</button>

                <div class="container-fluid my-2 g-0">
                    <button type="button" class="btn btn-dark btn-md w-100 my-2">ADD TO CART</button>
                    <button type="button" class="btn btn-primary btn-md w-100">BUY IT NOW</button>
                </div>
                <p class="my-3">${Descripción}</p>
                <a href="" class="link-dark">Click for Sizing</a>
            </div>
        </div>
        `
    });
};

export default mostrarInfo;