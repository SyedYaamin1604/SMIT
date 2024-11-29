const todoInput = document.querySelector("#todo-input");
const todoAdd = document.querySelector("#add-todo");
const todoUl = document.querySelector("#todo-ul");

const arr = JSON.parse(localStorage.getItem("todos")) || [];

// Render Todo
const renderTodo = () => {
    todoUl.innerHTML = '';
    arr.map((item, index) => {
        todoUl.innerHTML += `
        <li class="flex justify-between align-center border-2 rounded-md p-[5px] text-xl h-15 mb-[15px]">
            <span>${item}</span>
            <span>
                <button onclick="delTodo(${index})" class="btn btn-error"><i id='delete' class="fa-solid fa-xmark"></i></button>
                <button onclick="editTodo(${index})" class="btn btn-active btn-neutral"><i id='edit' class="fa-solid fa-pen-to-square"></i></button>    
            </span>
        </li>
        `;
        console.log(arr);
    });
};
renderTodo();

// Add Todo
todoAdd.addEventListener("click", () => {
    if (todoInput.value !== "") {
        arr.push(todoInput.value);
        localStorage.setItem("todos", JSON.stringify(arr));
        todoInput.value = '';
        renderTodo();
    }
});

// Delete Todo

function delTodo(index) {
    arr.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(arr));
    renderTodo();
}


// Edit Todo

function editTodo(index) {
    const newTodo = prompt("Edit your Todo: ", arr[index]);
    if (newTodo !== '') {
        arr[index] = newTodo;
        localStorage.setItem("todos", JSON.stringify(arr));
        renderTodo();
    }
}
