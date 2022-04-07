const categories = document.querySelector("#categories");


const listOfCategories = categories.querySelectorAll("li.item");
console.log("Number of categories:", listOfCategories.length);


const animals = document.querySelector("h2");
console.log("Category:", animals.textContent);


const numberOfAnimals = animals.nextElementSibling.querySelectorAll("li");
console.log("Elements:", numberOfAnimals.length);


const products = listOfCategories[1].firstElementChild;
console.log("Category:", products.textContent);

const numberOfProducts = products.nextElementSibling.querySelectorAll("li");
console.log("Elements:", numberOfProducts.length);


const technologies = listOfCategories[2].firstElementChild;
console.log("Category:", technologies.textContent);

const numberOfTechnologies = technologies.nextElementSibling.querySelectorAll("li");
console.log("Elements:", numberOfTechnologies.length);


