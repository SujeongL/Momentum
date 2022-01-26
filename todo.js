// 오늘의 할 일 입력 받아 출력하기
let todayTodo = document.getElementById("today-todo")
let task = document.getElementById("task");
let todoList = document.getElementById("todoList");

let TODOS_LS = "toDos";

function add_todo(text) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = text;

    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
}

function handle_submit(event) {
    event.preventDefault();
    let currentValue = task.value
    add_todo(currentValue);
    task.value = "";
}

function load_todo() {
    let toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
    }
}

function init() {
    load_todo();
    todayTodo.addEventListener("submit", handle_submit);
}

init();