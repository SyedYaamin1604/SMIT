const ul = document.querySelector("ul")
const fruits = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "mango",
    "watermelon",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate",
    "apricot"
];


ul.innerhtml = "renderFruits()"
renderFruits() {
    for (i = 0; i < fruits.length; i++) {
        console.log(fruits)
        ul.innerHTML += `<li>
        ${fruits}
        <button onclick="delete()">Delete</button>
        </li>`
    }
}