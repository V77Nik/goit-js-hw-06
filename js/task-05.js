const refs = {
  inputRef: document.querySelector("input"),
  nameLable: document.querySelector("#name-output"),
};

refs.inputRef.addEventListener("input", onImputChange);

function onImputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLable.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameLable.textContent = "Anonymous";
  }
}
