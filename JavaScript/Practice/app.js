// Call Back Functions


// const Div = document.querySelector("#div");
// const fruits = ["Apple", "Banana", "Orange", "Mango", "Grape", "Strawberry", "Blueberry", "Watermelon", "Pineapple", "Papaya"];

// For Each Function

// fruits.forEach((item, index) => {
//     Div.innerHTML += `
//     <h3>${item} at ${index}</h3>
//     `
// })

// Map Functions

// const fruitsMap = fruits.map((item, index) => {
//     Div.innerHTML += `
//     <h3>${item} at ${index}</h3>
//     `
//     return item;
// })

// console.log(fruitsMap)

// Filter Functions

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredNum = num.filter((item) => {
//     return item > 3
// })
// console.log(filteredNum);

// const Div = document.querySelector("#div");
// const products = [
//     { brand: "Nike", price: 79.99, category: "Shoes" },
//     { brand: "Adidas", price: 89.99, category: "Shoes" },
//     { brand: "Converse", price: 64.99, category: "Shoes" },
//     { brand: "Puma", price: 99.99, category: "Shoes" },
//     { brand: "Vans", price: 59.99, category: "Shoes" },

//     { brand: "Samsung", price: 849.00, category: "Electronics" },
//     { brand: "Apple", price: 1099.00, category: "Electronics" },
//     { brand: "Sony", price: 749.99, category: "Electronics" },
//     { brand: "LG", price: 699.00, category: "Electronics" },
//     { brand: "Microsoft", price: 499.00, category: "Electronics" },

//     { brand: "The Body Shop", price: 19.50, category: "Beauty" },
//     { brand: "L'Oreal", price: 14.99, category: "Beauty" },
//     { brand: "Maybelline", price: 9.99, category: "Beauty" },
//     { brand: "MAC", price: 24.50, category: "Beauty" },
//     { brand: "NARS", price: 32.00, category: "Beauty" }
// ];

// const productsDiv = products.map((item) => {
//     Div.innerHTML += `
//     <h1>Brand: ${item.brand}</h1>
//     <h2>Category: ${item.category}</h2>
//     <h3>Price: ${item.price} $</h3>
//     <hr/>
//     `
//     return item;
// })
// const filteredItems = (btn) => {
//     Div.innerHTML = ''
//     const filtered = products.filter((item) => item.category === btn.innerHTML).map((item) => {
//         Div.innerHTML += `
//     <h1>Brand: ${item.brand}</h1>
//     <h2>Category: ${item.category}</h2>
//     <h3>Price: ${item.price} $</h3>
//     <hr/>
//     `
//         return item;
//     })
// }


const div = document.querySelector("#div");
async function getData() {
    const res = await fetch('https://freetestapi.com/api/v1/countries')
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
}

















