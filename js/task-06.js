const inputRef = document.querySelector("#validation-input");


inputRef.addEventListener("input", SymbolInput);

function SymbolInput(event) {
  const targetInput = event.currentTarget;
  const inputTargetLength = targetInput.value.length;
  const validation = Number(targetInput.dataset.length);

  if (inputTargetLength === validation) {
    targetInput.classList.replace("invalid", "valid");
  } else {
    targetInput.classList.add("invalid");
    targetInput.classList.remove("valid");
  }
}
