const incrementEl = document.querySelector("[data-action='increment']");
const decrementtEl = document.querySelector("[data-action='decrement']");
const counter = document.querySelector("#value");
let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
incrementEl.addEventListener("click", increment);
decrementtEl.addEventListener("click", decrement);
