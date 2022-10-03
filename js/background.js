const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const bgImage = document.createElement("img");
const icon = document.querySelector(".main-icons i:first-child");
const darkmode = document.querySelector(".main-icons i:nth-child(3)");

function setImg(chosenImage) {
  bgImage.src = `img/${chosenImage}`;
  document.body.style.background = `url(${bgImage.src}) no-repeat center center`;
  const string = document.body.style.backgroundImage;
  const idx = string.lastIndexOf("/") + 1;
  const currentImage = string[idx];
  localStorage.setItem("image", currentImage);
}

function pickImg() {
  const random = Math.floor(Math.random() * images.length);
  let chosenImage = images[random];
  const getImg = localStorage.getItem("image");
  if (getImg === null || getImg + ".jpg" !== chosenImage) {
    setImg(chosenImage);
  } else {
    chosenImage = images[(random + 1) % images.length];
    setImg(chosenImage);
  }
}

function setDark() {
  if (document.body.style.backgroundColor === "rgb(60, 60, 60)") {
    const prevImage = localStorage.getItem("image");
    bgImage.src = `img/${images[prevImage]}`;
    document.body.style.background = `url(${bgImage.src}) no-repeat center center`;
    document.body.style.backgroundColor = "initial";
  } else {
    document.body.style.background = "rgb(60, 60, 60)";
  }
}

pickImg();
icon.addEventListener("click", pickImg);
darkmode.addEventListener("click", setDark);
