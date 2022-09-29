const outIcon = document.querySelector(".main-icons i:last-child");
const toDoli = document.querySelectorAll("#todo-list li");

function logOUT() {
  toDoli.forEach((li) => console.log(li));
  localStorage.clear();
  main.classList.add(HIDDEN_CLASSNAME);
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  location.reload(true);
}

outIcon.addEventListener("click", logOUT);
