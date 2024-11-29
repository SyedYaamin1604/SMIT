const Div = document.querySelector("#div");

axios('https://fakestoreapi.com/products')
    .then((res) => {
        console.log(res.data)
        res.data.map((item) => {
            Div.innerHTML += `
            <div class="card d-flex justify-content-center align-items-center text-center pt-3 bg-dark text-light border-light" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="..." style="width: 10rem; height: 10rem;>
                    <div class="card-body">
                        <h5 class="card-title mt-2">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <h5 class="card-text">${item.price}$</h5>
                    </div>
            </div>
        `
        })
    }).catch((err) => {
        console.log(err);
    })