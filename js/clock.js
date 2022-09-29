const clock = document.querySelector("h2#clock");
const monthBox = document.querySelector(".calendar__month");
const dateBox = document.querySelector(".calendar__date");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
  if (clock.innerText === "00:00:00") {
    getCalendar();
  }
}

function getCalendar() {
  const date = new Date();
  const month = document.querySelector(".calendar__month h1");
  const day = document.querySelector(".calendar__date h1");

  month.innerText = date.getMonth() + 1;
  day.innerText = date.getDate();
  getClock();
}

getCalendar();
setInterval(getClock, 1000);
