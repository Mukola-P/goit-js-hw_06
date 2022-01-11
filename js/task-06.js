const inputRef = document.querySelector("#validation-input");

const SymbolInput = (event) => {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.replace("valid", "invalid");
  }
};

inputRef.addEventListener("blur", SymbolInput);
