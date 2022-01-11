const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const updateValue = function (event) {
  if (event.target.value === "") {
    output.textContent = "Anonymous";
    return;
  }
  output.textContent = event.target.value;
};
input.addEventListener("input", updateValue);
