const inputRef = document.querySelector("input");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", onChangeSize);
function onChangeSize(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
