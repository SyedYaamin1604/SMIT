const form = document.querySelector("#form");
const expenseInput = document.querySelector("#expense-input");
const expensePrice = document.querySelector("#expense-price");
const renderUl = document.querySelector("#render-ul");
const deleteBtn = document.querySelector("#delete");
const editBtn = document.querySelector("#edit");
const total = document.querySelector("#total");
let arr = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (expenseInput.value != '' && expensePrice.value != '') {
    expense = {
      expense: expenseInput.value,
      price: expensePrice.value
    }
    arr.push(expense);;

    localStorage.setItem('Expense', JSON.stringify(arr));
    expenseInput.value = '';
    expensePrice.value = '';
    renderFunction();
  } else {
    alert("Input Should not be Empty!!!");
  }
})

totalVal = 0;
const renderFunction = () => {
  renderUl.innerHTML = '';
  arr = [];

  arr = JSON.parse(localStorage.getItem('Expense'));
  totalVal = arr.reduce((totalVal, item) => totalVal + parseInt(item.price), 0);
  if (totalVal == null) {
    total.innerHTML = `<p id="total" class="mb-3 text-2xl bg-slate-300 border-gray-500 rounded-2xl w-[400px] px-3 py-2.5">
    No Expense Added Yet!!
    </p>`
  } else {
    total.innerHTML = `<p id="total" class="mb-3 text-2xl bg-slate-300 border-gray-500 rounded-2xl w-[400px] px-3 py-2.5">
    Total Amount: ${totalVal}
    </p>
    `
  }

  arr.map((item, index) => {
    renderUl.innerHTML += `
    <li class=" mb-3 text-2xl bg-slate-300 border-gray-500 rounded-2xl w-[400px] px-3 py-2.5 flex justify-between align-center">
            <span>${item.expense}: ${item.price} Rs</span>
            <span>
              <button onclick="deleteItem(${index})" class="btn btn-primary"><i class="fa-solid fa-xmark"></i></button>
              <button onclick="editItem(${index})" class="btn btn-error"><i class="fa-solid fa-pen-to-square"></i></button>
            </span>
          </li>
    `
  })
}
renderFunction();

const editItem = (index) => {
  const newExpense = prompt("Update your Expense Name:", arr[index].expense);
  const newPrice = prompt("Update your Price:", arr[index].price);

  if (newExpense != '' && newPrice != '') {
    arr[index].expense = newExpense;
    arr[index].price = newPrice;
    localStorage.setItem('Expense', JSON.stringify(arr));
    renderFunction();
  }
}

const deleteItem = (index) => {
  arr.splice(index, 1);
  localStorage.setItem('Expense', JSON.stringify(arr));
  renderFunction();
}