const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const createIngredientElement = (name) => {

    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = name;
    ingredientEl.classList.add("item");

   
    ingredientsList.append(ingredientEl);

  return ingredientEl;
};

const ingredientElements = ingredients.map(createIngredientElement);
console.log(ingredientElements);

