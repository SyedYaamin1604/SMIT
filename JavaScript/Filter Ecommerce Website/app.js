const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech",
        imageSrc: "https://th.bing.com/th/id/R.ed0ee40df9a2c25349207672a862e6db?rik=q%2b3LdfDR3LRSaA&pid=ImgRaw&r=0"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung",
        imageSrc: "https://th.bing.com/th/id/OIP.0UmOpqbiS0jpXhlXOFrGCgHaE7?w=264&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell",
        imageSrc: "https://th.bing.com/th/id/OIP.vN1Wz6K7U4C0RO8Csw3y1wHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTGqKuUxJQRAjFouwn17dxjf6XuCZu4Ybjw&s"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHPC29-hk0d3MO58Uq7zaW_dOi3elNF-rnw&s"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pqWKfqyRCGbIQLLelwQkftNeNRTBjnpkHg&s"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAGYRstEGAfK2a3N0We4pl1JlhhpuhPupEg&s"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6A_FtkolHWErTWXVdsHwGMGQD__XecqQk6g&s"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDs3nx3GqFnleQLoO2Uq9Sky5LF92LS7QWxg&s"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqOvQkbLm4uN1fPV9Tn4ND3tO-Sfj3Wa9WA&s"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpgRQIQ5sebMc1Uqu5soj8rgqblXtfNLOiQ&s"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9Lznw1NtDV3NafPOw9wds8oVuUl8CtytwA&s"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDTdHMjJ691BWrSNNjsppneV7c8CP-OSOUA&s"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNA2AELwM9zFg3EEpR_6739MamaVHEY3UWA&s"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuEHfnD4pSCD5nsL1p0lpxg0fEKOo2tqP6Q&s"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpNuPWg0_LjAXvEW02WDUzcVA-GyYL-S5LgQ&s"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKltccp8Nx3_qSKoFbSuZJ5EnvEX1m20c2Jg&s"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT674vlG3b0TIJmWpAcy5h1xIhDkLfGiDlb6A&s"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUSj8f__5nnZ_zPLwhbb9IYs9cJIyP4Uj9A&s"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fuigbXTVYq8KUnqvHqXAj7eBju8Qke8NAQ&s"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCJwpibEWC6Sw07sHdVy_ZV_1TRmGtEftKg&s"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReorNob4tVisAWYJY4AXPyB3BGOiGTIX5Q6Q&s"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmUNM_erYkDwznKPU-wuW-3_SA5WUco4kQ&s"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZr-j29jXZh8kmUp4FkY3pP2Ucu79aqbeqwA&s"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gvfgv385G9ZuBCQFXz_omuLfDHSz_psQNw&s"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFMAtvVtoSxk38dUMvAuE24L4HYRtXTZgKg&s"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG_qLhCjtSvjznbQr5yoaA8uICbldI5TGdA&s"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDQCRPldlguHhCaLHD5qbrNJHkin2RNWY1Q&s"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5IoebKMqiqv7Air4hAkVQpbJJEobQM2YlQ&s"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1u5eqVDBfKvTP-qzXNUlXDpPC41E5jrzdJw&s"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacfYvawATc4PBf4GGLvO8F9ggNOvEKB8nkg&s"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRraFaQEWgQtzRTaCwUN1ODfOi1ktgEjUsA&s"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNsilDOxLeaeFplWIc5m40sgi0pxFeTfY2A&s"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdfPmde1LuWOy96EgGqlOpPR6A2rGTSKgTg&s"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAFr1oeZYy72WyhguU3njOi_Gr7ZBAehl2g&s"
    }
];
const mdiv = document.querySelector("#mdiv");

for (let i = 0; i < products.length; i++) {
    mdiv.innerHTML += `
        <div class="card mt-5" style="width: 18rem;">
        <img id="image" src="${products[i].imageSrc}" class="card-img-top " alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${products[i].name}</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">${products[i].price}</li>
                <li class="list-group-item">${products[i].category}</li>
                <li class="list-group-item">${products[i].brand}</li>
            </ul>
        </div>`
}

const Categories = document.querySelector(".nav-mitem");
Categories.addEventListener("click", function () {
    for (let i = 0; i < products.length; i++) {
        mdiv.innerHTML += `
            <div class="card mt-5" style="width: 18rem;">
            <img id="image" src="${products[i].imageSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${products[i].name}</h5>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">${products[i].price}</li>
                    <li class="list-group-item">${products[i].category}</li>
                    <li class="list-group-item">${products[i].brand}</li>
                </ul>
            </div>`
    }
})
  
const categoryTabs = document.querySelectorAll(".nav-link");

for (let j = 0; j < categoryTabs.length; j++) {
    categoryTabs[j].addEventListener("click", function () {
        mdiv.innerHTML = "";
        const category = this.textContent.toLowerCase();
        const filteredProducts = products.filter(
            (item) => item.category.toLowerCase() === category
        );

        for (let k = 0; k < filteredProducts.length; k++) {
            mdiv.innerHTML += `
        <div class="card mt-5" style="width: 18rem;">
        <img id="image" src="${filteredProducts[k].imageSrc}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">${filteredProducts[k].name}</h5>
          </div>
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">${filteredProducts[k].price}</li>
            <li class="list-group-item">${filteredProducts[k].category}</li>
            <li class="list-group-item">${filteredProducts[k].brand}</li>
          </ul>
        </div>`;
        }
    });
}