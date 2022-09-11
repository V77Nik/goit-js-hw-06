const inputRef = document.querySelector("input");
console.log(inputRef);
const inputRefLength = inputRef.getAttribute("data-length");
console.log(inputRefLength);

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const isValid = event.currentTarget.value.length === Number(inputRefLength);

  if (isValid) {
    event.currentTarget.classList.add("valid"),
      event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid"),
      event.currentTarget.classList.add("invalid");
  }
}
