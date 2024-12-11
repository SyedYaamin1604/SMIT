interface Fruits{
    fruitName: string;
    price: number;
}

interface Mango extends Fruits{
    type: string;
}

const fruit:Fruits = {
    fruitName: "Mango",
    price: 3000,
}

const mango:Mango = {
    fruitName: "Mango",
    price: 3000,
    type: "Chaunsa",
}