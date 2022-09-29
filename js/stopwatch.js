const stopwatch = document.querySelector("#stopwatch");
const playIcon = document.querySelector(".fa-play");
const stopIcon = document.querySelector(".fa-pause");
const resetIcon = document.querySelector(".fa-arrow-rotate-right");

let total = 0;
let hr = 0;
let min = 0;
let sec = 0;
let interval;

function resetTime() {
  stopIcon.parentElement.classList.add("hidden");
  playIcon.parentElement.classList.remove("hidden");
  clearInterval(interval);
  total = -1;
  printTime();
}

function stopTime() {
  stopIcon.parentElement.classList.add("hidden");
  playIcon.parentElement.classList.remove("hidden");
  clearInterval(interval);
}

function printTime() {
  total++;
  hr = String(Math.floor(total / 3600)).padStart(2, "0");
  min = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  sec = String(Math.floor((total % 3600) % 60)).padStart(2, "0");
  stopwatch.innerText = `${hr}:${min}:${sec}`;
}

function playTime() {
  playIcon.parentElement.classList.add("hidden");
  stopIcon.parentElement.classList.remove("hidden");
  interval = setInterval(printTime, 1000);
}

stopIcon.addEventListener("click", stopTime);
playIcon.addEventListener("click", playTime);
resetIcon.addEventListener("click", resetTime);
