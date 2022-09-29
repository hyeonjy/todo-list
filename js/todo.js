const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function setCircle() {
  const arr = JSON.parse(localStorage.getItem(TODOS_KEY));
  const span = document.querySelector(".percent");
  const circle = document.querySelector(".circle-progress");
  let success = 0;
  let progress = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked == "true") {
        success += 1;
      }
      progress = Math.floor((success / arr.length) * 100);
    }
  }
  span.innerText = `${progress}%`;
  circle.style.background = `conic-gradient(lightseagreen ${progress}%, #e3e3e3 0%)`;
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  setCircle();
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintLine(event) {
  const li = event.target.parentElement.parentElement;
  const span = li.children[0].children[1];
  const todo = toDos.find((toDo) => toDo.id === parseInt(li.id));
  if (event.target.checked === true) {
    span.style.textDecoration = "line-through";
    todo.checked = "true";
  } else {
    span.style.textDecoration = "";
    todo.checked = "false";
  }
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkBox = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("i");
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  div2.style.display = "flex";
  div2.style.marginRight = "5px";
  div2.style.alignItems = "center";

  checkBox.type = "checkbox";
  checkBox.style.marginRight = "10px";
  if (newTodo.checked === "true") {
    checkBox.checked = true;
    span.style.textDecoration = "line-through";
  } else {
    checkBox.checked = false;
  }
  button.className = "fa-solid fa-delete-left";
  button.style.cursor = "pointer";
  button.style.color = "lightseagreen";
  button.addEventListener("click", deleteToDo);
  checkBox.addEventListener("change", paintLine);

  span.innerText = newTodo.text;
  span.style.fontSize = "20px";

  li.style.width = "230px";
  li.style.marginBottom = "8px";
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "space-between";

  li.appendChild(div);
  div.appendChild(checkBox);
  div.appendChild(span);
  li.appendChild(div2);
  div2.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    checked: "false",
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  setCircle();
}
