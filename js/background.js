const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const bgImage = document.createElement("img");
const icon = document.querySelector(".main-icons i:first-child");
const darkmode = document.querySelector(".main-icons i:nth-child(3)");

function pickImg() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `img/${chosenImage}`;
  document.body.style.background = `url(${bgImage.src}) no-repeat center center`;
}

function setDark() {
  if (document.body.style.backgroundColor === "rgb(60, 60, 60)") {
    const prevImage = localStorage.getItem("image");
    bgImage.src = `img/${images[prevImage]}`;
    document.body.style.background = `url(${bgImage.src}) no-repeat center center`;
    localStorage.removeItem("image");
    document.body.style.backgroundColor = "initial";
  } else {
    const string = document.body.style.backgroundImage;
    const idx = string.lastIndexOf("/") + 1;
    const currentImage = string[idx];
    localStorage.setItem("image", currentImage);
    document.body.style.background = "rgb(60, 60, 60)";
  }
}

pickImg();
icon.addEventListener("click", pickImg);
darkmode.addEventListener("click", setDark);
