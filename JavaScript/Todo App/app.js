const todoInput = document.querySelector("#add-todo-input");
const lists = document.querySelector("#lists");
const todoArr = [];

function renderTodoList() {
    lists.innerHTML = '';
    for (let i = 0; i < todoArr.length; i++) {
        lists.innerHTML += `<li>
                <div id="lists-text">
                    ${todoArr[i]}
                </div>
                <div id="lists-btn">
                    <button id="delete" onclick="todoDelete(${i})">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <button id="edit" onclick="todoEdit(${i})">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
            </li>`;
    }
    todoInput.value = '';
}

function todoAdd() {
    if (todoInput.value === "") {
        alert("Write Something");
    } else {
        lists.innerHTML = '';
        todoArr.push(todoInput.value);
        console.log(todoArr);
    }
    renderTodoList();
}

function todoDelete(index) {
    todoArr.splice(index, 1)
    renderTodoList();
}

function todoEdit(index) {
    const editedValue = prompt('Enter your new value');
    todoArr.splice(index, 1 , editedValue);
    renderTodoList();
}
