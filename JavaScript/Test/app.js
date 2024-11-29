const form = document.querySelector("#form");
const productTitle = document.querySelector("#title");
const productDescription = document.querySelector("#description");
const productPrice = document.querySelector("#price");
const renderItems = document.querySelector("#render");
let arr = [];

// Adding Value in The Array

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (productTitle.value != '' && productDescription.value != '' && productPrice.value != '') {
        const product = {
            title: productTitle.value,
            description: productDescription.value,
            price: productPrice.value
        }
        arr.push(product);
        localStorage.setItem("Products", JSON.stringify(arr));
        productTitle.value = '';
        productDescription.value = '';
        productPrice.value = '';

        console.log(arr);
    }
    renderProducts();
});

// Render The Products on the Screen

function renderProducts() {
    renderItems.innerHTML = '';
    arr = [];

    arr = JSON.parse(localStorage.getItem("Products"));
    // console.log(arr);
    arr.map((item, index) => {
        renderItems.innerHTML += `
        <div class="card bg-base-100 w-96 shadow-xl">
           <div class="card-body">
                <h2 class="card-title">Product: ${item.title}</h2>
                <p>Description: ${item.description}</p>
                <p>Price: ${item.price}</p>
                   <div class="card-actions justify-end">
                        <button onclick="addToCart(${index})" class="btn btn-primary">Add to Cart!</button>
                    </div>
            </div>
        </div>
        <a href="./cart.html">Check cart</a>
        `
    });
}
renderProducts();

let items = [];

function addToCart(index) {
    arr = JSON.parse(localStorage.getItem("Products"));
    items.push(arr[index]);
    localStorage.setItem("Items" , JSON.stringify(items));
}
addToCart();