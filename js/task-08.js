const formRef = document.querySelector(".login-form");
console.log(formRef);
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  }
  const obj = { Email: email.value, Password: password.value };

  console.log(obj);
  formRef.reset();
}
