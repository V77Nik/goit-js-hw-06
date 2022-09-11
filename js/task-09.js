const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  colorSpan: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn() {
  const currentColor = getRandomHexColor();
  refs.colorSpan.textContent = currentColor;
  refs.body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
