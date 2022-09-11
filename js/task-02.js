const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

/
const elements = ingredients.map((index) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredients[index];
  itemRef.classList.add("item");

  return itemRef;
});

console.log(elements);

ingredientsRef.append(...elements);
