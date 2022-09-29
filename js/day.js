const submit = document.querySelector(".fa-paper-plane");
const input = document.querySelector(".D-day-Setting__content input");
const setting = document.querySelector(".D-day-Setting");
const span = document.querySelector(".D-day-content");
const date = new Date();
const y = String(date.getFullYear());
const m = String(date.getMonth() + 1).padStart(2, "0");
const d = String(date.getDate()).padStart(2, "0");
input.min = `${y}-${m}-${d}`;
input.value = `${y}-${m}-${d}`;
const savedValue = localStorage.getItem("value");

function setDay() {
  const value =
    savedValue === null ? new Date(input.value) : new Date(savedValue);
  const gap = value - date;
  const result = Math.floor(gap / (1000 * 60 * 60 * 24) + 1);
  localStorage.setItem("value", value);
  setting.classList.add("hidden");
  span.classList.remove("hidden");
  span.innerText = `D - ${result}`;
  span.style.fontSize = "50px";
}

submit.addEventListener("click", setDay);

if (savedValue !== null) {
  setDay();
}
