const mostrarCard = (contain, data) => {

    contain.innerHTML = ''
    data.forEach((element) => {

        const { name, img1, precio } = element;

        contain.innerHTML += `
        <div class="card" style="border: none; text-align: center">
                 <img src="${img1}" style="height:511px; width:340px" class="card-img-top w-100 p-2 h-75" alt="...">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">$${precio}</p>
           </div>
        </div>
        `
    });
};

export default mostrarCard;







