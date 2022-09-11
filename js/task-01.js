"use strict";

const ulCategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategoriesRef.length}`);

const textRef = document.querySelector("h2");
console.log(`Category: ${textRef.textContent}`);

const animalsItemRef = ulCategoriesRef[0].lastElementChild;
console.log(`Elements: ${animalsItemRef.children.length}`);

console.log(`Category: ${ulCategoriesRef[1].firstElementChild.textContent}`);

const productsItemRef = ulCategoriesRef[1].lastElementChild;
console.log(`Elements: ${productsItemRef.children.length}`);

console.log(`Category: ${ulCategoriesRef[2].firstElementChild.textContent}`);

const technologiesItemRef = ulCategoriesRef[2].lastElementChild;
console.log(`Elements: ${technologiesItemRef.children.length}`);
