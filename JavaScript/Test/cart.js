const newArr = JSON.parse(localStorage.getItem("Items"));
console.log(newArr);
const renderCart = document.querySelector("#render-cart");

function renderCartItems() {
    renderCart.innerHTML = '';

    newArr.map((items) => {
        renderCart.innerHTML += `
        <div class="card bg-base-100 w-96 shadow-xl">
                   <div class="card-body">
                        <h2 class="card-title">Product: ${items.title}</h2>
                        <p>Description: ${items.description}</p>
                        <p>Price: ${items.price}</p>
                    </div>
                </div>
                <a href="./cart.html">Check cart</a>      
        `
    })
}
renderCartItems();

