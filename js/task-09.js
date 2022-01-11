

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomHexColor = getRandomHexColor();
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", eventButtonHandler);

function eventButtonHandler() {
   const body = document.querySelector("body");
  color.textContent = getRandomHexColor()
  body.style.backgroundColor = `${color.textContent}`};
